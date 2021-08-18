import AllCountries from '../api/AllCountries'
import AllStatus from '../api/AllStatus'


export default {
    async getAllCountries({commit}){
        const response = await AllCountries.getAll()
            .then(res => {
                commit('GET_ALL_COUNTRIES', res)
            })
            .catch(
                (err) => console.log(err)
            )
        return response
    },
    async getAllStatus({commit}, payload){
        const response = await AllStatus.getAll(payload)
            .then(res => {
                console.log(res.data)
                commit('GET_ALL_STATUS', res)
            })
            .catch(
                (err) => console.log(err)
            )
        return response
    },
}