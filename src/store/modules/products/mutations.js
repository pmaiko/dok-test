import * as types from './mutation-types';

export default {
    [types.GET_PRODUCTS] (state, payload) {
        state.products = payload;
    },

    [types.SORT_PRODUCTS] (state, payload) {
        state.newProducts = payload;
    }
};
