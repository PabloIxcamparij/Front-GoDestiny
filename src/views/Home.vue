<template>

  <v-card class="homeMenu" flat>

    <v-btn elevation="4" class="opDriver">
      <div class="button-content">
        <img src="/Conductor.svg" class="imgOpcion"  :to="{ name: 'registroConductor'}"/>
        <h3>Empezar A Conducir</h3>
      </div>
      
    </v-btn>

    <v-btn elevation="4" class="opPassenger" >

      <div class="button-content">
        <img src="/Pasajero.svg" class="imgOpcion"/>
        <h3>Empezar El Viaje</h3>
      </div>

    </v-btn>
  </v-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.homeMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.imgOpcion{
  width: 30vw;
}

.opPassenger {
  width: 100%;
  height: 35vw;
  background-color:  #d6f3de;
  display: flex;
  padding: 5%;
}

.opPassenger:hover {
  background-color:  #93ddaa ;
}

.opDriver {
  width: 100%;
  height: 35vw;
  background-color:   #829acb;
}

.opDriver:hover {
  background-color:  #3056ad ;
}

.button-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>