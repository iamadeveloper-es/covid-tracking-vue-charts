const getAllCountriesArr = state => {
    return state.counties
}

const filterCountries = state => search => {
    return state.counties.filter((item) => {
        return item.Country.match(search)
    })
}

const getAllCountryStatus = state => {
    return state.countryAllStatus
}

const getConfirmed = state => {
    return state.arrConfirmed
}

const getPositive = state => {
    return state.arrPositive
}

const getDeaths = state => {
    return state.arrDeath
}

const getRecovered = state => {
    return state.arrRecovered
}

const confirmedChartColors = state => {
    return state.confirmedChartColors
}

const positiveChartColors = state => {
    return state.positiveChartColors
}

const deathsChartColors = state => {
    return state.deathsChartColors
}

const recoveredChartColors = state => {
    return state.recoveredChartColors
}


export default {
    getAllCountriesArr,
    filterCountries,
    getAllCountryStatus,
    getConfirmed,
    getPositive,
    getDeaths,
    getRecovered,
    confirmedChartColors,
    positiveChartColors,
    deathsChartColors,
    recoveredChartColors
}