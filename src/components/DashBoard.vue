<template>
    <div class="custom-container">
        <Card class="custom-card">
            <template #title>Grafico 1</template>

            <template #content>
                <Chart class="custom-chart" :type="chart1.type" :data="chart1.data" :options="chart1.options" />
            </template>
        </Card>

        <Card class="custom-card">
            <template #title>Grafico 2</template>

            <template #content>
                <Chart class="custom-chart" :type="chart2.type" :data="chart2.data" :options="chart2.options" />
            </template>
        </Card>

        <Card class="custom-card">
            <template #title>Grafico 3</template>

            <template #content>
                <Chart class="custom-chart" :type="chart3.type" :data="chart3.data" :options="chart3.options" />
            </template>
        </Card>

        <Card class="custom-card">
            <template #title>Grafico 4</template>

            <template #content>
               <Chart class="custom-chart" :type="chart4.type" :data="chart4.data" :options="chart4.options" />
            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import chart1 from '../assets/chart1';
import chart2 from '../assets/chart2';
import chart3 from '../assets/chart3';
import chart4 from '../assets/chart4';

export default {
    name: 'DashBoard',
    components: {
        Card,
        Chart,
    },
    data() {
        return {
            card: "custom-card",
            chart: "custom-chart",
            chart1: chart1,
            chart2: chart2,
            chart3: chart3,
            chart4: chart4
        }
    }
}
</script>

<style scoped>
.custom-card {
    display: inline-block;
    width: 50%;
    border: 1px solid black;
    border-radius: 10px;
    aspect-ratio: 2;
    align-content: center
}

.custom-chart {
    display: inline-block;
    width: 100%;
}

.custom-container {
    display: flexbox;
    width: 100%;
}
</style>