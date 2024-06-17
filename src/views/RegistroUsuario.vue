<template>
  <v-card class="container-login" max-height="1000" flat>
    <div class="background-image-container">
      <img src="/FondoLogin.jpg" class="background-image" alt="Background image" />
    </div>

    <div class="container-loginInfo">
      <h3 class="text-h4 font-weight-bold">Registro de usuario</h3>
      <h3 class="text-h10 font-weight-bold">Ingrese sus datos</h3>

      <v-form class="mt-5 text-center" @submit.prevent="submit">
        <v-text-field variant="solo-inverted" type="text" label="Nombre" class="labelRegistro mt-5" v-model="nombre" required></v-text-field>

        <v-text-field variant="solo-inverted" type="text" label="Apellido" class="labelRegistro mt-5" v-model="apellido" required></v-text-field>

        <v-text-field variant="solo-inverted" type="tel" label="Teléfono" class="labelRegistro mt-5" v-model="telefono" required></v-text-field>

        <v-text-field variant="solo-inverted" type="email" label="Correo electrónico" class="labelRegistro mt-5" v-model="email" required></v-text-field>

        <v-btn elevation="4" class="btn-login mt-5" type="submit">
          Registrarse
        </v-btn>
        
      </v-form>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      telefono: '',
      email: ''
    };
  },
  methods: {
    submit() {
      if (!this.validarFormulario()) {
        return;
      }

      const formData = {
        nombre: this.nombre,
        apellido: this.apellido,
        telefono: this.telefono,
        email: this.email
      };

      axios.post('http://localhost:8000/api/usuarios', formData)
        .then(response => {
          Swal.fire(
            'Usuario creado',
            'El usuario ha sido creado exitosamente',
            'success'
          );
          // Aquí puedes redirigir a otra página o realizar alguna acción después de crear el usuario
        })
        .catch(error => {
          Swal.fire(
            'Error',
            `Hubo un error al crear el usuario: ${error.response.data.message || 'Error desconocido'}`,
            'error'
          );
        });
    },
    validarFormulario() {
      if (!this.nombre || !this.apellido || !this.telefono || !this.email) {
        Swal.fire(
          'Campos incompletos',
          'Por favor, complete todos los campos requeridos.',
          'error'
        );
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
@import "../Style/stylesLogin.css";
@import "../Style/index.css";
</style>
