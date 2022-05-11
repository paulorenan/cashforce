<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          rounded
          color="#727D94"
          v-bind="attrs"
          v-on="on"
        >
          Dados do Cedente
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ provider.name }}
        </v-card-title>

        <v-card-text class="mt-3">
          <p><strong>Nome:</strong> {{provider.name}}</p>
          <p><strong>Nome Comercial:</strong> {{provider.tradingName}}</p>
          <p><strong>CNPJ:</strong> {{formatCnpj()}}</p>
          <p><strong>Email:</strong> {{exist(provider.email)}}</p>
          <p><strong>Telefone:</strong> {{exist(provider.number)}}</p>
          <p><strong>Endereço:</strong> {{exist(provider.address)}}</p>
          <p><strong>Cidade:</strong> {{exist(provider.city)}}</p>
          <p><strong>Estado:</strong> {{exist(provider.state)}}</p>
          <p><strong>CEP:</strong> {{exist(provider.postalCode)}}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    props: {
      provider: Object,
    },
    data () {
      return {
        dialog: false,
        cnpj: {},
      }
    },
    methods: {
      getcnpj() {
        axios.get(`http://localhost:3001/cnpjs/${this.provider.cnpjId}/`)
          .then(res => {
            this.cnpj = res.data
          }).catch(error => {
            console.log(error)
          })
      },
      formatCnpj() {
        if(this.cnpj.cnpj) {
        return this.cnpj.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
        }
      },
      exist(item) {
        if (item){
          return item
        }
        return 'Não informado'
      }
    },
    mounted() {
      this.getcnpj()
    },
  }
</script>