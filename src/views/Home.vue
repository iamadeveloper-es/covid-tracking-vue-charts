<template>
  <div class="home">
    <search-bar
    @SearchEvent="search = $event"
    :title="'Search Countries'"
    :placeHolder="'Search...'"
    ></search-bar>
    <div class="countries"
      v-if="getAllCountriesArr"
    >
      <country
        v-for="(country, index) in searchCountries"
        :key="country.slug"
        :country="country"
        :id="index"
      ></country>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Country from '../components/Layout/Country/Country.vue'
import SearchBar from '../components/UI/SearchBar/SearchBar.vue'
export default {
  name: 'Home',
  components: {
    SearchBar,
    Country
  },
  data(){
    return{
      search: ''
    }
  },
  computed:{
    ...mapGetters(['getAllCountriesArr']),
    searchCountries(){
      return this.getAllCountriesArr.filter((item) => {
        return item.Country.toLowerCase().trim().match(this.search.toLowerCase().trim())
      })
    }
  },
  async created(){
    const response = await this.$store.dispatch('getAllCountries')
    return response
    
  }
}
</script>
