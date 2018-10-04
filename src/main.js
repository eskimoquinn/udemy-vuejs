import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus.vue'
import ServerDetails from './ServerDetails.vue'
import ServerManager from './ServerManager.vue'
import OverallStatus from './OverallStatus.vue'

Vue.component('server-status', ServerStatus)
Vue.component('server-details', ServerDetails)
Vue.component('server-manager', ServerManager)
Vue.component('overall-status', OverallStatus)

new Vue({
  el: '#app',
  render: h => h(App)
})
