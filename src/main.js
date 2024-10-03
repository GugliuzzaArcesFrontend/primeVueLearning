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

// register window doc to vue
app.config.globalProperties.window = window;

// register SessionStorage doc to vue
app.config.globalProperties.Storage = window.sessionStorage;

// register window location to vue
app.config.globalProperties.Location = window.location.href;

// register window history to vue
app.config.globalProperties.History = window.history;

// register window location to vue
app.config.globalProperties.SiteOrigin = window.location.origin;

// register window location to vue
app.config.globalProperties.LocalOrigin = window.location.href.split("?")[0];

// register window,document doc to vue
app.config.globalProperties.Document = window.document;