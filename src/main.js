import { createApp  } from 'vue';
import App from './App.vue';

import './style.css';
import 'primeicons/primeicons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(PrimeVue, { theme: { /* unstyled: true, */ preset: Aura } });
app.use(ToastService);


app.mount('#app');

app.config.globalProperties.window = window;
// app.config.globalProperties.axios=axios;
//app.config.globalProperties.
