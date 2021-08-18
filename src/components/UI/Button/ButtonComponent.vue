<template>
  <button class="btn-custom"
  :class="btnClass"
  :type="btnType"
  @click="handleEvent($event)"
  >{{text}}</button>
</template>

<script>
export default {
    name: 'button-component',
    props:{
        btnClass: {
            type: Array
        },
        btnType: {
            type: String,
            default: 'button'
        },
        text:{
            type: String,
            default: 'Button'
        }
    },
    methods:{
        handleEvent(ev){
            this.$emit('ClickEvent', ev)
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-custom{
    padding: 14px 18px;
    border-radius: 3px;
    background-color: transparent;
    border: none;
    text-align: center;
    display: inline-block;
    width: auto;
    margin: 0 15px;
    cursor: pointer;
    &.btn-primary{
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
}
</style>