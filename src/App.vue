
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isAuthRoute = computed(() => route.name === 'login' || route.name === 'registroUsuario')
const showLoginButton = computed(() => route.name === 'login' || route.name === 'registroUsuario')

</script>

<template>
    <v-card max-width="80%" class="mx-auto">
        <v-layout>
            <v-app-bar color="blue-grey-darken-4">
                <template v-slot:prepend>
                    <v-btn :to="{ name: 'login' }" v-if="showLoginButton">
                        Iniciar Sesión
                    </v-btn>
                </template>

                <template v-slot:append class="padding-5">
                    <v-btn :to="{ name: 'home' }" v-if="!isAuthRoute">
                        Home
                    </v-btn>

                    <v-btn :to="{ name: 'registroConductor' }" v-if="!isAuthRoute">
                        Registro como conductor
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
