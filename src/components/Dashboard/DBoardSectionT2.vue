<template>
    <div class="lower-table row h-100 scroll-point">
        <DBVoid v-for="(chart, index) in chartClamped" :key="index">
            <div class="bbb h-50 " 
            :class="{ 
                'w-66': index === 0, 
                'w-33': index === 1, 
                'w-50': index > 1, 
                }">
                <Chart class="custom-chart " :ref="`bbb${index + 1}`" :type="chart.type" :data="chart.data"
                    :options="chart.options" />
            </div>
        </DBVoid>
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
import DBVoid from './DBVoid.vue';

export default {
    name: "DBoardSectionT2",
    components: {
        DBVoid,
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
    computed:{
        chartClamped(){
            return this.charts.filter((chart, index) => index < 4)
        }
    },
    props: {
        charts: {
            type: Array,
            default: () => [],
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
            let chartRefs = [this.$refs.bbb1, this.$refs.bbb2, this.$refs.bbb3, this.$refs.bbb4].flat();
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

.lower-table {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem .5rem 0 .5rem;
}

.bbb {
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px;
}
@media (orientation: landscape) {
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