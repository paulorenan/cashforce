<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="#FBFDFE"
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar app elevation="1" />

    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  components: {
    HomePage,
},

  data: () => ({
    drawer: true,
  }),
};
</script>
