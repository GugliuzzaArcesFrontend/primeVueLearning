<template>
    <div class="c-info-box-container" :class="[sizeClass]">
        <div class="c-info-box" :class="[isFull ? color : '']">
            <span class="c-info-box-icon col-2" :class="[!isFull ? color : '']">
                <i :class="[icon, iconColor]"></i>
            </span>

            <div class="c-info-box-content">
                <span class="info-box-text">{{ title }}</span>
                <span v-if="typeof value === 'number'" class="info-box-number">{{ valueName }}: {{ value }}</span>
                <span v-else class="info-box-text">{{ valueName }}: {{ value }}</span>
            </div>

            <div v-if="maxValue" class="c-info-box-progress ms-auto col-4 align-self-center">
                <p>Tasso di {{ valueName.toLowerCase() }}</p>
                
                <div class="progress">
                    <div class="progress-bar" :class="colorBar" :style="{ 'min-width': progressBar }"></div>
                </div>

                <span class="progress-description">
                    {{ progressBar }} di {{ maxValue }}
                </span>
            </div>
            <div v-if=isLoading class="overlay"><!-- segnaposto per grafica e condizione di attesa/caricamento -->
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'InfoboxSmall',
    data() {
        return {
            isLoading: false
        }
    },
    props: {
        color: {
            type: String,
            default: "",
        },
        colorBar: {
            type: String,
            default: "red",
        },
        title: {
            type: String,
            default: "Default message",
        },
        icon: {
            type: String,
            default: "pi pi-envelope",
        },
        iconColor: {
            type: String,
            default: ""
        },
        value: {
            type: [String, Number]
        },
        valueName: {
            type: String,
            default: "Valore"
        },
        sizes: {
            type: [String, Number, Array],  //accetta un array di classi o una singola bootstrap, tolta la dicitura "col-", i.e.: ['11','sm-5','lg-3'],
            default: []
        },
        maxValue: {
            default: 0
        },
        isFull: false,
    },
    computed: {
        sizeClass() {
            if (Array.isArray(this.sizes))
                return this.sizes.lenght ? this.sizes.map(size => "col-" + size).join(" ") : "col";
            else if (typeof this.sizes === "string" || typeof this.sizes === "number")
                return "col-" + this.sizes;
            else
                return "col";
        },
        progressBar() {
            return `${Math.floor(this.value / this.maxValue * 100)}%`
        },
        valueType() {
            return typeof this.value
        },
    }
}
</script>

<style scoped>
.c-info-box-container {
    min-height: 100px;
    width: auto;
    margin: 0;
    margin-bottom: .5rem;
    display: flex;
    align-content: center;
    border: 1px solid rgba(150, 150, 150, 0.5);
    border-radius: 10px;
}

.c-info-box {
    width: fit-content;
    display: inline-flex;
    justify-content: space-between;
}

.c-info-box-icon {
    display: inline-block;
    
}

.c-info-box-icon i {
    font-size: 1.75rem;
    padding: 5%;
}

.c-info-box-content {
    display: inline-block;
    padding-left: 5%;
    text-align: left;
}

.progress{
    min-width: 100px;
    background-color: rgba(150, 150, 150, 0.5)
}

.red{
    background-color: rgba(255, 0, 0, 1);
    min-height: 100%;
}

.c-info-box-progress {
    display: inline-block;
}
</style>