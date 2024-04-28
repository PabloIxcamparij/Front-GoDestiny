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
  <v-card class="cotainer-login" max-height="800" flat >

    <div class="background-image-container">
      <img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="cotainer-loginInfo">
      <v-card-title class="text-h3 font-weight-bold">
        Inicar Sesion
      </v-card-title>

      <v-card-subtitle class="text-h6 font-weight-bold">
        Ingrese su contraseña y telefono
      </v-card-subtitle>
      <v-form class="mt-5 text-center">
        <v-text-field type="phone" label="Telefono" class="mb-5" placeholder="Ejemplo: 8777 5410"
          v-model="phone.value.value" :error-messages="phone.errorMessage.value">

        </v-text-field>

        <v-text-field type="password" label="Contraseña" class="mb-5" v-model="password.value.value"
          :error-messages="password.errorMessage.value">

        </v-text-field>

        <v-btn elevation="4" class="btn-login" @click="submit">
          Ingresar
        </v-btn>

      </v-form>

    </div>

  </v-card>
</template>

<style scoped>
.cotainer-login {
  display: flex;
}

.background-image-container {
  position: absolute;
}

.background-image {
  width: 50%;
}

.cotainer-loginInfo{
  margin-left: 50%;
  width: 50%;
}

.btn-login {
  background-color: #93ddaa;
  margin-bottom: 10%;
}

.btn-login:hover {
  background-color: #2e3d43;
  color: white;
}
</style>