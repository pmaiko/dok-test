import Vue from 'vue'
import App from './App.vue'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './sass/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
