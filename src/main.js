import { createApp  } from 'vue';
import './style.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';

import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(PrimeVue, { theme: { /* unstyled: true, */ preset: Lara } });
app.use(ToastService);

app.mount('#app');

app.config.globalProperties.window = window;


