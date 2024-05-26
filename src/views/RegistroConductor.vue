<script setup>
import { useForm, useField } from 'vee-validate'

// regla para validar
import { loginSchema as validationSchema } from '../validation/loginSchema'

const { handleSubmit } = useForm({ validationSchema })

const phone = useField('phone')
const password = useField('password')

const submit = handleSubmit(() => {

})

</script>

<template>
  <v-card class="container-login" max-height="1000" flat>
    <div class="background-image-container">
      <v-img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="container-loginInfo">
      <v-card-title class="text-h4 font-weight-bold">
        Registro
      </v-card-title>

      <v-card-title class="text-h6 font-weight-bold">
        Ingrese sus datos como nuevo conductor
      </v-card-title>

      <v-form class="mt-5 text-center">
        <v-text-field variant="solo-inverted" type="cedula" label="Cédula" class="labelRegistro">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="cuentaBancaria" label="Número de cuenta bancaria" class="labelRegistro">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="placa" label="Placa del vehículo" class="labelRegistro">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="modeloVehiculo" label="Modelo del vehículo" class="labelRegistro">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="cantidadPasajeros" label="Cantidad de pasajeros" class="labelRegistro">
        </v-text-field>

        <v-select variant="solo-inverted" clearable chips label="Licencia" :items="['Tipo B1', 'Tipo B2', 'Tipo A1', 'Tipo A2', 'Tipo A3']" multiple class="labelRegistro">
        </v-select>

        <v-btn elevation="4" class="btn-login" @click="submit">
          Registrarse
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<style scoped>
@import "../Style/stylesLogin.css";
</style>



<style scoped>
@import '../Style/stylesLogin.css';
</style>