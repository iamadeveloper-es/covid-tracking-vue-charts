import Api from "./Api.js";

//const ALL_COUNTRIES = '/countries';

export default {
    getAll(payload){
        const action = `/total/country/${payload}`;
        return Api.get(action)
    }
} 
