import { createApp  } from 'vue';
import './style.css';
import App from './App.vue';

import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import Lara from '@primevue/themes/lara';
import ToastService from 'primevue/toastservice';

import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios';

const app = createApp(App);

app.use(PrimeVue, { theme: { /* unstyled: true, */ preset: Aura } });
app.use(ToastService);

app.mount('#app');

app.config.globalProperties.window = window;
app.config.globalProperties.axios=axios;


