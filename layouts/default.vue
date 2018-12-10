<template>
  <div>
    <my-header />
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    font-family: sans-serif,"Microsoft YaHei";
    /* color: #42505C; */
    /* color:#fff; */
  }

  /*body{*/
    /*background: #f6f7fb;*/
  /*}*/

</style>
