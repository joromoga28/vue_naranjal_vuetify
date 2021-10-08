<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="white lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
        Contactanos:  instinaranjal@hotmail.com   -   Quimbaya Quindío  -  Echa un vistazo a la Institución Educativa Naranjal compartida a través de la aplicación #StreetView 
        <a href="https://www.google.com/maps/@4.6143267,-75.7055367,3a,75y,140h,90t/data=!3m4!1e1!3m2!1sAF1QipPBqeibuM-z5pO5SKdrdSUpmzzWbulDzRbSoxRY!2e10" title="Vista Aerea">Ir vista aerea</a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>MisionTic P46- G7</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
</style>