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
            <CardProyectosHome :primer_nombre="proyect.primer_nombre" 
            :formulacion_problema="proyect.formulacion_problema"
            :objetivo_general="proyect.objetivo_general"
            :titulo_proyecto="proyect.titulo_proyecto"></CardProyectosHome>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    
  </div>
</template>

<script>
import CardProyectosHome from '../components/CardProyectosHome.vue'
import axios from 'axios'
export default {
  components: { CardProyectosHome },
  data(){
    return{
      proyectos:[
      ]
    }
  },
  mounted(){
    axios.get('https://naranjal-backend.herokuapp.com/proyecto').then(res =>{
        this.proyectos =res.data;
        console.log(res.data)
      })
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