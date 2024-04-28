

<template>
    <v-card max-width="80%" class="mx-auto">
        <v-layout >
            <v-app-bar color="blue-grey-darken-4">

                <template v-slot:prepend>
                    <v-btn :to="{name: 'login'}"> 
                        Iniciar Sesion
                    </v-btn>
                </template>

                <template v-slot:append>
                    <v-btn :to="{name: 'home'}"> 
                        Home
                    </v-btn>
                </template>

            </v-app-bar>

            <v-main >
                <v-container >
                    <router-view > </router-view>
                </v-container>
            </v-main>

        </v-layout>
    </v-card>

</template>
