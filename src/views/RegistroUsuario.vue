<script setup>
import { useForm, useField } from "vee-validate";
import { registroUsuarioSchema as validationSchema} from "../validation/ValidationSchema";

const { handleSubmit } = useForm({ validationSchema })

const nombre = useField("nombre");
const apellido = useField("apellido");
const correo = useField("correo");
const phone = useField("phone");


const submit = handleSubmit(() => {
    console.log('Submit...')
})

</script>

<template>
  <v-card class="container-login" max-height="1000" flat>

    <div class="background-image-container">
      <img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="container-loginInfo">

      <h3 class="text-h4 font-weight-bold"> Registro de usurio</h3>

      <h3 class="text-h10 font-weight-bold">
        Ingrese sus datos
      </h3>

      <v-form class="mt-5 text-center">
        <v-text-field variant="solo-inverted" type="nombre" label="Nombre" class="labelRegistro mt-5"
          v-model="nombre.value.value" :error-messages="nombre.errorMessage.value">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="apellido" label="Apellido" class="labelRegistro mt-5"
          v-model="apellido.value.value" :error-messages="apellido.errorMessage.value">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="phone" label="Telefono" class="labelRegistro mt-5"
          v-model="phone.value.value" :error-messages="phone.errorMessage.value">
        </v-text-field>

        <v-text-field variant="solo-inverted" type="correo" label="Correo eletronico" class="labelRegistro mt-5"
          v-model="correo.value.value" :error-messages="correo.errorMessage.value">
        </v-text-field>

        <v-btn elevation="4" class="btn-login mt-5" @click="submit">
          Registrarse
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<style scoped>
@import "../Style/stylesLogin.css";
@import "../Style/index.css"
</style>
