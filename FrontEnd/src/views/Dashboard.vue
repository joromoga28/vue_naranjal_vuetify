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
          v-for="proyect in proyectos" :key="proyect._id">
            <CardDashboard 
            :id="proyect._id"
            :titulo_proyecto="proyect.titulo_proyecto" 
            :formulacion_problema="proyect.formulacion_problema"
            :pregunta_investigacion="proyect.pregunta_investigacion"
            :objetivo_general="proyect.objetivo_general" 
            :objetivos_especificos="proyect.objetivos_especificos"
            :justificacion="proyect.justificacion" >
            </CardDashboard>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    
  </div>
</template>

<script>
import axios from 'axios'
import CardDashboard from '../components/CardDashboard.vue'
export default {
  components:{ CardDashboard },
  data(){
    return{
      proyectos:[
      ]
    }
  },
  mounted(){
    if(!localStorage.usuarioid || localStorage.usuarioid == 'undefined'){
        window.alert("Debes logearte primero")
        this.$router.push("/login")
      }
      let url = 'https://naranjal-backend.herokuapp.com/proyecto/'+ localStorage.usuarioid
      axios.get(url).then(res =>{
        this.proyectos =res.data.data;
        console.log(res.data.data)
      })
  }
    
}
</script>

<style>

</style>