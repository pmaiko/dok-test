import * as types from './mutation-types';
import api from '../../../api'

export const getProducts = ({commit}) => {
    return api.getProducts((data) => {
        commit(types.GET_PRODUCTS, data.data)
    });
};

export const sortProducts = ({dispatch, commit, getters}) => {
    let products = [...getters.products];

    if (products.length > 0) {
        commit(types.SORT_PRODUCTS, products.sort(() => Math.random() - 0.5));
    }

    else {
        dispatch('getProducts').then(() => {
            commit(types.SORT_PRODUCTS, products.sort(() => Math.random() - 0.5));
        });
    }
};

export default {
    getProducts,
    sortProducts,
};
