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
            <CardProyectosHome :Nombre_Estudiante="proyect.n_estudiante" :Formulacion_Problema="proyect.f_problema"
            :Objetivo_General="proyect.objetivo_g"
            :Titulo_Proyecto="proyect.titulo_p"></CardProyectosHome>
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
          n_estudiante:"Nombre 1",
          f_problema:"Formulacion problema 1",
          objetivo_g:"objetivo general 1",
          titulo_p:"titulo proyecto 1"
        },
        {
            id:2,
          n_estudiante:"Nombre 2",
          f_problema:"Formulacion problema 2",
          objetivo_g:"objetivo general 2",
          titulo_p:"titulo proyecto 2"
        },
        {
            id:3,
          n_estudiante:"Nombre 3",
          f_problema:"Formulacion problema 3",
          objetivo_g:"objetivo general 3",
          titulo_p:"titulo proyecto 3"
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