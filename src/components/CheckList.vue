<template>
    <Card class="checklist-card">
        <template #title>
            <span>Checklist</span>
            <span>
                <Paginator :totalRecords="list.length" :rows="itemsPerPage" :first="first" @page="onPageChange"/>
            </span>
        </template>
        <template #content>
            <ul>
                <li v-for="(item, i) in paginatedList" :key="i" :id="`todo${i+1}`">
                    {{ item.task }}
                    <slot></slot>
                </li>
            </ul>
        </template>

    </Card>
</template>

<script>
import list from '../assets/mock.json';

import Card from 'primevue/card';
import Paginator from 'primevue/paginator';

export default {
    name: "CheckList",
    components: {
        Card,
        Paginator,
    },
    data(){
        return{
            first:0,
            itemsPerPage: 4,
        }
    },
    props:{
        list: {
            type: Array,
            default: () => list
        }
    },
    computed:{
        paginatedList(){
            return this.list.slice(this.first, this.first+this.itemsPerPage);
        }
    },
    methods:{
        onPageChange(event){
            this.first = event.first;
        }
    }
}
</script>
<style scoped>
.checklist-card {
    margin: 10px;
    margin-left: 0px;
    width: 33%;
}
</style>