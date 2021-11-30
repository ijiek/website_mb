import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import BreathingColors from 'vue-breathing-colors';

Vue.config.productionTip = false
Vue.use(BreathingColors);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
