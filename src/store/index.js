import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import products from './modules/products'

const store = new Vuex.Store({
    modules: {
        products,
    },

    strict: process.env.NODE_ENV !== 'production'
});

export default store
