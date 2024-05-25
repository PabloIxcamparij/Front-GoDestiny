<script setup>
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue' // Asegúrate de importar ref de 'vue'
import { useRouter } from 'vue-router' // Importa useRouter de vue-router


// regla para validar
import { loginSchema as validationSchema } from '../validation/loginSchema'

const { handleSubmit } = useForm({ validationSchema })

const phone = useField('phone')
const password = useField('password')
const isSmsRequested = ref(false)
const router = useRouter() // Usa useRouter para obtener el enrutador



const submit = handleSubmit(() => {

  isSmsRequested.value = true
})

const handleLogin = () => {

  isSmsRequested.value = true

  router.push({ name: 'home' }) // Redirige programáticamente


}


</script>

<template>
  <v-card class="cotainer-login" max-height="800" flat>

    <div class="background-image-container">
      <img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="cotainer-loginInfo">
      <v-card-title class="text-h4 font-weight-bold">
        Inicar Sesion
      </v-card-title>

      <v-card-subtitle class="text-h6 font-weight-bold">
        Ingrese su contraseña y telefono
      </v-card-subtitle>

      <v-form class="mt-5 text-center">

        <v-text-field type="phone" label="Telefono" variant="solo-filled" class="labelRegistro"
          placeholder="Ejemplo: 8777 5410" v-model="phone.value.value" :error-messages="phone.errorMessage.value">

        </v-text-field>

        <v-text-field type="password" label="CodigoSMS" variant="solo-filled" class="labelRegistro"
          v-model="password.value.value" :error-messages="password.errorMessage.value">

        </v-text-field>

        <v-card-subtitle class="subTitleRegistro">
          <v-btn size="small" :to="{ name: 'registroUsuario' }" variant="plain"> Toque para registrarse </v-btn>
        </v-card-subtitle>

        <v-btn elevation="4" class="btn-login" @click="submit">
          Solicitar SMS
        </v-btn>

        <v-btn elevation="4" class="btn-login" :disabled="!isSmsRequested" @click="handleLogin">
          Ingresar
        </v-btn>

      </v-form>



    </div>

  </v-card>
</template>


<style scoped>
@import '../CSS/stylesLogin.css';
</style>