<template>
  <div class="search-bar">
      <h2>{{title}}</h2>
      <input type="text" 
      v-model="search"
      @keyup="handleEvent($event)"
      :placeholder="placeHolder"
      >
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props:{
        placeHolder: String,
        title: String
    },
    data(){
        return{
            search: ''
        }
    },
    methods:{
        handleEvent(){
            this.$emit('SearchEvent', this.search)
        }
    }
}
</script>

<style>

</style>