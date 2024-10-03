<template>
  <DashBoard>

    <DBoardSection :charts="charts" :chart-secondary="chart4" />
    <DBoardSectionT2 :charts="charts" />

  </DashBoard>
</template>

<script>

import infos from './assets/infos.json';
import chart1 from './assets/chart1';
import chart2 from './assets/chart2';
import chart3 from './assets/chart3';
import chart4 from './assets/chart4';
import chart5 from './assets/chart5';
import chart6 from './assets/chart6';


import DashBoard from './components/DashBoard.vue';
import DBoardSection from './components/Dashboard/DBoardSection.vue';
import DBoardSectionT2 from './components/Dashboard/DBoardSectionT2.vue';

import Infobox from './components/Infobox.vue';
import InfoRow from './components/InfoRow.vue';

export default {
  name: 'App',
  components: {
    DashBoard,
    DBoardSection,
    DBoardSectionT2,
    InfoRow,
    Infobox
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
      ],
      infos: infos,
      charts: [chart1, chart2, chart3,  chart4,  chart5, chart6],
    }
  },
  provide() {
    return {
      boxes: this.boxes
    }
  },
  methods: {}
}
</script>

<style scoped></style>