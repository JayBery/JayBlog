<template>
  <div class="nav">
    <div class="navTop">
      <div class="colorUse">
        <div class="close" @click="sendMsg">×</div>
        <div class="headImg">
          <img src="../assets/images/5.jpg" alt="">
        </div>
        <div class="signTitle">JayBerg小窝</div>
        <div class="sign">随你的心做你想做的事</div>
      </div>
    </div>
    <div class="navMain">
      <router-link tag="div" to="/">
        <div class="item">
          <i class="el-icon-s-home"></i>
          回到首页
        </div>
      </router-link>
      <router-link tag="div" to="/file">
        <div class="item">
          <i class="el-icon-s-order"></i>
          文章归档
        </div>
      </router-link>
      <!-- <router-link tag="div" to="/myRoom">
        <div class="item">
          <i class="el-icon-s-promotion"></i>
          个人空间
        </div>
      </router-link> -->
      <router-link tag="div" to="/about">
        <div class="item">
          <i class="el-icon-s-custom"></i>
          关于作者
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  props: {
    
  },
  data(){
    return{
      actvieNav: false
    }
  },
  methods:{
    sendMsg(){
        //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
        this.$emit('func',this.actvieNav)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  font-size: 18px;
  height: 100vh;
  width: 280px;
  background:#545c64;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.navTop{
  background-image: url("../assets/images/banner2.jpg");
  background-position-x: center;
  background-position-y: center;
  background-size: 280px 200px;
}

.nav .colorUse{
  background: rgba(0, 0, 0, 0.4);
  padding-bottom: 30px;
  padding-top: 20px;
}

.nav .close{
  float: right;
  color: #ffffff;
  margin-right: 16px;
  font-size: 24px;
  font-weight:100;
  cursor:pointer;
}

.nav .headImg img{
  height: 80px;
  width: 80px;
  border-radius: 80px;
  overflow: hidden;
  margin-left: 20px;
}

.nav .signTitle{
  color: #ffffff;
  font-size: 22px;
  text-align: left;
  margin-top: .06rem;
  margin-left: 20px;
}

.nav .sign{
  color: rgb(197, 197, 197);
  font-size: 14px;
  text-align: left;
  margin-left: 20px;
}

.nav .navMain{
  color: #ffffff;
  text-align: left;
  font-size: 16px;
}

.nav .navMain .item{
  padding: 25px 0 0 22px;
  cursor:pointer;
}

.nav .navMain .item i{
  margin-right: 16px;
  color: #ffd04b;
}
</style>
