import axios from 'axios'
import {API_URL} from "../constants";

export default {
    getProducts(callback) {
        return axios.get(`${API_URL}/b/5ee40fa82f5fd957fda915f1`)
            .then((data) => {
                callback(data);
            })

            .catch((error) => {
                callback(error.response);
            });
    }
}
