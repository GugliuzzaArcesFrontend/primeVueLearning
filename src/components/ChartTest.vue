<template>
    <Chart :type="type" :data="chartData" :options="chartOptions"></Chart>
</template>
<script>
import Chart from 'primevue/chart';

export default {
    name: 'ChartTest',
    components: {
        Chart
    },
    data() {
        return {
            /* chartData: {
                labels: [
                    'Chrome',
                    'IE',
                    'FireFox',
                    'Safari',
                    'Opera',
                    'Navigator',
                ],
                datasets: [
                    {
                        data: [700, 500, 400, 600, 300, 100],
                        backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                    }
                ]
            },
            chartOptions: {
                maintainAspectRatio: false,
                responsive: true,
            },
            type: 'doughnut'*/
        } 
    },
    props: {
        type: {
            type:String,
            default: 'line'
        },
        chartData: {
            type:Object,
            default: () => {}
        },
        chartOptions: {
            type:Object,
            default: () => {}
        },
    }
}
</script>
<style scoped>
</style>