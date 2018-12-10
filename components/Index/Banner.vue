<template>
  <div class="banner-container">
    <div class="banner">
      <div class="banner-item fbi" v-on:click="change('finwex20')" v-bind:class="{'index-select':selectIndex=='finwex20'}">
        <img class="banner-item-img" src="../../assets/img/FWX20.png" alt="">
        <div class="banner-index">
            <p>FINWEX20</p>
            <h1>{{ banner.synthesis.nowIndex }}</h1>
            <div>
              <h3>{{banner.synthesis.rise? '+' : '-'}} {{banner.synthesis.rate }}% </h3>
              <img v-if="banner.synthesis.rise" class="banner_arrow" src="../../assets/img/arrow_w.png">
              <img v-else class="banner_arrow" src="../../assets/img/arrow_d.png">
            </div>
        </div>
      </div>

      <div class="banner-item fvi banner-conent" v-on:click="change('finwex11')" v-bind:class="{'index-select':selectIndex=='finwex11'}">
        <img class="banner-item-img" src="../../assets/img/FWX11.png" alt="">
        <div class="banner-index">
          <p>FINWEX11</p>
          <h1>{{ banner.hedge.nowIndex }}</h1>
          <div>
            <h3>{{banner.hedge.rise? '+' : '-'}} {{banner.hedge.rate }}% </h3>
            <img v-if="banner.hedge.rise" class="banner_arrow" src="../../assets/img/arrow_w.png">
            <img v-else class="banner_arrow" src="../../assets/img/arrow_d.png">
          </div>
        </div>
      </div>

      <div class="banner-item fei" v-on:click="change('finwex20bias')" v-bind:class="{'index-select':selectIndex=='finwex20bias'}">
        <img  class="banner-item-img" src="../../assets/img/fwb20.png" alt="">
        <div class="banner-index">
          <p>FINWEX20 BIAS</p>
          <h1>{{ banner.surprise.nowIndex }}</h1>
          <div>
            <h3>{{banner.surprise.rise? '+' : '-'}} {{banner.surprise.rate }}% </h3>
            <img v-if="banner.surprise.rise" class="banner_arrow" src="../../assets/img/arrow_w.png">
            <img v-else class="banner_arrow" src="../../assets/img/arrow_d.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        banner: {
          synthesis: {},
          surprise: {},
          hedge: {}
        },
        selectIndex: 'finwex20'
      }
    },
    computed: mapState([
      'counter'
    ]),
    async mounted() {
      let res = await this.$axios.$get('/api/banner_index')
      this.banner = res
    },
    methods: {
      change(index) {
        this.$store.dispatch('changeIndex', { index_type: index })
        this.$store.dispatch('getAboutIndex', {indexType: index})
        this.selectIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  $width : 1080px;
  .banner-container{
    min-width: 1110px;
    background: #F3F7FB;
    height:150px;
    margin: 0 auto;
  }
  .banner{
    height:124px;
    margin: 0 auto;
    width: $width;
    padding: 13px 0px 13px 0px;
    .banner-item{
      cursor:pointer;
      width: 350px;
      height: 124px;
      float:left;
      border-radius: 10px;
      .banner-item-img{
        width: 120px;
        margin: 10px;
        float:left;
        margin-top: 8px;
      }
      .banner-index{
        width: 200px;
        height:100px;
        display: inline-block;
        float:left;
        p{
          margin-top: 10px;
          font-size: 14px;
          font-family: DINAlternate-Bold;
          letter-spacing: 0;
          text-align: left;
        }
        h1{
          font-family: DINAlternate-Bold;
          font-size: 36px;
          letter-spacing: 0;
          text-align: left;
          margin-top: 10px;
        }
        div{
          margin-top: 10px;
          h3{
            font-family: DINAlternate-Bold;
            font-size: 18px;
            letter-spacing: 0;
            text-align: left;
            float:left;
          }
          .banner_arrow{
            width: 13.6px;
            height:20.6px;
            float:left;
            margin-left: 15px;
          }
        }
      }
    }
  }
  .banner-conent{
    margin: 0px 15px 0px 15px;
  }
  /*.fbi{*/
    /*background: -webkit-linear-gradient(#F8A37E,#F0764D); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(#F8A37E,#F0764D); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(#F8A37E,#F0764D); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(#F8A37E,#F0764D);*/
  /*}*/

  /*.fvi{*/
    /*background: -webkit-linear-gradient(#BB67F0,#9E42ED); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(#BB67F0,#9E42ED); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(#BB67F0,#9E42ED); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(#BB67F0,#9E42ED);*/
  /*}*/

  .fei{
    /*background: -webkit-linear-gradient(#1E7DE2,#3A96E7); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(#1E7DE2,#3A96E7); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(#1E7DE2,#3A96E7); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(#1E7DE2,#3A96E7);*/
    margin-right: 0;
  }

  .fei:hover, .fbi:hover, .fvi:hover{
    background: #fff;
  }
  .index-select{
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
    border-radius: 10px;
  }
</style>
