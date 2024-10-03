<template>
    <div class="dashboard w-100 h-100">
        <div class="summary">
            <InfoRow />
            <ShortcutsBar />
        </div>
        <section class="dashboard-section">
            <slot></slot>
        </section>
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

import CheckList from './CheckList.vue';
import InfoRow from './InfoRow.vue';
import ShortcutsBar from './ShortcutsBar.vue';

import DBoardSection from './Dashboard/DBoardSection.vue';
import DBoardSectionT2 from './Dashboard/DBoardSectionT2.vue';


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
        DBoardSection,
        DBoardSectionT2
    },
    data() {
        return {
        }
    },
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    },
    mounted() {
    },

    unmounted() {
    },
    computed: {
    },

    methods: {
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
<style>

.h-66 {
  height: calc(66% - .5rem);
  margin-bottom: .5rem;
}

.h-33 {
  height: calc(33% - .5rem);
  margin-bottom: .5rem;
}

.w-66 {
  width: calc(66% - .5rem);
}

.w-33 {
  width: calc(33% - .5rem);
}
</style>