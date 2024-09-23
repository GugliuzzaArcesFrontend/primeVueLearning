<template>
    <div class="c-smallbox" :class="[]">
        <div class="box-body">
            <div class="box-content">
                <h3>{{ value }}</h3>
                <p>{{ description }}</p>
            </div>

            <div class="icon">
                <i :class="[icon, iconColor]"></i>
            </div>
        </div>

        <div class="box-footer">
            <a :href="linkAddress">
                {{ linkDescription }} <i :class="linkIcon"></i>
            </a>
        </div class="box-footer">
    </div>
</template>

<script>
export default {
    name: "SmallBox",
    data() {
        return {
            isLoading: false
        }
    },
    props: {
        value: {
            type: [String, Number],
            default: "placeholder"
        },
        description: {
            type: String,
            default: "segnaposto"
        },
        color: {
            type: String,
            default: "bg-primary"
        },
        sizes: {
            type: [String, Number, Array],
            default: ""
        },
        icon: {
            type: String,
            default: "pi pi-envelope"
        },
        iconColor: {
            type: String,
            default: ""
        },
        linkAddress: {
            type: String,
            default: "#"
        },
        linkDescription: {
            type: String,
            default: "Redirect"
        },
        linkIcon: {
            type: String,
            default: "pi pi-arrow-right"
        }
    },
    computed: {
        sizeClass() {
            if (typeof this.sizes === 'object') return this.sizes.map(size => "col-" + size).join(" ")
            else if (typeof this.sizes === "string" || typeof this.sizes === "number") return "col-" + this.sizes
            else return "col"
        },
    },
}
</script>

<style scoped>
.c-smallbox {
    min-width: 20%;
    /* display: inline-flex; */
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px;
}

.box-body {
    width: 100%;
    padding: 5px;
    padding-bottom:0;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    height: 80%;
}

.box-content {
    padding-left: 5%;
    text-align: center;
}

.icon{
padding-right:5%;
width: 20%;
}

.icon>i {
    text-align: center;
    font-size: 2rem;
}

.box-footer {
    border-top: solid 1px rgba(200, 200, 200, 0.5);
    display: block;
    /* padding-bottom: 5px; */
    min-height: 20%;
}

a{
    text-decoration: none;
/*     font-size: 0.8rem; */
}
</style>