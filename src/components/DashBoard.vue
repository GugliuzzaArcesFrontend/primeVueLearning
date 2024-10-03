<template>
    <div class="dashboard w-100 h-100">
        <div class="summary">
            <InfoRow />
            <ShortcutsBar />
        </div>
        <section class="dashboard-section">
            <div class="row h-100 scroll-point" v-if="true">
                <Card class="charting-card h-100" :class="{ 'w-66': innerWidth > innerHeight }">
                    <template #content>
                        <div class="custom-card h-100">
                            <Tabs scrollable :lazy="true" :value="0">
                                <TabList>
                                    <Tab v-for="(chart, i) in charts" :key="i" :id="`tab${i + 1}`" :value="i">{{
                                        chart.options.plugins.title.text }}
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel v-for="(chart, i) in charts" ref="panels" :key="i" :id="`chart${i + 1}`"
                                        :value="i">
                                        <Chart class="custom-chart " ref="paneledCharts" :type="chart.type"
                                            :data="chart.data" :options="chart.options" />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </div>
                    </template>
                </Card>
                <Card class="charting-card" :class="{ 'w-33': innerWidth > innerHeight }">
                    <template #title>
                        {{ chart4.title }}
                    </template>
                    <template #content>
                        <div class="custom-card h-100 w-100">
                            <Chart class="custom-chart " ref="sidechart" :type="chart4.type" :data="chart4.data"
                                :options="chart4.options" />
                        </div>
                    </template>
                </Card>
                <!-- <CheckList class="checklist-card">
                </CheckList> -->
            </div>

            <DBoardSection :charts="charts" :chart-secondary="chart4"/>

            <div class="lower-table row h-100 scroll-point">
                <div class="bbb w-66 h-50 ">
                    <Chart class="custom-chart " ref="bbb1" :type="chart5.type" :data="chart5.data"
                        :options="chart5.options" />
                </div>
                <div class="bbb w-33 h-50">
                    <Chart class="custom-chart " ref="bbb2" :type="chart6.type" :data="chart6.data"
                        :options="chart6.options" />
                </div>
                <div class="bbb w-50 h-50">
                    <Chart ref="bbb3" class="custom-chart " :type="chart1.type" :data="chart1.data"
                        :options="chart1.options" />
                </div>
                <div class="bbb w-50 h-50">
                    <Chart ref="bbb4" class="custom-chart " :type="chart2.type" :data="chart2.data"
                        :options="chart2.options" />
                </div>
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

import CheckList from './CheckList.vue';
import InfoRow from './InfoRow.vue';
import ShortcutsBar from './ShortcutsBar.vue';

import DBoardSection from './Dashboard/DBoardSection.vue';

export default {
    name: 'DashBoard',
    components: {
        Card,
        Chart,
        Tab,
        Tabs,
        TabList,
        TabPanel,
        TabPanels,
        CheckList,
        InfoRow,
        ShortcutsBar,
        DBoardSection
    },
    //inject: ['boxes','charts'],
    data() {
        return {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            charts: [chart1, chart2, chart3, chart5, chart6],
            chart1: chart1,
            chart2: chart2,
            chart3: chart3,
            chart4: chart4,
            chart5: chart5,
            chart6: chart6,
        }
    },
    props: {
    },
    mounted() {
        this.windowSize();
        this.chartsRefresh();
        window.addEventListener("resize", this.debouncedWindowResize);
        window.addEventListener("resize", this.debouncedChartsRefresh);
    },

    unmounted() {
        window.removeEventListener("resize", this.debouncedWindowResize);
        window.removeEventListener("resize", this.debouncedChartsRefresh);
    },
    computed: {
    },

    methods: {
        debounce(func, wait) {
            let timeout;
            return function () {
                const later = () => {
                    clearTimeout(timeout);
                    func.apply(this, arguments);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        windowSize() {
            this.innerWidth = window.innerWidth;
            this.innerHeight = window.innerHeight;
        },
        debouncedWindowResize() { this.debounce(this.windowSize(), 1000) },
        chartsRefresh() {
            let chartRefs = [...this.$refs.paneledCharts, this.$refs.sidechart, this.$refs.bbb1, this.$refs.bbb2, this.$refs.bbb3, this.$refs.bbb4];
            chartRefs.map(chart => chart.reinit());
        },
        debouncedChartsRefresh() { this.debounce(this.chartsRefresh(), 1500) },
    }
}
</script>

<style scoped>
.dashboard {
    /* border: solid 1px rgba(200, 200, 200, 0.5); */
    /* border-radius: 10px;  */
    margin-bottom: .5rem;
}

.summary {
    border: solid 1px rgba(200, 200, 200, 0.5);
    margin: .5rem;
    padding: .5rem;
}

.charting-card {
    height: 95%;
    margin: 0 .5rem;
}

.custom-card {
    display: inline-block;
    width: 100%;
    border-radius: 15px;
    /* margin: 0 .5rem .5rem 0; */
    /* align-self: stretch */
}

.custom-chart {
    display: inline-block;
    width: 95%;
    height: 95%;
    margin: auto;
    margin-bottom: .5rem;
    align-self: center;
    align-content: center;
    align-items: center;
}

.lower-table {
    /* border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px; */
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem .5rem 0 .5rem;
}

.bbb {
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px;
}

:deep(canvas) {
    margin: auto;
    width: 95%;
    height: 95%;
}

@media (orientation: landscape) {
    .dashboard-section {
        scroll-snap-type: y mandatory;
        overflow-y: auto;
        height: 75%;
    }

    .scroll-point {
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }
}

/* hide scrollbar */
/* Hide scrollbar for Chrome, Safari and Opera */
.dashboard-section::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.dashboard-section {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

@media (orientation: portrait) {
    .charting-card {
        margin-bottom: .5rem;
    }

    .custom-chart {
        /* width: 97%; */
        height: 50vh;
    }

    .custom-card {
        width: 100%;
    }

    .checklist-card {
        display: inline-block;
        width: 100%;
    }

    .bbb {
        width: 100%;
        height: 100%;
    }
}
</style>