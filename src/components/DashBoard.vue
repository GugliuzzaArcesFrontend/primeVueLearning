<template>
    <div class="dashboard">
        <Card class="charting-card">
            <!-- <template #title>
                <Paginator :totalRecords="charts.length" :rows="chartsPerPage" :first="first" @page="onPageChange"
                    :template="paginatorTemplate" :pageLinkSize="3" currentPageReportTemplate="of {totalPages}"/>
            </template> -->

            <template #content>
                <Card class="custom-card" :class="[{ 'w-100': innerWidth < 576, 'w-66': innerWidth >= 576 }]">
                    <!--  v-for="(chart, i) in paginatedChart" :key="i" :id="`chart${i + 1}`" -->
                    <template #title>Report fatturato </template> <!-- {{ i + 1 + first}} -->
                
                    <template #content><!--  -->
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[0].type" :data="charts[0].data"
                            :options="charts[0].options" />
                    </template>
                </Card>

                <Card class="custom-card" :class="[{ 'w-100': innerWidth < 576, 'w-33': innerWidth >= 576 }]">
                    <template #title>Fidelizzazione clienti</template>

                    <template #content><!--  -->
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[4].type" :data="charts[4].data"
                            :options="charts[4].options" />
                    </template>
                </Card>

                <div class="w-100"></div>
                
                <Card class="custom-card" :class="[{ 'w-100': innerWidth < 741, 'w-50': innerWidth >= 741 }]">
                    <template #title> Stato pratiche aperte </template>
                    <template #content><!--  -->
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[3].type" :data="charts[3].data"
                            :options="charts[3].options" />
                    </template>
                </Card>

                <Card class="custom-card" :class="[{ 'w-100': innerWidth < 741, 'w-50': innerWidth >= 741 }]">
                    <template #title> Tipologia clienti </template>
                    <template #content><!-- -->
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[2].type" :data="charts[2].data"
                            :options="charts[2].options" />
                    </template>
                </Card>
            </template>
        </Card>

        <CheckList class="checklist-card">
        </CheckList>
    </div>
</template>

<script>
import chart1 from '../assets/chart1';
import chart2 from '../assets/chart2';
import chart3 from '../assets/chart3';
import chart5 from '../assets/chart5';
import chart6 from '../assets/chart6';

import Card from 'primevue/card';
import Chart from 'primevue/chart';
import CheckList from './CheckList.vue';
import Paginator from 'primevue/paginator';

export default {
    name: 'DashBoard',
    components: {
        Card,
        Chart,
        Paginator,
        CheckList,
    },
    // inject: ['charts'],
    data() {
        return {
            innerWidth: window.innerWidth,
            first: 0,
            chartsPerPage: 1,
        }
    },
    props: {
        charts: {
            type: Array,
            default: () => [chart1, chart2, chart3, chart5, chart6],
        }
    },
    mounted() {
        window.addEventListener("resize", this.windowSize);
        window.addEventListener("orientationchange", this.windowSize);
    },
    unmounted() {
        window.removeEventListener("resize", this.windowSize);
        window.removeEventListener("orientationchange", this.windowSize);
    },
    computed: {
        paginatedChart() {
            return this.charts.slice(this.first, this.first + this.chartsPerPage);
        },
        paginatorTemplate() {
            if (this.innerWidth <= 576)
                return 'PrevPageLink JumpToPageInput CurrentPageReport NextPageLink';
            else if (this.innerWidth <= 1200 && this.innerWidth > 576)
                return ' FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink';
            else return 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageInput CurrentPageReport';
        },
        canvasSize() {
            if (this.innerWidth <= 576)
                return 150;
            else if (this.innerWidth <= 1200 && this.innerWidth > 576)
                return 200;
            else return 300;
        },
    },

    methods: {
        onPageChange(event) {
            this.first = event.first;
        },
        windowSize() {
            this.innerWidth = window.innerWidth;
        },
    }
}
</script>

<style scoped>
/* :deep(*) {
    box-sizing: border-box;
} */

.w-100 {
    width: 97%;
}

.w-66 {
    width: calc(66% - .5rem);
}

.w-50 {
    width: calc(50% - .5rem);
}

.w-33 {
    width: calc(33% - .5rem);
}

.dashboard {
    box-sizing: border-box;
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px;
    display: inline-flex;
    width: 100%;
    margin: 0;
    padding: 0
}

.charting-card {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
    justify-content: space-between;
}

.custom-card {
    display: inline-block;
    border-radius: 15px;
    /* aspect-ratio: 2; */
    margin: 0 .5rem .5rem 0;
    height: stretch;
    align-self: stretch
}

.custom-chart {
    display: inline-block;
    width: 100%;
    margin-bottom: .5rem;
    align-self: stretch;
}

/* .checklist-card {
    margin: 10px;
    margin-left: 0px;
    width: 33%;
} */

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