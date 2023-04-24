import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase';
import { collaboration } from './plugins/collaboration';

import App from './App.vue'
import { capps, router } from './router'
// import './assets/main.css'
import './index.css'

const app = createApp(App)
app.config.globalProperties.msg = 'hello'
app.use(collaboration, {
  backend: 'firebase',
  capps: capps
});

app.use(createPinia())
app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.mount('#app')
