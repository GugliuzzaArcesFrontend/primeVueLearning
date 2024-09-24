<template>
    <div class="c-smallbox" :class="[color]">
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
            default: "secondary" //trovare classi utility colore prime
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
            if (Array.isArray(this.sizes)) return this.sizes.lenght?this.sizes.map(size => "col-" + size).join(" "):"col";
            else if (typeof this.sizes === "string" || typeof this.sizes === "number") return "col-" + this.sizes;
            else return "col";
        },
    },
}
</script>

<style scoped>
.c-smallbox {
    min-height: 100px;
    min-width: 20%;
    border: solid 1px rgba(200, 200, 200, 0.5);
    border-radius: 10px;
    margin-bottom: .5rem
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
    min-height: 20%;    
}

a{
    text-decoration: none;
    color: inherit;
}

@media (max-width: 741px) {
    .c-smallbox {
        width: 50%;
    }
}

@media (max-width: 361px) {
    .c-smallbox {
        width: 100%;
        height: 50%;
    }
}
</style>