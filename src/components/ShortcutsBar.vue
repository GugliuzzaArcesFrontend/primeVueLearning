<template>
    <div ref="row" class="link-row">
        <Card class="shortcut-card" ref="boxes" v-for="(link, i) in list" :key="i">
            <template #content>
                <span><a :href="link.href">{{ link.name }} | </a></span><i class="pi pi-arrow-right"></i>
            </template>
        </Card>
    </div>
</template>
<script>
import Card from 'primevue/card';

export default {
    name: "ShortcutsBar",
    components: {
        Card
    },
    props: {
        list: {
            type: Array,
            default: () => [{ name: "Link 1", href: "#" }, { name: "Link 2", href: "#" }, { name: "Link 3", href: "#" }, { name: "Link 4", href: "#" }, { name: "Link 5", href: "#" }, { name: "Link 6", href: "#" }, { name: "Link 7", href: "#" }, { name: "Link 8", href: "#" }, { name: "Link 9", href: "#" }, { name: "Link 10", href: "#" }]
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
            this.$refs.row.style.height = `calc(${boxHeight}px + 1.25rem)`;
        }
    }
}
</script>
<style scoped>
.link-row {
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    overflow-x: auto;
    /* overflow-y: hidden; */
    justify-content: space-between;
}

.link-row>* {
    width: calc(15% - .75rem);
        margin-right: .75rem;
        scroll-snap-align: start;
}

.shortcut-card {
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 7px;
    margin-bottom: .25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
a{
    text-decoration: none;
    color: #000;
}


@media (max-width:1024px) {
    .link-row {
        flex-direction: column;
        flex-wrap: wrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
    }

    .link-row>* {
        width: calc(20% - .75rem);
        margin-right: .75rem;
        scroll-snap-align: start;
    }
}

@media (orientation:portrait) {
    .link-row {
        flex-direction: column;
        flex-wrap: wrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
    }

    .link-row>* {
        width: calc(50% - .5rem);
        margin-right: .75rem;
        scroll-snap-align: center;
    }
}
</style>