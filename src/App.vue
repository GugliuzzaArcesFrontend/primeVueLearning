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
  <!-- Carousel>
  <template #item="slotProps">

  </template>
</Carousel> -->
  <!-- <div>
    <Card style="width:50%; display: inline-block;">
      <template #title>Grafico 1</template>
      <template #content>
        <Chart :type="chart1.type" :data="chart1.data" :options="chart1.options" />
      </template>
    </Card>

    <Card style="width:50%; display: inline-block;">
      <template #title>Grafico 2</template>
      <template #content>
        <ChartTest :type="chart2.type" :data="chart2.data" :options="chart2.options" />
      </template>
    </Card>
  </div> -->
  <DashBoard class="dashboard" />
</template>

<script>

import DashBoard from './components/DashBoard.vue';

export default {
  name: 'App',
  components: {
    DashBoard,
  },
  
}
</script>

<style scoped>

</style>
