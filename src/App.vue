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

  <DashBoard />
</template>

<script>
import list from './assets/mock.json';
import chart1 from './assets/chart1';
import chart2 from './assets/chart2';
import chart3 from './assets/chart3';
import chart4 from './assets/chart4';

import DashBoard from './components/DashBoard.vue';

export default {
  name: 'App',
  components: {
    DashBoard,
  },
  provide() {
    return {
      list: list,
      chartsApp:[chart1, chart2, chart3, chart4]
    }
  }  
}
</script>

<style scoped>

</style>