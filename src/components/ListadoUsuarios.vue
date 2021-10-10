<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Primer Nombre</th>
          <th class="text-center">Segundo Nombre</th>
          <th class="text-center">Primer Apellido</th>
          <th class="text-center">Segundo Apellido</th>
          <th class="text-center">Email</th>
          <th class="text-center">Contraseña</th>
          <th class="text-center">No. Documento</th>
          <th class="text-center">Tipo Usuario</th>
          <th class="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in usuarios" :key="item.identificacion">
          <td>{{ item.primer_nombre }}</td>
          <td>{{ item.segundo_nombre }}</td>
          <td>{{ item.primer_apellido }}</td>
          <td>{{ item.segundo_apellido }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.identificacion }}</td>
          <td>{{ item.tipo_usuario }}</td>
          <td>
            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              v-on:click="actualizar(item._id)"
            >
              Actualizar
            </v-btn>
            <v-btn
              class="ma-2"
              outlined
              color="error"
              v-on:click="eliminar(item._id)"
            >
              Eliminar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</template>

<script>
import store from "../store/index.js";

export default {
  data: () => {
    return {
      search: "",
      headers: [
        {
          text: "Primer Nombre",
          align: "start",
          sortable: false,
          value: "primer_nombre",
        },
        { text: "Segundo Nombre", value: "segundo_nombre" },
        { text: "Primer Apellido", value: "primer_apellido" },
        { text: "Segundo Apellido", value: "segundo_apellido" },
        { text: "E-mail", value: "email" },
        { text: "Contraseña", value: "password" },
        { text: "No.  Documento", value: "identificacion" },
        { text: 'Usuario', value: 'tipo_usuario' },
      ],
    };
  },
  created: () => {
    store.dispatch("cargarUsuarios");
  },
  computed: {
    usuarios: ()=>{
      return store.state.usuario;
      },
  },
  methods: {
    actualizar(id){
      console.log(id);
    },
    eliminar(id){
      let obj = {id};
      store
      .dispatch("eliminarUsuario", obj)
      .then(()=>{
        store.dispatch('cargarUsuarios');
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  },
};
</script>

<style>
</style>