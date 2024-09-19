<template>
    <Card v-bind="$attrs" id="checklist">
        <template #title>
            <span>Checklist</span>

            <span>
                <Paginator :totalRecords="list.length" :rows="itemsPerPage" :first="first" :template="paginatorTemplate"
                    @page="onPageChange" :pageLinkSize="3" />
            </span>
        </template>

        <template #content>
            <ul class="c-ul">
                <li class="c-li" v-for="(item, i) in paginatedList" :class="{ 'done': item.status }" :key="i"
                    :id="`todo${i + 1}`">
                    <i class="pi pi-ellipsis-v"></i>

                    <div class="c-checkbox">
                        <input type="checkbox" :checked="item.status" v-model="item.status" :name="item.todo"
                            :value="item.todo" :id="`todoCheck${item.id}`">
                        <label :for="`todoCheck${item.id}`"></label>
                    </div>

                    <span class="task-description">{{ item.task }} </span>

                    <Badge class="c-badge" :value="badgeText(item.dueDate, item.status)"
                        :severity="badgeColor(item.dueDate, item.status)">
                        <i class="bi bi-clock-fill"></i>
                        <span>{{ badgeText(item.dueDate, item.status) }}</span>
                    </Badge>

                    <Button text class="c-button" icon="pi pi-trash" @click="removeItem(i)">
                    </Button>

                    <Button text class="c-button" icon="pi pi-pencil" @click="editItem(item)"></Button>
                </li>
            </ul>
        </template>
        <template #footer>
            <Button label="Aggiungi mansione" icon="pi pi-plus" @click="showDialog = true"></Button>
        </template>
    </Card>
    <Dialog v-model:visible="showDialog" modal class="c-dialog" :closable=false :dismissableMask=true>
        <template #header>
            <h5 class="dialog-title">Nuova mansione</h5>
            <Button icon="pi pi-times" class="dialog-close p-button-text p-button-danger "
                @click="showDialog = false" />
        </template>

        <div class="dialog-content">
            <Toast position="center" />
            <div class="dialog-input">
                <label for="taskName">Nome mansione</label>
                <input type="text" class="form-control" name="taskName" id="taskName" v-model="newItem.task">
            </div>

            <div class="dialog-input">
                <label for="dueDate">Scadenza</label>
                <input type="date" class="form-control" name="dueDate" id="dueDate" v-model="newItem.dueDate">
            </div>
        </div>
        <template #footer>
            <Button label="Annulla" class="dialog-cancel" @click="showDialog = false, resetNewItem" />
            <Button label="Salva" severity="primary" @click="addItem" />
        </template>
    </Dialog>
</template>

<script>
import Button from 'primevue/button';

import Badge from 'primevue/badge';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import Paginator from 'primevue/paginator';

export default {
    name: "CheckList",
    components: {
        Badge,
        Button,
        Card,
        Dialog,
        Paginator,
        Toast,
    },
    inject: ['list'],
    data() {
        return {
            innerWidth: 0,
            showDialog: false,
            first: 0,
            itemsPerPage: 10,
            listData: this.list,
            newItem: {
                id: null,
                task: '',
                dueDate: '',
                status: false
            }
        }
    },
    props: {
    },
    mounted() {
        window.addEventListener("resize", this.windowSize);
    },
    unmounted() {
        window.removeEventListener("resize", this.windowSize);
    },
    computed: {
        paginatedList() { return [...this.listData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))].slice(this.first, this.first + this.itemsPerPage); },
        paginatorTemplate() {
            if (this.innerWidth <= 576) return 'PrevPageLink JumpToPageDropdown NextPageLink';
            else return 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink ';
        },
    },
    methods: {
        onPageChange(event) {
            this.first = event.first;
        },
        badgeText(due, status) {
            const date = new Date();
            const dueDate = new Date(due);
            const dayDiff = Math.ceil((dueDate.getTime() - date.getTime()) / (3600000 * 24));

            if (status) return 'Completato';
            if (dayDiff >= 3) return `${due}`;
            else if (dayDiff < 3 && dayDiff > 0)
                // return `In scadenza (${due})`
                return `In scadenza`
                    ;
            else
                // return `Scaduto (${-dayDiff} giorni)`
                return `Scaduto`
                    ;
        },
        badgeColor(due, status) {
            const date = new Date();
            const dueDate = new Date(due);
            const dayDiff = Math.ceil((dueDate.getTime() - date.getTime()) / (3600000 * 24));

            if (status) return 'secondary'
            if (dayDiff >= 3) return 'info'
            else if (dayDiff < 3 && dayDiff > 0) return 'warn'
            else return 'danger'
        },
        addItem() {
            if (this.newItem.task.trim() === '' || this.newItem.dueDate === '') {
                this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Si prega di compilare tutti i campi', life: 3000 });
                return;
            }
            if (this.editingItem) {
                Object.assign(this.editingItem, this.newItem);
                this.editingItem = null;
            }
            else {
                this.newItem.id = this.listData.length + 1;
                this.newItem.todo = `todo${this.listData.length + 1}`;
                this.listData.push({ ...this.newItem });
            }
            this.resetNewItem();
            this.showDialog = false;
        },
        editItem(item) {
            this.newItem = { ...item };
            this.editingItem = item;
            this.showDialog = true;
        },
        resetNewItem() {
            this.newItem = {
                id: null,
                task: '',
                dueDate: '',
                todo: '',
                state: false
            };
            this.editingItem = null;
        },
        removeItem(i) {
            this.listData.splice(i, 1);
        },
        windowSize() {
            this.innerWidth = window.innerWidth;
        }
    },
}
</script>

<style scoped>
.checklist-card {
    margin: 10px;
    margin-left: 0px;
    width: 33%;
}

.c-ul {
    height: 100%;
    width: 100%;
    justify-content: space-between;
    text-align: justify;
    list-style: none;
}

.c-li {
    margin: auto;
    margin-bottom: 1%;
    border: solid 1px lightgrey;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    display: flexbox;
    align-content: center;
    /* justify-content: space-between; */
}

.c-li>i {
    float: left;
    align-self: center;
}

.c-li:hover {
    background-color: lightgrey;
}

.c-checkbox {
    display: inline;
    float: left;
}

.task-description {
    display: inline;
    float: none;
    overflow-y: hidden;
}

.done {
    text-decoration: line-through !important;
    color: grey !important;
    opacity: 0.5 !important;
}

.c-badge {
    height: 100%;
    width: 25%;
    display: inline;
    float: right;
    overflow: hidden;
}

.c-button {
    display: none;
    width: 8%;
    float: right;
    height: 100%;
}

.c-li:hover .c-button {
    display: inline-flex;
}

.dialog-input {
    margin-bottom: 20px;
    display: block;
    align-content: center;
}

.dialog-input>input {
    width: 50%;
    float: right;
}

@media (max-width: 740px) {
    .checklist-card {
        display: block;
        width: 100%;
    }

    .c-button {
        display: block;
    }
}
</style>