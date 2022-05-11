<template>
  <v-simple-table>
    <thead>
      <tr class="table-header">
        <th>Nota Fiscal</th>
        <th>Sacado</th>
        <th>Cedente</th>
        <th>Emissão</th>
        <th>Valor</th>
        <th>Status</th>
        <th>Ver Cedente</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.orderNumber }}</td>
        <td>{{ order.buyer.name }}</td>
        <td>{{ order.provider.name }}</td>
        <td>{{ new Date(order.createdAt).toLocaleDateString() }}</td>
        <td class="verde">
          {{ Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(order.value) }}
        </td>
        <td
          :class="formatStatus(order.orderStatusBuyer).color"
        >
          {{ formatStatus(order.orderStatusBuyer).message }}
        </td>
        <td>
          <v-btn
            outlined
            rounded
            color="#727D94"
          >
            Dados do Cedente
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    orders: Array,
  },
  methods: {
    formatStatus(status) {
      switch (status) {
        case "0":
          return { message: "Pendente de confirmação", color: "amarelo" }
        case "1":
          return {message: "Pedido confirmado", color: "verde"}
        case "2":
          return {message: "Não reconhece o pedido", color: "vermelho"}
        case "3":
          return {message: "Mercadoria não recebida", color: "vermelho"}
        case "4":
          return {message: "Recebida com avaria", color: "vermelho"}
        case "5":
          return {message: "Devolvida", color: "amarelo"}
        case "6":
          return {message: "Recebida com devolução parcial", color: "amarelo"}
        case "7":
          return {message: "Recebida e confirmada", color: "verde"}
        case "8":
          return {message: "Pagamento Autorizado", color: "verde"}
      }
    },            
  },
};
</script>

<style>
.amarelo{
  color: #c29613;
}
.verde{
  color: #00AD8C
}
.vermelho{
  color: #F44336;
}

.table-header{
  text-align: center;
  border: 1px solid #021B51;
}
</style>
