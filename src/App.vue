<template>
  <v-app>
    <Navegacion></Navegacion>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navegacion from './components/Navegacion.vue';

export default {
  components: { Navegacion },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
