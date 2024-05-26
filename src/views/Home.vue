<template>
  <v-card class="homeMenu" flat>

    <v-btn elevation="4" class="opPassenger">
      <div class="button-content">
        <img src="/Pasajero.svg" class="imgOpcion" />
        <h3>Empezar El Viaje</h3>
      </div>
    </v-btn>

    <v-btn elevation="4" class="opDriver">
      <div class="button-content">
        <img
          src="/Conductor.svg"
          class="imgOpcion"
          :to="{ name: 'registroConductor' }"
        />
        <h3>Empezar A Conducir</h3>
      </div>
    </v-btn>
    
  </v-card>
</template>

<style scoped>

@import "../Style/stylesHome.css";

</style>
