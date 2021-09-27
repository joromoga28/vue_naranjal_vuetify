<template>
  <div class="centrar_vertical">
    <div class="contenedor">
      <v-card outlined min-width="500px" max-width="700px" class="pa-6 mx-auto">
      <h2 class="text-center mb-6">Iniciar Seción</h2>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Correo" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            @click:append="show1 = !show1"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        cols="12"
        md="6">
          <v-btn color="orange" block>
            Login
          </v-btn>
        </v-col>
        <v-col
        cols="12"
        md="6">
          <v-btn color="green" text to="/registrousuarios" >
            Registrarse
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
    };
  },
};
</script>

<style>
.centrar_vertical{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
}
</style>