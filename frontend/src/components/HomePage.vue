<template>
  <v-container>
    <v-row class="ml-3">
      <v-col cols="12" class="title">
        <div class="titleDiv">
          <img src="../assets/hands.svg" />
          <h1>Notas fiscais</h1>
        </div>
        <p class="subtitle">
          Visualize as notas fiscais que você tem.
        </p>
      </v-col>
      <NfTable :orders="orders" />
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import NfTable from './NfTable.vue'


  export default {
    components: { NfTable },
    data: () => ({}),
    computed: {
        ...mapState([
            "orders"
        ]),
    },
    methods: {
      ...mapActions([
          "getOrders"
      ]),
    },
    mounted() {
        this.getOrders();
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
*{
  font-family: 'DM Sans', sans-serif;
}

.titleDiv{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #021B51;
  margin-top: 20px;
}

.titleDiv img{
  width: 40px;
  margin-right: 10px;
}

.title {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}

.subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #021B51;

}
</style>
