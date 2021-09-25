<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>{{Nombre_Estudiante}}</div>
      <p class="text-h4 text--primary">
        {{Titulo_Proyecto}}
      </p>
      <p>Formulación del problema</p>
      <div class="text--primary">
        {{Formulacion_Problema}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            {{Titulo_Proyecto}}
          </p>
          <p>{{Objetivo_General}}</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
    props:{
        Nombre_Estudiante:String,
        Titulo_Proyecto:String,
        Formulacion_Problema:String,
        Objetivo_General:String,
    },
    data: () => ({
      reveal: false,
    }),
}
</script>

<style>
</style>