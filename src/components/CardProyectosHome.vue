<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>{{primer_nombre}}</div>
      <p class="text-h6 text--primary">
        {{titulo_proyecto}}
      </p>
      <p>Formulación del problema</p>
      <div class="text--primary">
        {{formulacion_problema}}
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
          <p class="text-h6 text--primary">
            {{titulo_proyecto}}
          </p>
          <p>Objetivo General</p>
      <div class="text--primary">
        {{objetivo_general}}
      </div>
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
        primer_nombre:String,
        titulo_proyecto:String,
        formulacion_problema:String,
        objetivo_general:String,
    },
    data: () => ({
      reveal: false,
    }),
}
</script>

<style>
</style>