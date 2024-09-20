<template>
    <div class="dashboard">
        <Card class="charting-card">
            <template #title>
                <Paginator :totalRecords="charts.length" :rows="chartsPerPage" :first="first" @page="onPageChange"
                    :template="paginatorTemplate" :pageLinkSize="3"/>
            </template>

            <template #content>
                <Card v-for="(chart, i) in paginatedChart" class="custom-card" :key="i" :id="`chart${i + 1}`">
                    <template #title>Grafico {{ first + 1 }}</template>

                    <template #content>
                        <Chart class="custom-chart" :height="200" :type="chart.type" :data="chart.data"
                            :options="chart.options" />
                    </template>
                </Card>
            </template>
        </Card>

        <CheckList class="checklist-card">
        </CheckList>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Chart from 'primevue/chart';
/* import chart1 from '../assets/chart1';
import chart2 from '../assets/chart2';
import chart3 from '../assets/chart3';
import chart4 from '../assets/chart4'; */
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
    inject: ['chartsApp'],
    data() {
        return {
            innerWidth: 0,
            first: 0,
            chartsPerPage: 1,
            charts: this.chartsApp,
        }
    },
    props: {
        /* charts: {
            type: Array,
            default: () => [chart1, chart2, chart3, chart4]
        } */
    },
    mounted() {
        window.addEventListener("resize", this.windowSize);
    },
    unmounted() {
        window.removeEventListener("resize", this.windowSize);
    }, 
    computed: {
        paginatedChart() {
            return this.charts.slice(this.first, this.first + this.chartsPerPage);
        },
        paginatorTemplate() {
            if (this.innerWidth <= 576)
                return 'PrevPageLink JumpToPageDropdown NextPageLink';
            else if (this.innerWidth <= 1200)
                return 'PrevPageLink PageLinks NextPageLink';
            else return 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageInput';
        },
    },

    methods: {
        onPageChange(event) {
            this.first = event.first;
        },
        windowSize() {
            this.innerWidth=window.innerWidth
        },
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
}

.custom-card {
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
    margin-left: 0px;
    width: 33%;
}

@media (max-width:740px) {
    .dashboard {
        width: 100%;
        /* display: flexbox; */
        flex-direction: column
    }

    .charting-card {
        display: flex;
        width: 100%;
        margin: 0
    }

    .checklist-card {
        display: block;
        width: 100%
    }
}
</style>