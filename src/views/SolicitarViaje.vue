<script>

</script>

<template>
    <h3 class="text-h5 font-weight-bold title">Ingrese su destino</h3>
    <div class="cotenedor-solicitud">

        <div class="contenedor-busqueda">

            <v-form class="from-busqueda mt-1 text-center">

                <v-text-field label="Busque su destino" variant="underlined" class="labelBuscador" />

                <v-btn class="btn-buscar" variant="text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="icon">
                        <path fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </v-btn>

            </v-form>


        </div>

        <div class="contenedor-mapa">

        </div>

        <v-btn  class="mt-5 mb-10" color="green-darken-1">
           Crear viaje
        </v-btn>
    </div>

</template>

<style scoped>
@import "../Style/index.css";

.title {
    margin: 2.5vw
}

.cotenedor-solicitud {
    display: flex;
    flex-direction: column;
}

.contenedor-busqueda, .contenedor-mapa {
    width: 100%;
    height: 10vw;
}

.contenedor-mapa {
    margin-top: 20%;
    height: 50vw;
    background-color: bisque;
}

.from-busqueda {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 35px;
}

.labelBuscador {
    width: 25vw;
}

.btn-buscar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.icon {
    width: 30px;
    height: 30px;
}

</style>