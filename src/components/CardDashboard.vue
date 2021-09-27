<template>
  <v-card
    class="mx-auto"
    elevation="20"
    shaped
  >
    <v-card-text>
      <div>Proyecto</div>
      <p class="text-h4 text--primary">
        {{Titulo_Proyecto}}
      </p>
      <p>Objetivo General</p>
      <div class="text--primary">
        {{Objetivo_General}}
      </div>
      <p>Nombre Estudiante</p>
      <div class="text--primary">
        {{Nombre_Estudiante}}
      </div>
    </v-card-text>
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
            color="primary"
            text
            @click="dialog1 = false"
          >
            Aceptar
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
      width="500"
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
      <v-card outlined min-width="300px" max-width="400px" class="pa-1 mx-auto"
      elevation="20"
      shaped>
      <h2 class="text-center mb-6">Formulario de registro de proyectos</h2>
      <v-row>
        <v-col cols="3">
        <v-subheader>Titulo del proyecto</v-subheader>
      </v-col>
      <v-col cols="9">
        <v-text-field
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
  </v-card>
</template>

<script>
export default {
    data () {
      return {
        dialog1: false,
        dialog: false,
      }
    },
    props:{ 
        Titulo_Proyecto:String,
        Objetivo_General:String,
        Nombre_Estudiante:String,
    }
}
</script>

<style>

</style>