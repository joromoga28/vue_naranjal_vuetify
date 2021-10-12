<template>
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <div class="centrar_vertical mt-4">
    <div class="contenedor">
      <v-card outlined min-width="700px" max-width="7000px" class="pa-6 mx-auto">
      <h2 class="text-center mb-6">Formulario de registro de usuarios</h2>
      <form>
    <v-text-field
      v-model="primer_nombre"
      label="Primer nombre"
      :counter="10"
      :rules="Rules"
      required
    ></v-text-field>
    <v-text-field
      v-model="segundo_nombre"
      label="Segundo nombre"
    ></v-text-field>
    <v-text-field
      v-model="primer_apellido"
      :counter="10"
      :rules="Rules"
      label="Primer apellido"
      required

    ></v-text-field>
    <v-text-field
      v-model="segundo_apellido"
      label="Segundo apellido"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="Rules"
      type="password"
      label="Contraseña"
      required
    ></v-text-field>
    <v-text-field
      v-model="identificacion"
      :rules="Rules"
      type="number"
      label="Identificación"
      required
    ></v-text-field>
    
    <v-select
      v-model="select_tipo_usuario"
      :rules="[v => !!v || 'Usuario es requerido']"
      :items="tipo_usuario"
      label="Tipo usuario"
      required
    ></v-select>
  <br>

    <v-btn  @click="resetValidation" class="mr-4" color="red" width="200">
      Limpiar
    </v-btn>
      <v-btn :disabled="!valid" @click="registrar" color="green" width="400px">
        Crear Usuario
    </v-btn>
    
  </form>
    </v-card>
    </div>
  </div>
  </v-form>
</template>

<script>
import store from '../store/index.js';
export default {
  data:() => {
    return{
      valid: true,
      primer_nombre:"",
      segundo_nombre: "",
      primer_apellido:"",
      segundo_apellido:"",
      email:"",
      password: "",
      identificacion:"",
      Rules:[
        v => !!v || 'Información requerida',
        v => (v && v.length <= 15) || 'Información requiere de maximo 10 caracteres',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail no valido',
      ],
      select_tipo_usuario: null,
      tipo_usuario:[ "Estudiante","Asesor",]
    };
    
  },
  methods:{
    async registrar(){
      if (this.$refs.form.validate()){
        let objUsuario = {
        primer_nombre: this.primer_nombre,
        segundo_nombre: this.segundo_nombre,
        primer_apellido: this.primer_apellido,
        segundo_apellido: this.segundo_apellido,
        email: this.email,
        password: this.password,
        identificacion: this.identificacion,
        tipo_usuario: this.select_tipo_usuario
      }
          store.dispatch('registrarUsuario', objUsuario);
          this.$router.push("/");
    }
  },
  async resetValidation(){
    this.$refs.form.resetValidation();
  },
}
}
</script>

<style>

</style>