<template>
<div class="container">
  <div class="info">
    您的姓名：<input type="text" v-model.trim="name" placeholder="请输入您的姓名" ><br>
    <p>您的姓名是：{{ name }}</p>
    您的联系方式：<input type="text" v-model.trim="number" placeholder="请输入您的联系方式" maxlength=11>
    <p>您的联系方式是：{{ number }}</p>
    <button type="submit" @click="greet">提交</button>
    <!-- <button type="submit">1111</button> -->
  </div>
</div>
  
</template>
<script>
import { mapGetters } from "vuex";
  export default {
    name: 'scrollTop',
    data() {
      return {
          name:"",
          number:""
      }
    },
    methods: {
      async greet() {
        //1.输入完，点击提交显示弹出框
        if(this.name === '' ){
          alert("您好，姓名不能为空")
        }else if(this.number === ''){
          alert("您好，联系方式不能为空")
        }else if(this.name !== this.name.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g)){
          alert("您好，请填写正确的姓名格式，以英文或者汉字组成")
        }else if(this.number !== this.number.replace(/[^\d]/g,'')){
          alert("您好，请填写正确的联系方式格式，以数字组成")
        }else{
          alert("亲爱的"+ this.name+"，感谢您的参与，Finwex工作人员会在12小时内联系您！")
        }
        //2.点击完 页面刷新
        //this.$router.go(0)
        // let summitUser = await this.$axios.post('/api/submit',{name:this.name,mail:this.number})
        // console.log(summitUser)
      }
    },
  }
</script>
<style lang="less" scoped>
  .container{
    height:1000px;
    .info{
      width:500px;
      font-size: 20px;
      line-height: 40px;
      background-color: skyblue;
      margin: 0 auto;
      color: #eee;
    }
    button{
      display: block;
      width:100px;
      height:30px;
      margin: 0 auto;
    }
  }
</style>