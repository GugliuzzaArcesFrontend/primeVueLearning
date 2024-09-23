<template>
    <Card style="margin-bottom: 10px">
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
    flex-wrap: wrap;
    display: flex;
    width: 100;
    justify-content: space-between;
}

@media (max-width:360px) {
    .info-row {
        height: 15vh;
    }
}

@media (max-width:741px) {
    .info-row {
        height: 30vh;
        overflow-y: auto;
    }
}
</style>