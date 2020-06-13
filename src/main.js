import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/index';
import store from './store';

window.$ = window.jQuery = require('jquery');
require('owl.carousel');

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/dist/js/bootstrap'
import './sass/app.scss'

Vue.config.productionTip = false;
new Vue({
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
