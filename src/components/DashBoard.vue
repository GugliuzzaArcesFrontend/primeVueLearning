<template>
    <div class="dashboard">
        <Card style="justify-items: center">
            <template #title>
                <Paginator :totalRecords="charts.length" :rows="rowsPerPage" :first="first" @page="onPageChange"
                    :template="paginatorTemplate" /><!-- :template="templateResponsive" -->
            </template>

            <template #content>
                <Card v-for="(chart, i) in paginatedChart" class="custom-card" :key="i" :id="`chart${i + 1}`">
                    <template #title>Grafico {{ first + 1 }}</template>

                    <template #content>
                        <Chart class="custom-chart" :type="chart.type" :data="chart.data" :options="chart.options" />
                    </template>
                </Card>
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
import Paginator from 'primevue/paginator';

export default {
    name: 'DashBoard',
    components: {
        Card,
        Chart,
        Paginator,
    },
    data() {
        return {
            charts: [chart1, chart2, chart3, chart4],
            first: 0,
            rowsPerPage: 1,
            templateResponsive: {
                type: Object,
                default: () => (
                    {
                        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                        '360px': 'PrevPageLink NextPageLink',
                        '740px': 'PrevPageLink PageLinks NextPageLink '
                    }
                )
            }
        }
    },
    computed: {
        paginatedChart() {
            return this.charts.slice(this.first, this.first + this.rowsPerPage);
        },
       
        paginatorTemplate() {
            const width = window.innerWidth
            if (width <= 360)
                return 'PrevPageLink NextPageLink';
            else if (width <= 740)
                    return 'PrevPageLink PageLinks NextPageLink';
            else return 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink';
        }
    
},
methods: {
    onPageChange(event) {
        this.first = event.first;
    }
}
}
</script>

<style scoped>
.custom-card {
    margin: auto;
    width: 66%;
    border: 1px solid black;
    border-radius: 10px;
    aspect-ratio: 2;
    align-content: center;
    justify-items: center;
    justify-self: center;
}

.custom-chart {
    display: inline-block;
    width: 100%;
    justify-self: center;
}

.dashboard {
    display: flexbox;
    width: 100%;
    margin: auto
}
</style>