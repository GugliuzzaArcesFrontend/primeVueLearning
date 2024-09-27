<template>
    <div class="dashboard">
        <InfoRow class="sticky" />
        <section>
            <div class="row w-100 scroll-point">
                <Card class="charting-card " :class="{ 'w-66': innerWidth > innerHeight }">
                    <!-- <template #title>
                <Paginator :totalRecords="charts.length" :rows="chartsPerPage" :first="first" @page="onPageChange" :template="paginatorTemplate" :pageLinkSize="3" currentPageReportTemplate="of {totalPages}"/> </template>
-->
                    <template #content>
                        <div class="custom-card">
                            <Tabs scrollable lazy="false" :value="0">
                                <TabList>
                                    <Tab v-for="(chart, i) in charts" :key="i" :id="`tab${i + 1}`" :value="i">Grafico {{
                                        1 + i }}
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
                        </div><!-- :height="canvasSize" -->
                    </template>
                </Card>

                <CheckList class="checklist-card">
                </CheckList>
            </div>
            <div class="row w-100 scroll-point">
                <Card class="charting-card" :class="{ 'w-66': innerWidth > innerHeight }">
                    <!-- <template #title>
                <Paginator :totalRecords="charts.length" :rows="chartsPerPage" :first="first" @page="onPageChange" :template="paginatorTemplate" :pageLinkSize="3" currentPageReportTemplate="of {totalPages}"/> </template> -->
                    <template #content>
                        <div class="custom-card">
                            <Tabs scrollable lazy="false" :value="0">
                                <TabList>
                                    <Tab v-for="(chart, i) in charts" :key="i" :id="`tab${i + 1}`" :value="i">Grafico {{
                                        1 + i }}
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
                        </div>
                        <!-- :height="canvasSize" -->
                    </template>
                </Card>

                <CheckList class="checklist-card">
                </CheckList>
            </div>
        </section>
    </div>
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
.dashboard {
    box-sizing: border-box;
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin: 0;
    margin-bottom: .5rem;
    padding: 0
}

.charting-card {
    height: stretch;
    /* flex-wrap: wrap; */
    align-content: stretch;
    align-items: stretch;
    justify-content: space-between;
}

.custom-card {
    display: inline-block;
    width: 100%;
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

/* @media (max-width:740px) {
    .dashboard {
        width: 100%;
        display: flex;
        flex-direction: column
    }

    .charting-card {
        display: flex;
        width: 100%;
        margin: 0;
        margin-bottom: .5rem;
    } */
@media (orientation: landscape) {

    section {
        scroll-snap-type: y mandatory;
        overflow-y: auto;
        height: 80%;
    }

    .scroll-point {
        scroll-snap-align: start;
    }

    .sticky {
        /* position: sticky;
        top: 0;
        z-index: 1000;
         */box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        height: 20%;
    }
}

@media (orientation: portrait) {
    .custom-chart {
        width: 97%;
        height: 50vh;
    }

    .custom-card {
        width: 100%;
    }

    .checklist-card {
        display: inline-block;
        width: 100%;
    }
}
</style>