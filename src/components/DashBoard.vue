<template>
    <div class="dashboard">
        <Card class="charting-card">
            <template #title>
                <Paginator :totalRecords="charts.length" :rows="chartsPerPage" :first="first" @page="onPageChange"
                    :template="paginatorTemplate" />
            </template>

            <template #content>
                <Card v-for="(chart, i) in paginatedChart" class="custom-card" :key="i" :id="`chart${i + 1}`">
                    <template #title>GGrafico {{ first + 1 }}</template>

                    <template #content><!--  -->
                        <Chart class="custom-chart" :height="200" :type="chart.type" :data="chart.data"
                            :options="chart.options" />
                    </template>
                </Card>
            </template>
        </Card>
        <CheckList>
        </CheckList>
        <!-- <Card class="checklist-card">
            <template #title>Checklist</template>
        </Card> -->
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
import CheckList from './CheckList.vue';

export default {
    name: 'DashBoard',
    components: {
        Card,
        Chart,
        Paginator,
        CheckList,
    },
    data() {
        return {
            first: 0,
            chartsPerPage: 1,
        }
    },
    props: {
        charts: {
            type: Array,
            default: () => [chart1, chart2, chart3, chart4]
        }
    },
    computed: {
        paginatedChart() {
            return this.charts.slice(this.first, this.first + this.chartsPerPage);
        },
        paginatorTemplate() {
            const width = window.innerWidth
            if (width <= 360)
                return 'PrevPageLink CurrentPageReport NextPageLink';
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
.dashboard {
    border: solid 1px lightgrey;
    display: inline-flex;
    width: 100%;
    margin: auto
}
.charting-card {
    width: 66%;
    margin: 10px;
    padding: 0
}

.custom-card {
    border-style: none !important;
    margin: auto;
    border-radius: 15px;
    aspect-ratio: 2;
    align-content: center;
    justify-items: center;
}
div+div {
    margin-left: 0px
}
.custom-chart {
    display: inline-block;
    width: 100%;
    height: auto;
}

.checklist-card {
    margin: 10px;
    width: 33%;
}
</style>