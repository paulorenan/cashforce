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
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    drawer: true,
  }),
};
</script>
