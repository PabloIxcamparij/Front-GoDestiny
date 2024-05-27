
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Definición de la propiedad isAuthRoute
const isAuthRoute = computed(() => route.name === 'login' || route.name === 'registroUsuario')

const showLoginButton = computed(() => route.name === 'login' || route.name === 'registroUsuario')

</script>

<template>
    <v-card max-width="80%" class="mx-auto">
        <v-layout>
            <v-app-bar color="blue-grey-darken-4">
                <template v-slot:prepend>
                    <v-btn :to="{ name: 'login' }" v-if="showLoginButton">
                        <h3> Inicio sesión</h3>
                    </v-btn>

                    <v-btn :to="{ name: 'login' }" v-if="!isAuthRoute">
                        <h3> Cerrar sesión</h3>
                    </v-btn>
                </template>

                <template v-slot:append class="padding-5">
                    <v-btn :to="{ name: 'home' }" v-if="!isAuthRoute">
                        <h3>Home</h3>
                    </v-btn>


                </template>

            </v-app-bar>

            <v-main>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-main>
            
        </v-layout>
    </v-card>
</template>


<style scoped>

@import "./Style/index.css";
</style>