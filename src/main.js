import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '/src/plugins/router/router.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faGear, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faGear, faCircleHalfStroke)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
