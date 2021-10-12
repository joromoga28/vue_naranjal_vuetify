<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="centrar_vertical mt-4">
      <div class="contenedor">
        <v-card
          outlined
          min-width="900px"
          max-width="1000px"
          class="pa-6 mx-auto"
          elevation="20"
          shaped
        >
          <h2 class="text-center mb-6">Formulario de registro de proyectos</h2>
          <v-row>
            <v-col cols="3">
              <v-subheader>Titulo del proyecto</v-subheader>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="proyecto.titulo_proyecto"
                :counter="200"
                :rules="Rules"
                single-line
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Item del proyecto -->
          <v-row>
            <v-col cols="3">
              <v-subheader>Formulacion del problema</v-subheader>
            </v-col>
            <v-col cols="9">
              <v-textarea
                v-model="proyecto.formulacion_problema"
                :counter="500"
                :rules="Rules"
                filled
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- Item del proyecto -->
          <v-row>
            <v-col cols="3">
              <v-subheader>Pregunta de Investigación</v-subheader>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="proyecto.pregunta_investigacion"
                :counter="200"
                :rules="Rules"
                single-line
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Item del proyecto -->
          <v-row>
            <v-col cols="3">
              <v-subheader>Objetivo general del proyecto</v-subheader>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="proyecto.objetivo_general"
                :counter="200"
                :rules="Rules"
                single-line
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Item del proyecto -->
          <v-row>
            <v-col cols="3">
              <v-subheader>Objetivos Especificos</v-subheader>
            </v-col>
            <v-col cols="9">
              <v-textarea
                v-model="proyecto.objetivos_especificos"
                :counter="500"
                :rules="Rules"
                filled
                auto-grow
                row-height="20"
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- Item del proyecto -->
          <v-row>
            <v-col cols="3">
              <v-subheader>Justificación del proyecto</v-subheader>
            </v-col>
            <v-col cols="9">
              <v-textarea
                v-model="proyecto.justificacion"
                :counter="200"
                :rules="Rules"
                filled
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- Botones -->
          <v-row>
            <v-col cols="12" md="4">
              <v-btn @click="Cancelar" color="red" block> Cancelar </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn :disabled="!valid" @click="Inscribir" color="green" block>
                Registrar Proyecto
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      valid: true,
      name: "",
      Rules: [
        (v) => !!v || "Información requerida",
        (v) =>
          (v && v.length >= 50) ||
          "La información requiere minimo 50 caracteres ",
      ],
      proyecto: {},
    };
  },
  methods: {
    async Inscribir() {
      if (!localStorage.usuarioid || localStorage.usuarioid == "undefined") {
        this.$refs.form.reset();
        window.alert("Debes logearte primero");
        this.$router.push("/login");
      } else {
          if (this.$refs.form.validate()){
        const datos2 = {
          id_estudiante: localStorage.usuarioid,
          titulo_proyecto: this.proyecto.titulo_proyecto,
          formulacion_problema: this.proyecto.formulacion_problema,
          pregunta_investigacion: this.proyecto.pregunta_investigacion,
          objetivo_general: this.proyecto.objetivo_general,
          objetivos_especificos: this.proyecto.objetivos_especificos,
          justificacion: this.proyecto.justificacion,
        };
        axios
          .post("http://localhost:3000/proyecto", datos2)
          .then((res) => {
            console.log(res);
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
        }
      }
    },
    async Cancelar() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>