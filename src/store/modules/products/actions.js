import * as types from './mutation-types';
import api from '../../../api'

export const getProducts = ({commit}) => {
    return api.getProducts((data) => {
        commit(types.GET_PRODUCTS, data.data)
    });
};

export default {
    getProducts,
};
