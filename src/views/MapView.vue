<template>
    <div class="pt-16">
        <h1 class="text-3xl font-semibold mb-4">¿Este es su destino?</h1>
        <div>
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">

                <div>
                    <GMapMap v-if="location.destination.name !== ''" :zoom='11' :center="location.destination.geometry"
                        ref="gMap" style="width: 100%; height: 256px;">

                    </GMapMap>

                </div>
                <div class="bg-white px-4 py-5 sm:p-6">

                    <div class="mt-2">
                        <h3 class="text-xl">El destino es <strong> {{ location.destination.name }} </strong></h3>
                    </div>

                </div>

                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">

                    <button class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4">
                        Let's Go!</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';
import { onMounted, ref } from 'vue';

const location = useCounterStore()
const router = useRouter()

const gMap = ref(null)


onMounted(async () => {

    if (location.destination.name == '') {
        router.push({
            name: 'solicitarViaje'

        })
    }

    await location.updateCurrentLocation()
    if (gMap.value && gMap.value.$mapPromise) {

        gMap.value.$mapPromise.then((mapObject) => {

            let currentPoint = new google.maps.LatLng(location.current.geometry),
                destinationPoint = new google.maps.LatLng(location.destination.geometry),
                directionService = new google.maps.DirectionsService,
                directionsDisplay = new google.maps.DirectionsRenderer({
                    map: mapObject
                })

            directionService.route({
                origin: currentPoint,
                destination: destinationPoint,
                avoidTolls: false,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING

            }, (res, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(res)
                } else {
                    console.log(status);
                }
            }
            )
        })
    }
})

</script>

<style scoped>
@import "../Style/index.css";
</style>