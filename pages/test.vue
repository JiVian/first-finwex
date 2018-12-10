<template>
<div class="app" >
  <!-- 导航 -->
  <div class="nav" id="box_action_translateYOut">
    <div  class="nav_box" v-for="(item,index) in product" :class="{'navActive':currentIndex === index}" >
      <div></div>
      <a :href="'#'+item">{{item}}</a>
    </div>
  </div>
  <div id="导航一" class="one" ref="scrollOne">
    内容一
  </div>
  <div id="导航二" class="two" ref="scrollTwo">
    内容二
  </div>
  <div id="导航三"  class="three" ref="scrollThree">
    内容三
  </div>
  <div id="导航四" class="four" ref="scrollFour">
    内容四
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      product: ["导航一", "导航二", "导航三", "导航四"]
    };
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop);
      this.navShow = scrollTop;
      let oneHeight = this.$refs.scrollOne.offsetHeight;
      console.log("oneHeight", oneHeight);
      let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight;
      let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight;
      if (scrollTop > 0) {
        this.currentIndex = 0;
      }
      if (scrollTop > 100) {
        this.currentIndex = 1;
      }
      if (scrollTop > oneHeight) {
        this.currentIndex = 2;
      }
      if (scrollTop > twoHeight) {
        this.currentIndex = 3;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.app {
  height: 2500px;
  .nav,
  .navEn {
    width: 112px;
    height: 252px;
    position: fixed;
    top: 10%;
    right: 2%;
    z-index: 99;
    transition: all 1s ease;
    .nav_box {
      display: flex;
      margin-bottom: 15px;
      position: relative;
      cursor: pointer;
      div {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: rgba(103, 171, 225, 1);
        margin-right: 9px;
        margin-top: 2px;
      }
      a {
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #67abe1;
        text-decoration: none;
      }
    }
    .nav_box::after {
      content: "";
      width: 2px;
      height: 21px;
      background-color: rgba(103, 171, 225, 1);
      position: absolute;
      left: 2.4%;
      //top:5%;
      bottom: 94%;
    }
    .nav_box:nth-child(1)::after {
      content: "";
      width: 0;
      height: 0;
      background-color: rgba(103, 171, 225, 1);
      position: absolute;
      left: 4%;
      //top:5%;
      bottom: 10%;
    }
    .navActive {
      display: flex;
      margin-bottom: 15px;
      cursor: pointer;
      div {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-image: linear-gradient(-90deg, #4242f6 3%, #1e99f9 99%);
        margin-right: 9px;
        margin-top: 2px;
      }
      a {
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #4146f6;
        text-decoration: none;
      }
    }
  }
  .one {
    height: 600px;
    background-color: orange;
  }
  .two {
    height: 600px;
    background-color: pink;
  }
  .three {
    height: 600px;
    background-color: skyblue;
  }
  .four {
    height: 600px;
    background-color: orange;
  }
}
//让导航出现的时候有个过渡出现的动画
#box_action_translateYOut {
  animation: box_action_translateYOut 5s;
}
@keyframes box_action_translateYOut {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  50% {
    transform: translateY(15px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0x);
    opacity: 1;
  }
}

</style>