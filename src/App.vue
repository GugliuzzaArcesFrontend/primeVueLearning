<template>
  <InfoRow style="margin-bottom: 10px" />

  <DashBoard />

  <div class="carder">
    <Infobox class="w-33 d-i-block" v-for="(box, i) in infos" :key="i + 1" :color :colorBar :infos="infos"
      :value="box.value" :valueName="box.valueName" :maxValue="box.maxValue" :title="box.title" :icon="box.icon" />
  </div>
</template>

<script>

import infos from './assets/infos.json';
import chart1 from './assets/chart1';
import chart2 from './assets/chart2';
import chart3 from './assets/chart3';
// import chart4 from './assets/chart4';
import chart5 from './assets/chart5';
import chart6 from './assets/chart6';

import DashBoard from './components/DashBoard.vue';
import Infobox from './components/Infobox.vue';
import InfoRow from './components/InfoRow.vue';

export default {
  name: 'App',
  components: {
    DashBoard,
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
      infos: infos
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

<style scoped>
.w-33 {
  width: calc(33% - .5rem);
}

.d-i-block {
  display: inline-block;
}

.carder {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>