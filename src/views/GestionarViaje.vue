
<script>

</script>

<template>
    <h3 class="text-h5 font-weight-bold title"> Gestion del viaje</h3>

    <div class="contenedor-conductor mt-5 mb-5">
        <h3 class="text-h5 font-weight-bold title"> Seleccione su opcion como conductor </h3>

        <v-btn clas="btn-aceptar" color="green-darken-1">
            Aceptar el viaje
        </v-btn>

        <v-btn>
            Volver al buscador
        </v-btn>

    </div>

    <div class="contenedor-pasajero mt-5 mb-5">
        <h3 class="text-h5 font-weight-bold title"> Seleccione su opcion como pasajero</h3>

        <v-btn color="green-darken-1">
            Aceptar al conductor
        </v-btn>

        <v-btn>
            Cancelar el viaje
        </v-btn>
    </div>

</template>

<style scoped>
@import "../Style/index.css";
.contenedor-pasajero, .contenedor-conductor {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
}

</style>