<style scoped>
@import "../Style/index.css";
</style>

<template>
    <v-card class="mx-auto" subtitle="Esperando conductor"
        width="full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <template v-slot:title>
            <span class="font-weight-black">Información del viaje</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
            <div v-if="travel">
                <p><strong>Id del Pasajero:</strong> {{ travel.pasajero }}</p>
                <p><strong>Nombre del pasajero:</strong> {{ `${travel.usuario.nombre} ${travel.usuario.apellido}` }}</p>
                <p><strong>Conductor:</strong> {{ travel.conductor ? travel.conductor : 'Esperando conductor' }}</p>
                <p><strong>Estado:</strong> {{ travel.estado ? 'Activo' : 'Inactivo' }}</p>
                <p><strong>Fecha de creación:</strong> {{ new Date(travel.created_at).toLocaleString() }}</p>
                <p><strong>Última actualización:</strong> {{ new Date(travel.updated_at).toLocaleString() }}</p>

                <GMapMap :zoom='11' :center="location.destination.geometry" ref="gMap" :disableDefaultUI="true"
                    style="width: 100%; height: 256px; margin-top: 20px;">
                </GMapMap>

            </div>
            <div v-else>
                <p>Cargando información del viaje...</p>
            </div>
        </v-card-text>
    </v-card>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useCounterStore } from '../stores/counter';

const route = useRoute();
const travel = ref(null);
const gMap = ref(null);
const idTravel = ref(null);

const location = useCounterStore();

const capturaDeOficinaAEditar = async () =>{
    idTravel.value = route.params.id;
    console.log(idTravel);
};


const getTravel = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/viajes/${idTravel.value}`);
        travel.value = response.data.travel;

        console.log(travel.value);

        const ubicacionDestinoParsed = JSON.parse(travel.value.ubicacionDestino);

        location.$patch({
            destination: {
                geometry: {
                    lat: ubicacionDestinoParsed.lat,
                    lng: ubicacionDestinoParsed.lng
                }
            }
        });

        handleSelectLocation()

    } catch (error) {
        console.error('Error al obtener la información del viaje:', error);
    }
};


const handleSelectLocation = async () => {
    if (location.destination.geometry !== '') {
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


onMounted(() => {
    capturaDeOficinaAEditar();
    getTravel();
    location.updateCurrentLocation();
});


</script>