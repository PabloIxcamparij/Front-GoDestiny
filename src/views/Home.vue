<!-- <template>
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
</template> -->

<style scoped>
@import "../Style/stylesHome.css";
@import "../Style/index.css";
</style>

<template>
  <v-tabs v-model="tab" align-tabs="center" color="green-darken-1
  ">
    <v-tab value="one">
      <h3> Pasajero</h3>
    </v-tab>

    <v-tab value="two">
      <h3> Conductor</h3>
    </v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">

    <v-tabs-window-item value="one">

      <v-container fluid>

        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-btn elevation="4" class="opPassenger">
              <div class="button-content">
                <img src="/Pasajero.svg" class="imgOpcion" />
                <h3>Empezar El Viaje</h3>
              </div>
            </v-btn>
          </v-col>
        </v-row>

      </v-container>

    </v-tabs-window-item>

    <v-tabs-window-item value="two">
      <v-container fluid>
        <v-row justify="center">

          <v-col cols="12" md="6">

            <div class="conteinerDriver">


              <v-btn elevation="4" class="opDriver">
                <div class="button-content">
                  <img src="/Conductor.svg" class="imgOpcion" :to="{ name: 'registroConductor' }" />
                  <h3>Empezar A Conducir</h3>
                </div>
              </v-btn>

              <v-btn :to="{ name: 'registroConductor' }">
                <h3> Registrarse</h3>
              </v-btn>

            </div>

          </v-col>

        </v-row>
      </v-container>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script>
export default {
  data() {
    return {
      tab: 'one' // Establece la pestaña de "Buscar viaje" como activa por defecto
    }
  }
}
</script>
