<template>
  <div class="centrar_vertical mt-4">
    <div class="contenedor">
      <v-card outlined min-width="700px" max-width="7000px" class="pa-6 mx-auto">
      <h2 class="text-center mb-6">Formulario de registro de usuarios</h2>
      <form>
    <v-text-field
      v-model="PNombre"
      :error-messages="nameErrors"
      
      label="Primer nombre"
      required
      @input="$v.PNombre.$touch()"
      @blur="$v.PNombre.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="SNombre"
      :error-messages="nameErrors"
      label="Segundo nombre"
      @input="$v.SNombre.$touch()"
      @blur="$v.SNombre.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="PApellido"
      :error-messages="nameErrors"
      label="Primer apellido"
      required
      @input="$v.PApellido.$touch()"
      @blur="$v.PApellido.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="SApellido"
      :error-messages="nameErrors"
      label="Segundo apellido"
      @input="$v.SApellido.$touch()"
      @blur="$v.SApellido.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="identificación"
      type="number"
      :error-messages="emailErrors"
      label="Identificación"
      required
      @input="$v.identificación.$touch()"
      @blur="$v.identificación.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="TUsuario"
      :error-messages="selectErrors"
      label="Tipo usuario"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
  

    <v-btn
      class="mr-4"
      @click="Limpiar"
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
export default {
  data(){
    return{
      TUsuario:[
      'Estudiante',
      'Asesor',
    ]
    }
    
  }

}
</script>

<style>

</style>