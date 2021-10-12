<template>
  <v-card
    class="mx-auto"
    elevation="20"
    shaped
  >
    <v-card-text>
      <div>Proyecto</div>
      <p class="text-h6 text--primary">
        {{titulo_proyecto}}
      </p>
      <p>Formulación Problema</p>
      <div class="text--primary">
        {{formulacion_problema}}
      </div><br>
      <p>Pregunta Investigación</p>
      <div class="text--primary">
        {{pregunta_investigacion}}
      </div><br>
      <p>Objetivo General</p>
      <div class="text--primary">
        {{objetivo_general}}
      </div>
    </v-card-text>
    <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Conocer mas
      </v-btn>
    <v-card-actions>
      <v-row>
        <v-col
        cols="12"
        md="6">
        <div class="text-center">
      <v-dialog
      v-model="dialog1"
      width="500"
      >
      <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" block
          v-bind="attrs"
          v-on="on">
            Eliminar
          </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Eliminar Proyecto
        </v-card-title>

        <v-card-text>
          Esta seguro de eliminar este proyecto, toda la información asociada sera eliminada. 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            v-on:click="eliminar">
            Eliminar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog1 = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        </v-col>
        <v-col
        cols="12"
        md="6">
        <div class="text-center">
      <v-dialog
      v-model="dialog"
      width="900"
      >
      <template v-slot:activator="{ on, attrs }">
          <v-btn color="green" block
            v-bind="attrs"
            v-on="on">
            Editar
          </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Edición Proyecto
        </v-card-title>

        <v-card-text>
          <div class="centrar_vertical mt-4">
    <div class="contenedor">
      <v-card outlined min-width="700px" max-width="800px" class="pa-1 mx-auto"
      elevation="2"
      shaped>
      <h2 class="text-center mb-6">Formulario de registro de proyectos</h2>
      <v-row>
        <v-col cols="3">
        <v-subheader>Titulo del proyecto</v-subheader>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="titulo_proyecto"
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
          v-model="formulacion_problema"
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
          v-model="pregunta_investigacion"
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
          v-model="objetivo_general"
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
          v-model="objetivos_especificos"
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
          v-model="justificacion"
          filled
          auto-grow
        ></v-textarea>
      </v-col>
      </v-row>
      </v-card>
    </div>
  </div> 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Aceptar
          </v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

        </v-col>
      </v-row>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h6 text--primary">
            {{titulo_proyecto}}
          </p>
          
      <p>Objetivos Especificos</p>
      <div class="text--primary">
        {{objetivos_especificos}}
      </div><br>
      <p>Justificación</p>
      <div class="text--primary">
        {{justificacion}}
      </div>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            regresar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
      reveal: false,
      dialog1: false,
      dialog: false,
    }),

    props:{ 
        id:String,
        titulo_proyecto:String,
        formulacion_problema: String,
        pregunta_investigacion: String,
        objetivo_general:String,
        objetivos_especificos:String,
        justificacion: String,
    },
    methods:{
      async eliminar(){
        if(!localStorage.usuarioid || localStorage.usuarioid == 'undefined'){
        window.alert("Debes logearte primero")
        this.$router.push("/login")
      }
      let url = 'http://localhost:3000/proyecto/eliminar/'+ this.id
      axios.delete(url).then(res =>{
        console.log(res.data)
        this.dialog1 = false
        this.$router.push("/dashboard")
      }).catch(error=> {
        console.log(error)
        })
      }
    },
};
</script>

<style>

</style>