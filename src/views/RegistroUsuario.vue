<script setup>
import { useForm, useField } from 'vee-validate'

// regla para validar
import { loginSchema as validationSchema } from '../validation/loginSchema'

const { handleSubmit } = useForm({ validationSchema })

const phone = useField('phone')

const submit = handleSubmit(() => {

})

</script>

<template>
  <v-card class="cotainer-login" max-height="1000" flat>

    <div class="background-image-container">
      <v-img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="cotainer-loginInfo">
      <v-card-title class="text-h4 font-weight-bold">
        Registro
      </v-card-title>

      <v-card-subtitle class="text-h6 font-weight-bold">
        Ingrese sus datos como nuevo usuario
      </v-card-subtitle>

      <v-form class="mt-5 text-center">

        <v-text-field type="nombre" label="Nombre" class="labelRegistro">

        </v-text-field>

        <v-text-field type="apellido" label="Apellido" class="labelRegistro">

        </v-text-field>

        <v-text-field type="phone" label="Telefono" class="labelRegistro">

        </v-text-field>

        <v-text-field type="correo" label="Correo eletronico" class="labelRegistro">

        </v-text-field>

        <v-btn elevation="4" class="btn-login" @click="submit">
          Registrarse
        </v-btn>

      </v-form>

    </div>

  </v-card>
</template>

<style scoped>
@import '../CSS/stylesLogin.css';
</style>

