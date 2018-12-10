<template>
 <div class="scrollTop" v-show="showTop" @click="toTop">
    <img src="/images/top.png" />
    <p>{{ $t('links.fhdb')}}</p>
  </div>
</template>
<script>
export default {
   name: 'scrollTop',
    data (){
      return {
        scrollTop: 0,
        time: 0,
        dParams: 20,
        scrollState: 0
      }
    },
    computed:{
      showTop: function(){
        let value = this.scrollTop>400?true:false;
        return value;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop);
    },
    methods: {
      toTop(e) {
        if(!!this.scrollState){
          return;
        }
        this.scrollState = 1;
        e.preventDefault();
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let _this = this;
        this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
      },
      gotoTop(distance){
        this.dParams += 20;
        distance = distance>0 ? distance : 0;
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
        if(this.scrollTop < 10){
          clearInterval(this.time);
          this.dParams = 20;
          this.scrollState = 0;
        }
      },
      getScrollTop() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
}
</script>
<style lang="less" scoped>
.scrollTop {
  position: fixed;
  right: 40px;
  bottom: 80px;
  cursor: pointer;
  text-align: center;
  border:1px solid #ccc;
  padding:3px;
  img{
    width:40px;
    //height:32px;
  }
  p{
    font-size:12px;
    color:grey;
    padding:3px;
  }
}
@media screen and (max-width:480px){
  .scrollTop{
    display:none;
  }
}
</style>