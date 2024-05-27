<script setup>
import { useForm, useField } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { solicitarSMSSchema, ingresarSchema } from "../validation/ValidationSchema";

const phone = useField("phone", solicitarSMSSchema.phone);
const sms = useField("sms", ingresarSchema.sms);

const router = useRouter();

const isSmsRequested = ref(false);
const isLabelRequested = ref(true)
const telefonoIngresado = ref("");


const handleSubmitSolicitar = async () => {

    isSmsRequested.value = true;
    isLabelRequested.value = false;
    telefonoIngresado.value = phone.value;

};

const handleSubmitIngresar = async () => {
  // const { errors } = await sms.validate();
  // if (!errors) {
  
  // }

  isSmsRequested.value = true;
    router.push({ name: "home" });
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
      <h3 class="text-h4 font-weight-bold">
        Inicio de sesión
      </h3>

      <h3 class="text-h10 font-weight-bold text-black">
        Ingrese su teléfono
      </h3>

      <v-form class="mt-5 text-center">
        <v-text-field
          type="phone"
          label="Teléfono"
          variant="solo-filled"
          class="labelRegistro"
          placeholder="Ejemplo: 8777 5410"
          v-model="phone.value.value"
          :error-messages="phone.errorMessage.value"
          :disabled="!isLabelRequested"

        >
        </v-text-field>

        <div class="contenedor-btnSolicitar mt-5">
          <v-btn elevation="4" class="btn-login" @click="handleSubmitSolicitar">
            Solicitar SMS
          </v-btn>
        </div>
      </v-form>

      <h3 class="text-h10 font-weight-bolod mt-5">
        Ingrese el código enviado
      </h3>

      <!-- Segundo form -->
      <v-form class="mt-5 text-center">
        <v-text-field
          type="phone"
          class="labelRegistro"
          variant="solo-filled"
          v-model="phone.value.value"
          readonly
        />

        <v-text-field
          type="sms"
          label="Código SMS"
          variant="solo-filled"
          class="labelRegistro"
          v-model="sms.value.value"
          :error-messages="sms.errorMessage.value"
    
        >
        </v-text-field>

        <div class="contenedor-btn mt-5">
          <v-btn
            size="small"
            :to="{ name: 'registroUsuario' }"
            class="btn-registro"
          >
            Registrarse
          </v-btn>

          <v-btn
            elevation="4"
            class="btn-ingresar"
            :disabled="!isSmsRequested"
            @click="handleSubmitIngresar"
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
