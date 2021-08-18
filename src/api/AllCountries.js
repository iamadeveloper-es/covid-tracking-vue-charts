import Api from "./Api.js";

//const ALL_COUNTRIES = '/countries';

export default {
    getAll() {
        const action = '/countries';
        return Api.get(action)
    },
} 

