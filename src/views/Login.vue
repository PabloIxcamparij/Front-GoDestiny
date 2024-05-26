<script setup>
import { useForm, useField } from "vee-validate";
import { ref } from "vue"; // Asegúrate de importar ref de 'vue'
import { useRouter } from "vue-router"; // Importa useRouter de vue-router

// regla para validar
import { loginSchema as validationSchema } from "../validation/loginSchema";

const { handleSubmit } = useForm({ validationSchema });

const router = useRouter();
const phone = useField("phone");
const isSmsRequested = ref(false);
const telefonoIngresado = ref("");

const submit = handleSubmit(() => {
  isSmsRequested.value = true;
  telefonoIngresado.value = phone.value.value;
});

const handleLogin = () => {
  isSmsRequested.value = true;

  router.push({ name: "home" }); // Redirige programáticamente
};
</script>

<template>
  <v-card class="container-login" max-height="800" flat>
    <div class="background-image-container">
      <img
        src="/FondoLogin.jpg"
        class="background-image"
        alt="Background image"
      />
    </div>

    <div class="container-loginInfo">
      <v-card-title class="text-h4 font-weight-bold">
        Iniciar Sesión
      </v-card-title>

      <v-card-title class="text-h6 font-weight-bold text-black">
        Ingrese su teléfono
      </v-card-title>

      <v-form class="mt-5 text-center">
        <v-text-field
          type="phone"
          label="Teléfono"
          variant="solo-filled"
          class="labelRegistro"
          placeholder="Ejemplo: 8777 5410"
          v-model="phone.value.value"
          :error-messages="phone.errorMessage.value"
        >
        </v-text-field>

        <div class="contenedor-btnSolicitar">
          <v-btn elevation="4" class="btn-login" @click="submit">
            Solicitar SMS
          </v-btn>
        </div>
      </v-form>

      <v-card-title class="text-h6 font-weight-bold">
        Ingrese el código enviado
      </v-card-title>

      <!-- Segundo form -->
      <v-form class="mt-5 text-center">
        <v-text-field
          type="phone"
          class="labelRegistro"
          variant="solo-filled"
          v-model="telefonoIngresado"
          readonly
        />

        <v-text-field
          type="password"
          label="Código SMS"
          variant="solo-filled"
          class="labelRegistro"
        >
        </v-text-field>

        <div class="contenedor-btn">
          <v-btn
            size="small"
            :to="{ name: 'registroUsuario' }"
            class="btn-registro"
          >
            Toque para registrarse
          </v-btn>

          <v-btn
            elevation="4"
            class="btn-ingresar"
            :disabled="!isSmsRequested"
            @click="handleLogin"
          >
            Ingresar
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<style scoped>
@import "../Style/stylesLogin.css";
</style>
