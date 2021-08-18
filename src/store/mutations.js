import moment from "moment";

export default {
    GET_ALL_COUNTRIES(state, res){
        state.counties = res.data
    },
    GET_ALL_STATUS(state, res){
        state.countryAllStatus = res.data

        state.countryAllStatus.forEach(d => {
            const date = moment(d.Date, "YYYYMMDD").format("MM/DD/YYYY");
            const {
                Confirmed,
                Active,
                Deaths,
                Recovered
            } = d

            state.arrConfirmed.push({date, total: Confirmed})
            state.arrPositive.push({date, total: Active})
            state.arrDeath.push({date, total: Deaths})
            state.arrRecovered.push({date, total: Recovered})
        });
        
    },
}