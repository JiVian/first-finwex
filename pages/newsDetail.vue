<template>
<div class="container1" v-if="isEnglish">
  <!-- 新闻标题-->
  <div class="new-title">
    <h1>{{ posts.title.rendered }}</h1>
    <span>{{ posts.date | formatDateEn}}</span>
  </div>
  <div class="new-des" v-html="posts.content.rendered">
  </div>
</div>
<div class="container1" v-else>
  <!-- 新闻标题-->
  <div class="new-title">
    <h1>{{ posts.title.rendered }}</h1>
    <span>{{ posts.date | formatDate}}</span>
  </div>
  <div class="new-des" v-html=" posts.content.rendered ">
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import {formatDate} from '../plugins/date.js'
export default {
  filters: {      //设置中文时间格式
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy年MM月dd日')
    },
    formatDateEn(time) {    //设置英文时间格式
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  head() {
    return {
      title: this.$t('news.newsTitle')
    }
  },
  layout:"news",
     data() {
      return {
        posts: [],
      }
    },
    //wordpress接口数据
    async asyncData(ctx) {
        let postsa = await ctx.$axios.get('/api/newsDetail?id='+ctx.query.id)
        console.log('postsa',postsa.data)
        return {
          posts: postsa.data
          // page: postsa.data.length + 1
        }
    },
  
  computed: {
    ...mapGetters("app", ["isEnglish"])
  },
}
</script>

<style lang="less">
@import "~@style/newsDetail";
</style>
