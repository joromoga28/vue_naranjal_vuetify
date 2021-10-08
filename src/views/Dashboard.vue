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
            <CardDashboard :titulo_proyecto="proyect.titulo_proyecto" :objetivo_general="proyect.objetivo_general" 
            :Nombre_Estudiante="proyect.primer_nombre" ></CardDashboard>
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
      let url = 'http://localhost:3000/proyecto/'+ localStorage.usuarioid
      axios.get(url).then(res =>{
        this.proyectos =res.data.data;
        console.log(res.data.data)
      })
  }
    
}
</script>

<style>

</style>