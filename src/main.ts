import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase';

import App from './App.vue'
import { router } from './router/index'
// import './assets/main.css'
import './index.css'

const app = createApp(App)
app.config.globalProperties.msg = 'hello'

app.use(createPinia())
app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.mount('#app')
