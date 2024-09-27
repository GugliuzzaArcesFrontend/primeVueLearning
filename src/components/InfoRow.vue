<template>
    <Card >
        <template #content>
            <div class="info-row">
                <SmallBox v-for="(box, i) in boxes" :key="i + 1" :value="box.value" :description="box.description"
                    :linkDescription="box.linkDescription" :linkAddress="box.linkAddress" :icon="box.icon" />
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

@media (max-width:740px) {
    .info-row {
        flex-direction: column;
        /* flex-wrap: wrap; */
        overflow-x: auto;
        max-height: 15vh
    }
    .info-row>* {
        width: calc(50% - .75rem);
        margin-right: 1rem
    }
}

@media (orientation:portrait) {
    .info-row {
        flex-direction: column;
        flex-wrap: wrap;
        height: 15vh;
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