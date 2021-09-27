<template>
  <div class="Dashboard">
    <v-container>
      <v-card elevation="1" class="pa-4">
        <h1 class="ma-3">Mis Proyectos</h1>
        <v-row>
          <v-col
          cols="12"
          md="4"
          xs="6" 
          v-for="proyect in proyectos" :key="proyect.id">
            <CardDashboard :Titulo_Proyecto="proyect.titulo_p" :Objetivo_General="proyect.objetivo_g" 
            :Nombre_Estudiante="proyect.n_estudiante" ></CardDashboard>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    
  </div>
</template>

<script>
import CardDashboard from '../components/CardDashboard.vue'
export default {
  components:{ CardDashboard },
  data(){
    return{
      proyectos:[
        {
          titulo_p:"titulo Proyecto 1",
          objetivo_g: "objetivo general 1",
          n_estudiante:"Nombre 1",
        },
        {
          titulo_p:"titulo Proyecto 2",
          objetivo_g: "objetivo general 2",
          n_estudiante:"Nombre 2",
        },
        {
          titulo_p:"titulo Proyecto 3",
          objetivo_g: "objetivo general 3",
          n_estudiante:"Nombre 3",
        },
        {
          titulo_p:"titulo Proyecto 4",
          objetivo_g: "objetivo general 4",
          n_estudiante:"Nombre 4",
        }
      ]
    }
  }
    
}
</script>

<style>

</style>