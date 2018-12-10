<template>
  <div class="leftCalen">
    <div>
      <div class="left-title">
        <span @click="changeYear('-')" class="smallHand"> < </span>
        <span class="num-year">{{ year }}</span>
        <span @click="changeYear('+')" class="smallHand"> > </span>
      </div>
      <ol v-if="isEnglish">
        <li v-for="monthItem in monthsListEn" v-bind:key="monthItem.monthNum" :class="{ active1: monthItem.monthNum === month }" class="smallHand" @click="thisMonth(monthItem.monthNum)">
          {{ monthItem.monthsText }}
        </li>
      </ol>
      <ol  v-else>
        <li v-for="monthItem in monthsList" v-bind:key="monthItem.monthNum" :class="{ active1: monthItem.monthNum === month }" class="smallHand" @click="thisMonth(monthItem.monthNum)">
          {{ monthItem.monthsText }}
        </li>
      </ol>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import getDate from 'date-fns/get_date'
import getYear from 'date-fns/get_year'
import getMonth from 'date-fns/get_month'
import addYears from 'date-fns/add_years'
import setMonth from 'date-fns/set_month'

export default {
  props: ['date'],
  data() {
    return {
      monthsList: [
        {monthsText: '1月', monthNum: 0 },
        { monthsText: '2月', monthNum: 1 },
        { monthsText: '3月', monthNum: 2 },
        { monthsText: '4月', monthNum: 3 },
        { monthsText: '5月', monthNum: 4 },
        { monthsText: '6月', monthNum: 5 },
        { monthsText: '7月', monthNum: 6 },
        { monthsText: '8月', monthNum: 7 },
        { monthsText: '9月', monthNum: 8 },
        { monthsText: '10月', monthNum: 9 },
        { monthsText: '11月', monthNum: 10 },
        { monthsText: '12月', monthNum: 11 }
        ],
      monthsListEn: [
        {monthsText: 'Jan', monthNum: 0 },
        { monthsText: 'Feb', monthNum: 1 },
        { monthsText: 'Mar', monthNum: 2 },
        { monthsText: 'Apr', monthNum: 3 },
        { monthsText: 'May', monthNum: 4 },
        { monthsText: 'Jun', monthNum: 5 },
        { monthsText: 'Jul', monthNum: 6 },
        { monthsText: 'Aug', monthNum: 7 },
        { monthsText: 'Sept', monthNum: 8 },
        { monthsText: 'Oct', monthNum: 9 },
        { monthsText: 'Nov', monthNum: 10 },
        { monthsText: 'Dec', monthNum: 11 }
      ],   
    }
  },
  computed:{
    year: function(){
      return getYear(parse(this.date));
    },
    month: function(){
       return getMonth(parse(this.date));
     },
    day: function(){
       return getDate(parse(this.date));
     },
     ...mapGetters("app", ["isEnglish"]) 
  },
  methods: {
    thisMonth(val) {
      const current = parse(this.date)
      let next
      next = setMonth(current, val)
      this.$emit('change', format(next, 'YYYY/MM'))
    },
    changeYear(val) {
      const current = parse(this.date)
      let next
      if (val === '+') {
        // this.year += 1
        next = addYears(current, 1)
      } else if (val === '-') {
        // this.year -= 1
        next = addYears(current, -1)
      } else {
        // console.log('传入参数错误')
        next = new Date()
      }
      this.$emit('change', format(next, 'YYYY/MM'))
    }
  }
}
</script>
<style>
.active1 {
  background-color: #F12C8D;
}
.smallHand {
  cursor: pointer;
  line-height:29px;
  font-size:12px;
}
.left-title{
  line-height:50px;
  font-size:12px;
}
.num-year{
  padding:0 17px;
}
.leftCalen{
  width:105px;
  height:410px;
  background-color: #2A2929;
  color:#fff;
}
</style>