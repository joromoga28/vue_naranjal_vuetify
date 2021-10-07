<template>
<div>
<v-app-bar color="orange">
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>Proyecto Naranjal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/login">
        Login
    </v-btn>
    <v-btn text to="/registrousuarios">
        Registrarse
    </v-btn>
    <v-btn text to="/dashboard">
        Dashboard
    </v-btn>
     <v-btn text to="/registroproyectos">
        Registrar Proyecto
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registrarse</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div>
    <img src="https://naranjal.edu.co/wp-content/uploads/2020/07/Cabecera-1-1024x150.png" >
    </div>
</div>

  
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

};
</script>

<style>

</style>