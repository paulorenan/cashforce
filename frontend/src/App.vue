<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="#FBFDFE"
      v-model="drawer"
      app
    >
      <DrawerComp />
    </v-navigation-drawer>
    <v-app-bar app elevation="1" />

    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
import DrawerComp from './components/DrawerComp.vue';

export default {
  components: {
    HomePage,
    DrawerComp
},

  data: () => ({
    drawer: true,
  }),
};
</script>
