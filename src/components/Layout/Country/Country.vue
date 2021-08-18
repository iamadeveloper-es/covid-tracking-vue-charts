<template>
  <div class="country"
  @click="goToCountryDetail()"
  >
        <span>{{country.Country}}</span>
      </div>
</template>

<script>
export default {
    props:{
        country: Object,
        id: Number
    },
    methods:{
        goToCountryDetail(){
            this.$router.push({ name: 'CountryDetail', params: { id: this.country.Slug} })
        }
    }
}
</script>

<style>

</style>