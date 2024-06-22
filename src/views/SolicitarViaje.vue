<template>
    <div class="pt-16">

        <h3 class="text-h5 font-weight-bold title">¿Dónde vamos?</h3>

        <form action="#">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">

                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <GMapAutocomplete placeholder="Destino" @place_changed="handleLocationChanged"
                            class="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm">
                        </GMapAutocomplete>
                    </div>
                </div>

                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <v-btn @click.prevent="handleSelectLocation" type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4">
                        Ver viaje
                    </v-btn>
                </div>

            </div>
        </form>

        <div v-if="showMap">

            <h1 class="text-3xl font-semibold mb-4">¿Este es su destino?</h1>

            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">

                <div>
                    <GMapMap :zoom='11' :center="location.destination.geometry" ref="gMap"
                        style="width: 100%; height: 256px;">
                    </GMapMap>
                </div>

                <div class="bg-white px-4 py-5 sm:p-6">
                    <div class="mt-2">
                        <h3 class="text-xl">El destino es <strong>{{ location.destination.name }}</strong></h3>
                    </div>

                </div>

                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <v-btn @click="handleCreateTravel"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4">
                        Crear viaje!
                    </v-btn>

                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useCounterStore } from '../stores/counter';
import axios from 'axios';
import Swal from 'sweetalert2';

const router = useRouter();

const location = useCounterStore();
const gMap = ref(null);
const showMap = ref(false);
const travel = ref(false)

const telefonoPasajero = 12345678;

const handleLocationChanged = (e) => {
    console.log('Location changed:', e);

    location.$patch({
        destination: {
            name: e.name,
            address: e.formatted_address,
            geometry: {
                lat: e.geometry.location.lat(),
                lng: e.geometry.location.lng()
            }
        }
    });
}

// 'telefono' => 12345678,
// 'nombre' => 'Juan',
// 'apellido' => 'Pérez',
//  'email' => 'juan.perez@example.com'


// 'cedula' => 118760258,
// 'cuentaBancaria' => '1234-5678-9012-3456',
// 'licencia' => 1,
// 'telefono' => 12345678

// nombreDelDestino: location.destination.name

const handleCreateTravel = () => {

    const formData = {
        pasajero: telefonoPasajero,
        ubicacionPasajero: JSON.stringify(location.current.geometry), // Convierte los objetos geometry a strings
        ubicacionDestino: JSON.stringify(location.destination.geometry), // Convierte los objetos geometry a strings
    }

    axios.post('http://localhost:8000/api/travel', formData)
        .then(response => {
            Swal.fire(
                'Viaje creado',
                'El viaje ha sido creado exitosamente',
                'success'
            );

            travel.value = response.data.viaje.id
            console.log(travel.value);

            // Realiza la navegación a la ruta esperandoConductor con el parámetro id
            router.push({ name: 'esperandoConductor', params: { id: travel.value } });

        })
        .catch(error => {
            Swal.fire(
                'Error',
                `Hubo un error al crear el viaje: ${error.response.data.message || 'Error desconocido'}`,
                'error'
            );

            console.log(error.response.data.message)
        });
}

const handleSelectLocation = async () => {
    if (location.destination.name !== '') {
        showMap.value = true;
        await location.updateCurrentLocation();

        if (gMap.value && gMap.value.$mapPromise) {
            gMap.value.$mapPromise.then((mapObject) => {
                let currentPoint = new google.maps.LatLng(location.current.geometry),
                    destinationPoint = new google.maps.LatLng(location.destination.geometry),
                    directionService = new google.maps.DirectionsService,
                    directionsDisplay = new google.maps.DirectionsRenderer({ map: mapObject });

                directionService.route({
                    origin: currentPoint,
                    destination: destinationPoint,
                    avoidTolls: false,
                    avoidHighways: false,
                    travelMode: google.maps.TravelMode.DRIVING
                }, (res, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(res);
                    } else {
                        console.log(status);
                    }
                });
            });
        }
    }
}

onMounted(async () => {
    if (location.destination.name == '') {
        await location.updateCurrentLocation();
    }
});


</script>

<style scoped>
@import "../Style/index.css";
</style>
