<script setup>
import { useForm, useField } from 'vee-validate'

import { registroConductorSchema as validationSchema} from "../validation/ValidationSchema";

const { handleSubmit } = useForm({ validationSchema })

const placa = useField("placa");
const cedula = useField("cedula");
const cuentaBancaria = useField("cuentaBancaria");
const modeloVehiculo = useField("modeloVehiculo");
const licencia = useField("licencia", validationSchema.licencia);

// const cantidadPasajeros = useField("cantidadPasajeros", registroConductorSchema.cantidadPasajeros);

const submit = handleSubmit(() => {
    console.log('Submit...')
})
const cantidadPasajeros = useField('cantidadPasajeros');

const incrementCantidadPasajeros = () => {
  const cantidad = parseInt(cantidadPasajeros.value.value) || 0;
  cantidadPasajeros.value.value = Math.min(cantidad + 1, 12); // No exceder 12 pasajeros
};

const decrementCantidadPasajeros = () => {
  const cantidad = parseInt(cantidadPasajeros.value.value) || 0;
  cantidadPasajeros.value.value = Math.max(cantidad - 1, 2); // No menos de 2 pasajeros
};


</script>

<template>
  <v-card class="container-login" max-height="1000" flat>
    <div class="background-image-container">
      <v-img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="container-loginInfo">
      <h3 class="text-h4 font-weight-bold">
        Registro de conductor
      </h3>

      <h3 class="text-h10 font-weight-bold">
        Ingrese sus datos
      </h3>

      <v-form class="mt-5 text-center">
        <v-text-field variant="solo-inverted" type="cedula" label="Cédula" class="labelRegistro mt-5"
          v-model="cedula.value.value" :error-messages="cedula.errorMessage.value">

        </v-text-field>

        <v-text-field variant="solo-inverted" type="cuentaBancaria" label="N cuenta bancaria" class="labelRegistro mt-5"
          v-model="cuentaBancaria.value.value" :error-messages="cuentaBancaria.errorMessage.value">

        </v-text-field>

        <v-text-field variant="solo-inverted" type="placa" label="Placa del vehículo" class="labelRegistro mt-5"
          v-model="placa.value.value" :error-messages="placa.errorMessage.value">

        </v-text-field>

        <v-text-field variant="solo-inverted" type="modeloVehiculo" label="Modelo del vehículo"
          class="labelRegistro mt-5" v-model="modeloVehiculo.value.value"
          :error-messages="modeloVehiculo.errorMessage.value">

        </v-text-field>

        <h3 class="text-h10 font-weight-bold">
          Cantidad de pasajeros
        </h3>
        <v-text-field type="cantidadPasajeros" class="labelRegistro mt-5" :value="cantidadPasajeros.value.value"
          :error-messages="cantidadPasajeros.errorMessage.value" readonly>
          <template #append>
            <v-btn icon @click="decrementCantidadPasajeros">
              -
            </v-btn>

            <v-btn icon @click="incrementCantidadPasajeros" class="ml-5">
              + </v-btn>
          </template>
        </v-text-field>

        <v-select type="licencia" variant="solo-inverted" clearable chips label="Licencia"
          :items="['Tipo B1', 'Tipo B2', 'Tipo A1', 'Tipo A2', 'Tipo A3']" multiple class="labelRegistro mt-5"
          v-model="licencia.value.value"
          :error-messages="licencia.errorMessage.value">
        </v-select>

        <v-btn elevation="4" class="btn-login mt-5" @click="submit">
          Registrarse
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<style scoped>
@import "../Style/stylesLogin.css";
</style>