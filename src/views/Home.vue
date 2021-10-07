<template>
  <div class="Home">
    <v-container>
      <v-card elevation="1" class="pa-4">
        <h1 class="ma-3">Listado de proyectos del grado 8°</h1>
        <v-row>
          <v-col
          cols="12"
          md="4"
          xs="6" 
          v-for="proyect in proyectos" :key="proyect.id">
            <CardProyectosHome :primer_nombre="proyect.primer_nombre" :Formulacion_Problema="proyect.formulacion_problema"
            :Objetivo_General="proyect.objetivo_general"
            :Titulo_Proyecto="proyect.titulo_proyecto"></CardProyectosHome>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    
  </div>
</template>

<script>
import CardProyectosHome from '../components/CardProyectosHome.vue'
export default {
  components: { CardProyectosHome },
  data(){
    return{
      proyectos:[
        {
          id:1,
          primer_nombre:"Nombre 1",
          formulacion_problema:"Formulacion problema 1",
          objetivo_general:"objetivo general 1",
          titulo_proyecto:"titulo proyecto 1"
        },
        {
          id:2,
          primer_nombre:"Nombre 2",
          formulacion_problema:"Formulacion problema 2",
          objetivo_general:"objetivo general 2",
          titulo_proyecto:"titulo proyecto 2"
        },
        {
          id:3,
          primer_nombre:"Nombre 3",
          formulacion_problema:"Formulacion problema 3",
          objetivo_general:"objetivo general 3",
          titulo_proyecto:"titulo proyecto 3"
        }
      ]
    }
  }

}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>