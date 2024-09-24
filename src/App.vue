<template>
  <InfoRow style="margin-bottom: 10px"/>

  <DashBoard />
</template>

<script>


import chart1 from './assets/chart1';
import chart2 from './assets/chart2';
import chart3 from './assets/chart3';
// import chart4 from './assets/chart4';
import chart5 from './assets/chart5';
import chart6 from './assets/chart6';

import DashBoard from './components/DashBoard.vue';
import InfoRow from './components/InfoRow.vue';

export default {
  name: 'App',
  components: {
    DashBoard,
    InfoRow,
  },
  data() {
    return {
      boxes: [
        {
          "description": "Utenti Registrati",
          "value": 1200,
          "linkDescription": "Visualizza Utenti",
          "linkAddress": "/utenti",
          "icon": "pi pi-users"
        },
        {
          "description": "Vendite Totali",
          "value": 3500,
          "linkDescription": "Dettagli Vendite",
          "linkAddress": "/vendite",
          "icon": "pi pi-shopping-cart"
        },
        {
          "description": "Recensioni Positive",
          "value": 870,
          "linkDescription": "Leggi Recensioni",
          "linkAddress": "/recensioni",
          "icon": "pi pi-star"
        },
        {
          "description": "Messaggi Ricevuti",
          "value": 45,
          "linkDescription": "Apri Messaggi",
          "linkAddress": "/messaggi",
          "icon": "pi pi-envelope"
        }
      ]
    }
  },
  provide() {
    return {
      charts: [chart1, chart2, chart3, /* chart4, */ chart5, chart6],
      boxes: this.boxes
    }
  },
  methods: {}
}
</script>

<style scoped></style>