<template>
  <div class="centrar_vertical">
    <div class="contenedor">
      <v-card outlined min-width="500px" max-width="700px" class="pa-6 mx-auto">
      <h2 class="text-center mb-6">Iniciar Seción</h2>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model ="email"
          :rules="emailRules" 
          label="Correo" 
          type="email" 
          outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :rules="Rules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            @click:append="show1 = !show1"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        cols="12"
        md="6">
          <v-btn  color="green" block to="/registrousuarios">
            Registrarse
          </v-btn>
        </v-col>
        <v-col
        cols="12"
        md="6">
          <v-btn @click="login" color="orange" block>
            Login
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email:"",
      password:"",
      show1: false,

      valid: true,
      name:'',
      Rules:[
        v => !!v || 'Contraseña requerida',
        v => (v && v.length <= 20) || 'Contraseña requiere de maximo 10 caracteres',
      ],
      email:'',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail no valido',
      ],
      select: null,
      tipo_usuario:[
      'Estudiante',
      'Asesor',
    ],
    };
  },
  methods:{
    validate(){
      this.$refs.form.validate();
    },
    async login(){
      let credenciales={
        email: this.email,
        password: this.password
      }
      let bademail= "Usuario no registrado"
      let badpass= "Email/ contraseña incorrectos"
      axios.post('http://localhost:3000/usuario/login',credenciales).then
      (res =>{
        if(res.data.mensaje===bademail){
          window.alert(bademail)
        }else if(res.data.mensaje===badpass){
          window.alert(badpass)
        }else{
          console.log(res.data)
          this.$router.push('/')
        }
      }).catch(error=>{console.log(error)})
    }
  }
};
</script>

<style>
.centrar_vertical{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
}
</style>