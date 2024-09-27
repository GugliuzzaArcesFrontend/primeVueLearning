<template>
    <Card>
        <template #content>
            <div ref="row" class="info-row">
                <SmallBox ref="boxes" v-for="(box, i) in boxes" :key="box" :value="box.value"
                    :description="box.description" :linkDescription="box.linkDescription" :linkAddress="box.linkAddress"
                    :icon="box.icon" />
            </div>
        </template>
    </Card>
</template>

<script>

import Card from 'primevue/card';
import InfoBox from './Infobox.vue';
import SmallBox from './SmallBox.vue';

export default {
    name: "InfoRow",
    components: {
        Card,
        InfoBox,
        SmallBox,
    },
    inject: ['boxes'],
    data() {
        return {
            data: this.boxes
        }
    },
    mounted() {
        this.updateRowHeight();
        window.addEventListener("resize", this.updateRowHeight);
        window.addEventListener("orientationchange", this.updateRowHeight);
     },
    unmounted() {
        window.removeEventListener("resize", this.updateRowHeight);
        window.removeEventListener("orientationchange", this.updateRowHeight);
     },
    methods: {
        updateRowHeight() {
            const boxHeight = this.$refs.boxes[0].$el.offsetHeight;
            this.$refs.row.style.height = `calc(${boxHeight}px + 1rem)`;            
        }
    }
}
</script>

<style scoped>
.info-row {
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

@media (max-width:1024px) {
    .info-row {
        flex-direction: column;
        flex-wrap: wrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
    }

    .info-row>* {
        width: calc(50% - .75rem);
        margin-right: 1rem;
        scroll-snap-align: start;
    }
}

@media (orientation:portrait) {
    .info-row {
        flex-direction: column;
        flex-wrap: wrap;        
        overflow-x: auto;
        scroll-snap-type: x mandatory;
    }

    .info-row>* {
        width: calc(100% - .5rem);
        margin-right: 1rem;
        scroll-snap-align: center;
    }
}
</style>