<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <InfoRow style="margin-bottom: 10px"/>
  <DashBoard />
</template>

<script>

import list from './assets/mock.json';
import chart1 from './assets/chart1';
import chart2 from './assets/chart2';
import chart3 from './assets/chart3';
import chart4 from './assets/chart4';

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
      list: list,
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
      list: this.list,
      charts: [chart1, chart2, chart3, chart4],
      boxes: this.boxes
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    async fetchList() {
      try {
        const response = await this.$axios.get('http://localhost:6500/api/checklist');
        this.list = response.data
      }
      catch (error) {
        this.list = 'Mali forti iu arreri'
      }
    }
  }
}
</script>

<style scoped></style>