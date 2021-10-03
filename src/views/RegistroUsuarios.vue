<template>
  <div class="centrar_vertical mt-4">
    <div class="contenedor">
      <v-card outlined min-width="700px" max-width="7000px" class="pa-6 mx-auto">
      <h2 class="text-center mb-6">Formulario de registro de usuarios</h2>
      <form>
    <v-text-field
      v-model="usuario.primer_nombre"
      label="Primer nombre"
      required
    ></v-text-field>
    <v-text-field
      v-model="usuario.segundo_nombre"
      label="Segundo nombre"
    ></v-text-field>
    <v-text-field
      v-model="usuario.primer_apellido"
      label="Primer apellido"
      required

    ></v-text-field>
    <v-text-field
      v-model="usuario.segundo_apellido"
      label="Segundo apellido"
    ></v-text-field>
    <v-text-field
      v-model="usuario.email"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      v-model="usuario.password"
      type="password"
      label="Contraseña"
      required
    ></v-text-field>
    <v-text-field
      v-model="usuario.identificacion"
      type="number"
      label="Identificación"
      required
    ></v-text-field>
    
    <v-select
      v-model="usuario.tipo_usuario"
      :items="tipo_usuario"
      label="Tipo usuario"
      required

    ></v-select>
  

    <v-btn
      class="mr-4"
      color="red" width="200"
    >
      Limpiar
    </v-btn>
      <v-btn @click="Crear" color="green" width="400px">
        Crear
    </v-btn>
    
  </form>
    </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      tipo_usuario:[
      'Estudiante',
      'Asesor',
    ],
    usuario:{}
    }
    
  },
  methods:{
    async Crear(){
      const datos = {
        primer_nombre: this.usuario.primer_nombre,
        segundo_nombre: this.usuario.segundo_nombre,
        primer_apellido: this.usuario.primer_apellido,
        segundo_apellido: this.usuario.segundo_apellido,
        email: this.usuario.email,
        password: this.usuario.password,
        identificacion: this.usuario.identificacion,
        tipo_usuario: this.usuario.tipo_usuario
      }
      axios.post('http://localhost:3000/usuario',datos ).then(res =>
        {
          console.log(res)
          this.$router.push("/")
      }).catch(error => {
        console.log(error)
      })
    }
  }

}
</script>

<style>

</style>