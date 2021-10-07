<template>
  <v-app>
    <Navegacion></Navegacion>
    <v-main>
      <router-view/>
    </v-main>
    <PageFooter></PageFooter>
  </v-app>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    Navegacion,
    PageFooter,
  },
  name: 'App',


  data: () => ({
    //
  }),
};
</script>
