<template>
    <Card v-bind="$attrs" id="checklist">
        <template #title>
            <span>Checklist</span>

            <span>
                <Paginator :totalRecords="listData.length" :rows="itemsPerPage" :first="first"
                    :template="paginatorTemplate" @page="onPageChange" :pageLinkSize="linkSize"
                    currentPageReportTemplate="of {totalPages}" />
            </span>
        </template>

        <template #content>
            <ul class="c-ul">
                <li class="c-li" v-for="(item, i) in paginatedList" :class="{ 'done': item.status }" :key="i"
                    :id="`todo${i + 1}`">
                    <i class="pi pi-ellipsis-v"></i>

                    <div class="c-checkbox">
                        <input type="checkbox" :checked="item.status"  @change="updateStatus(item)" :name="item.todo"
                            :value="item.todo" :id="`todoCheck${item.id}`"><!-- v-model="item.status" -->
                        <label :for="`todoCheck${item.id}`"></label>
                    </div>

                    <span class="task-description">{{ item.task }} </span>

                    <Button text class="c-button" icon="pi pi-pencil" @click="editItem(item)"></Button>

                    <Button text class="c-button" icon="pi pi-trash" @click="removeItem(item.id)">
                    </Button>

                    <Badge class="c-badge" :value="badgeText(item.dueDate, item.status)"
                        :severity="badgeColor(item.dueDate, item.status)">
                        <i v-if="innerWidth > 500" class="bi bi-clock-fill"></i>

                        <span>{{ badgeText(item.dueDate, item.status) }}</span>
                    </Badge>
                </li>
            </ul>
        </template>

        <template #footer>
            <Button class="open-dialog" severity="info" raised outline label="Aggiungi mansione" icon="pi pi-plus"
                @click="showDialog = true"></Button>
        </template>
    </Card>

    <Dialog v-model:visible="showDialog" modal @hide="resetNewItem()" class="c-dialog" :closable=false
        :dismissableMask=true>
        <template #header>
            <h5 v-if="!editingItem" class="dialog-title">Nuova mansione</h5>
            <h5 v-else class="dialog-title">Aggiorna mansione</h5>

            <Button style="margin-left:auto" icon="pi pi-times" class="dialog-close p-button-text p-button-secondary"
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
            <ButtonGroup>
                <Button label="Annulla" severity="danger" class="dialog-cancel" @click="showDialog = false" />
                <Button label="Salva" severity="success" @click="addItem" />
            </ButtonGroup>
        </template>
    </Dialog>

</template>

<script>
import axios from 'axios';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Paginator from 'primevue/paginator';
import Toast from 'primevue/toast';

const URL = 'http://localhost:6500/api/';

export default {
    name: "CheckList",
    components: {
        Badge,
        Button,
        ButtonGroup,
        Card,
        Dialog,
        Paginator,
        Toast,
    },
    data() {
        return {
            innerWidth: window.innerWidth,
            showDialog: false,
            first: 0,
            editingItem: null,
            newItem: {
                id: null,
                task: '',
                dueDate: '',
                status: false
            },
            listData: [],
        }
    },
    mounted() {
        window.addEventListener("resize", this.windowSize);
        window.addEventListener("orientationchange", this.windowSize);
        this.fetchList();
    },

    unmounted() {
        window.removeEventListener("resize", this.windowSize);
        window.removeEventListener("orientationchange", this.windowSize);
    },
    computed: {
        paginatedList() {
            return [...this.listData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))]
                .slice(this.first, this.first + this.itemsPerPage);
        },
        paginatorTemplate() {
            if (this.innerWidth <= 576) return 'PrevPageLink JumpToPageInput CurrentPageReport NextPageLink';
            else return 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink ';
        },
        itemsPerPage() {
            return this.innerWidth > 741 ? 10 : 5
        },
        linkSize() {
            if (this.innerWidth > 1400) return 5;
            if (this.innerWidth > 1200) return 3;
            else return 1;
        }
    },
    methods: {
        fetchList() {
            try {
                axios.get(URL + 'checklist')
                    .then((response) => {
                        this.listData = response.data;
                    })
            } catch (error) {
                console.log(error);
                this.listData = [{ task: 'Mali forti iu arreri' }]
            }
        },
        onPageChange(event) {
            this.first = event.first;
        },
        badgeText(due, status) {
            const date = new Date();
            const dueDate = new Date(due);
            const dayDiff = Math.ceil((dueDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

            if (status) return 'Completato';
            if (dayDiff >= 3) return ` ${due}`;
            else if (dayDiff < 3 && dayDiff > 0)
                // return `In scadenza (${due})`
                return this.innerWidth > 500 ? ` ${due}\nIn scadenza` : `${due}`;
            else if (dayDiff == 0) return ` Oggi`;
            else
                return this.innerWidth > 500 ? ` Scaduto\n(${-dayDiff} giorni fa)` : `Scaduto`
            // return ` Scaduto`;
        },
        badgeColor(due, status) {
            if (status) return 'secondary'

            const date = new Date();
            const dueDate = new Date(due);
            const dayDiff = Math.ceil((dueDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

            if (dayDiff >= 3) return 'info'
            else if (dayDiff < 3 && dayDiff > 0) return 'warn'
            else return 'danger'
        },
        async addItem() {
            if (this.newItem.task.trim() === '' || this.newItem.dueDate === '') {
                this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Si prega di compilare tutti i campi', life: 2500 });
                return;
            }
            if (this.editingItem) {
                Object.assign(this.editingItem, this.newItem);
                this.editingItem = null;
                await axios.post(URL + 'checklistAdd', this.newItem);
                this.fetchList();
            }
            else {
                this.newItem.id = 1;
                while (this.listData.some(item => item.id == this.newItem.id)) {
                    this.newItem.id++;
                }
                this.newItem.todo = `todo${this.newItem.id}`;
                await axios.post(URL + 'checklistAdd', this.newItem);
                this.fetchList();
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
        async removeItem(id) {
            await axios.delete(URL + `checklistDelete/${id}`);
            this.fetchList();
        },
        async updateStatus(item) {
            try {
                item.status = !item.status;  
                await axios.post(URL + 'checklistAdd', item);
            } catch (error) {
                console.error('Errore durante l\'aggiornamento dello status:', error);
            }
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
    margin-bottom: 2%;
    border: solid 1px lightgrey;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
}

.c-li>i {
    align-self: center;
}

.c-li:hover {
    background-color: lightgrey;
}

.c-checkbox {
    display: inline;
}

.task-description {
    margin-right: auto;
    min-width: auto;
    display: inline;
    text-overflow: auto;
}

.done {
    text-decoration: line-through;
    color: grey;
    opacity: 0.5;
}

.c-badge {
    height: 100%;
    width: 25%;
    display: inline;
    margin-left: none;
    overflow: hidden;
    white-space: pre-wrap;
}

/* .c-badge>span{
    text-justify:inter-word;
} */

.c-button {
    display: none;
    width: 8%;
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

.open-dialog {
    float: inline-end;
    max-width: 40%;
    max-height: 50px;
}

@media (orientation:portrait) {
    .checklist-card {
        display: block;
        width: 100%;
    }

    .c-button {
        display: block;
    }

    .open-dialog {
        box-sizing: border-box;
        width: 66%;
    }

    .task-description {
        box-sizing: border-box;
        width: 50% ;
        overflow: hidden ;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>