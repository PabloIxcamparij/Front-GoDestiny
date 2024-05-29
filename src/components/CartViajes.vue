<!-- src/components/CartViajes.vue -->
<template>
  <v-card class="cart mx-auto">
    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

    <v-card-title>Viaje activo</v-card-title>
    <v-card-subtitle>Destino del pasajero</v-card-subtitle>

    <v-card-actions>
      <v-btn color="green-darken-1" @click="show = !show">Ver mas</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          Datos del viaje
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>
.cart{
  width: 100%;
}
</style>