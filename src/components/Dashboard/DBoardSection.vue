<template>
    <div class="row h-100 scroll-point">
        <Card class="charting-card h-100" :class="{ 'w-66': innerWidth > innerHeight }">
            <template #content>
                <div class="custom-card h-100">
                    <Tabs scrollable :lazy="true" :value="0">
                        <TabList>
                            <Tab v-for="(chart, i) in charts" :key="i" :id="`tab${i + 1}`" :value="i">
                                {{ chart.options.plugins.title.text }}
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel v-for="(chart, i) in charts" ref="panels" :key="i" :id="`chart${i + 1}`"
                                :value="i">
                                <Chart class="custom-chart " ref="paneledCharts" :type="chart.type" :data="chart.data"
                                    :options="chart.options" />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </template>
        </Card>
        <Card class="charting-card" :class="{ 'w-33': innerWidth > innerHeight }">
            <template #title>
                {{ chartSecondary.title }}
            </template>
            <template #content>
                <div class="custom-card h-100 w-100">
                    <Chart class="custom-chart " ref="sidechart" :type="chartSecondary.type" :data="chartSecondary.data"
                        :options="chartSecondary.options" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import Tab from 'primevue/tab';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';


export default {
    name: "DBoardSection",
    components: {
        Card,
        Chart,
        Tab,
        Tabs,
        TabList,
        TabPanel,
        TabPanels
    },
    data: () => {
        return {
            innerWidth: 100,
            innerHeight: 10000,
        }
    },
    props: {
        charts: {
            type: Array,
            default: () => [],
        },
        chartSecondary: {
            type: Object,
            default: () => { },
        },
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
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
        onPageChange(event) {
            this.first = event.first;
        },

        windowSize() {
            if (!this.width)
                this.innerWidth = window.innerWidth;
            if (!this.height)
                this.innerHeight = window.innerHeight;
        },
        debouncedWindowResize() { this.debounce(this.windowSize(), 1000) },
        chartsRefresh() {
            let chartRefs = [...this.$refs.paneledCharts, this.$refs.sidechart];
            // let chartRefs = [...this.$refs.paneledCharts, this.$refs.sidechart, this.$refs.bbb1, this.$refs.bbb2, this.$refs.bbb3, this.$refs.bbb4];
            chartRefs.map(chart => chart.reinit());
        },
        debouncedChartsRefresh() { this.debounce(this.chartsRefresh(), 1500) },
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
}
</script>

<style scoped>
/* 
:deep(canvas) {
    margin: auto;
    width: 95%;
    height: 95%;
} */
@media (orientation: landscape) {
    /* .dashboard-section {
        scroll-snap-type: y mandatory;
        overflow-y: auto;
        height: 75%;
    } */

    .scroll-point {
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }
}

.charting-card {
    height: 95%;
    margin: 0 .5rem;
}

.custom-card {
    display: inline-block;
    width: 100%;
    border-radius: 15px;
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