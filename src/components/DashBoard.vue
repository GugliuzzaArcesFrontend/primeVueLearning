<template>
    <div class="dashboard">
        <InfoRow style="margin-bottom: 10px; float:top; width: 100%" />
        <div class="w-100">
        <Card class="charting-card">
            <!-- <template #title>
                <Paginator :totalRecords="charts.length" :rows="chartsPerPage" :first="first" @page="onPageChange"
                    :template="paginatorTemplate" :pageLinkSize="3" currentPageReportTemplate="of {totalPages}"/>
            </template> -->

            <template #content><!--  -->
                <!-- <div class="custom-card w-66">
                    <Tabs scrollable lazy="true" :value="0">
                        <TabList>
                            <Tab v-for="(chart, i) in charts" :key="i" :id="`tab${i + 1}`" :value="i">Grafico {{ 1 + i
                                }}
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel v-for="(chart, i) in charts" :key="i" :id="`chart${i + 1}`" :value="i">
                                <div>
                                    <Chart class="custom-chart" :type="chart.type" :data="chart.data"
                                        :options="chart.options" />
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div> --><!-- :height="canvasSize" -->
                <!-- <Card class="custom-card" :class="[{ 'w-100': innerWidth < 576, 'w-66': innerWidth >= 576 }]">
                    v-for="(chart, i) in paginatedChart" :key="i" :id="`chart${i + 1}`"
                    <template #title>Report fatturato </template> {{ i + 1 + first}}

<template #content>
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[0].type" :data="charts[0].data"
                            :options="charts[0].options" />
                    </template>
</Card>

<Card class="custom-card" :class="[{ 'w-100': innerWidth < 576, 'w-33': innerWidth >= 576 }]">
    <template #title>Fidelizzazione clienti</template>

    <template #content>
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[4].type" :data="charts[4].data"
                            :options="charts[4].options" />
                    </template>
</Card>

<div class="w-100"></div>

<Card class="custom-card" :class="[{ 'w-100': innerWidth < 741, 'w-50': innerWidth >= 741 }]">
    <template #title> Stato pratiche aperte </template>
    <template #content>
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[3].type" :data="charts[3].data"
                            :options="charts[3].options" />
                    </template>
</Card>

<Card class="custom-card" :class="[{ 'w-100': innerWidth < 741, 'w-50': innerWidth >= 741 }]">
    <template #title> Tipologia clienti </template>
    <template #content>
                        <Chart class="custom-chart" :height="canvasSize" :type="charts[2].type" :data="charts[2].data"
                            :options="charts[2].options" />
                    </template>
</Card> -->
            </template>
        </Card>

        <CheckList class="checklist-card">
        </CheckList>
    </div></div>
</template>

<script>
import chart1 from '../assets/chart1';
import chart2 from '../assets/chart2';
import chart3 from '../assets/chart3';
import chart4 from '../assets/chart4';
import chart5 from '../assets/chart5';
import chart6 from '../assets/chart6';

import Card from 'primevue/card';
import Chart from 'primevue/chart';
import Tab from 'primevue/tab';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
//import Paginator from 'primevue/paginator';

import CheckList from './CheckList.vue';
import InfoRow from './InfoRow.vue';

export default {
    name: 'DashBoard',
    components: {
        Card,
        Chart,
        // Paginator,
        Tab,
        Tabs,
        TabList,
        TabPanel,
        TabPanels,

        CheckList,
        InfoRow,
    },
    // inject: ['charts'],
    data() {
        return {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            first: 0,
            chartsPerPage: 1,
            charts: [chart1, chart2, chart3, chart5, chart6],
        }
    },
    props: {
        /* charts: {
            type: Array,
            default: () => [chart1, chart2, chart3, chart5, chart6],
        } */
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
            this.innerHeight = window.innerHeight;
        },
    }
}
</script>

<style scoped>
/* :deep(*) {
    box-sizing: border-box;
} */

.w-100 {
    width: 100%;
}

.w-66 {
    width: calc(66% - .5rem);
    margin: .5rem;
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
    display: flex;
    width: 100%;
    margin: 0;
    margin-bottom: .5rem;
    padding: 0
}

.charting-card {
    width: 100%;
    height: stretch;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
    justify-content: space-between;
}

.custom-card {
    display: inline-block;
    width: 97%;
    border-radius: 15px;
    margin: 0 .5rem .5rem 0;
    height: auto;
    align-self: stretch
}

.custom-chart {
    display: inline-block;
    width: 100%;
    margin-bottom: .5rem;
    align-self: stretch;
}

:deep(canvas) {
    width: 97%;
    height: auto;
}

/* .checklist-card {
    margin: 10px;
    margin-left: 0px;
    width: 33%;
} */

@media (max-width:740px) {
    .dashboard {
        width: 100%;
        display: flexbox;
        flex-direction: column
    }

    .charting-card {
        display: flex;
        width: 97%;
        margin: 0
    }

    .checklist-card {
        display: block;
        width: 100%
    }
}

@media (max-width: 576px) {
    .custom-chart {
        width: 97%;
        height: auto;
    }

    .custom-card {
        width: 100%;
        /* Prende tutta la larghezza del contenitore */
    }
}
</style>