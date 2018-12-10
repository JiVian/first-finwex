<template>
  <div class="content">
    <left/>
    <right/>
  </div>
</template>

<script>
  import Left from './Left'
  import Right from './Right'
  export default {
    data: function () {
      return {
        indexabout: this.about
      }
    },
    components: {
      Left,
      Right
    }
  }
</script>

<style lang="less" scoped>
  .content{
    padding-top:24px;
    margin: 0 auto;
    width: 1080px;
    &::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  .right{
    float:right;
  }

</style>
