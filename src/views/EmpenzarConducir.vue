<script>
import CartViajes from '../components/CartViajes.vue';

export default {
  components: {
    CartViajes,
  },
}
</script>

<template>

  <di>
    <h3 class="text-h5 font-weight-bold title"> Viaje encontrado</h3>
    <CartViajes></CartViajes>
  </di>

</template>

<style scoped>
@import "../Style/index.css";

.title {
  margin: 2.5vw
}
</style>