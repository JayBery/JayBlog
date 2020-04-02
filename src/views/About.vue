<template>
  <div class="about">
    <transition name="fade">
      <LeftNav v-if="showNav" @func="getMsgFormSon"></LeftNav>
    </transition>
    <div class="header">
      <div class="headerColor">
        <div class="nav">
          <div class="logo" @click="openNav">
            <i class="el-icon-s-operation"></i>
            JayBerg
          </div>
          <div class="active">
            <i class="el-icon-headset" @click="dialogTableVisible = true"></i>
            <el-dialog title="播放音乐" :visible.sync="dialogTableVisible">
                <iframe class="music" frameborder="no" border="0" marginwidth="0" marginheight="0" width=260 height=86 src="//music.163.com/outchain/player?type=2&id=1299557101&auto=1&height=66"></iframe>
            </el-dialog>
          </div>
        </div>
        <div id="banner">
          <div class="inner">
            <h3>关于我</h3>
            <p class="sub-heading">About me. </p>
            <!-- <button>探索</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      JayBerg
      <img src="../assets/images/head.jpg" alt="">
      <p>
        不善交际，高冷boy
        <br><br>会vue,微信小程序,node.js等项目开发
        <br><br>在校开发了个请假系统实现方便同学请假
        <br><br>平时在学校工作室肝一些企业项目修BUG
        <br><br>爱听音乐跟朋友玩玩游戏
        <br><br>很喜欢旅游但没钱去以后再说
        <br><br>热爱运动偶尔踢踢足球
        <br><br>球技菜就算了还受伤进医院真是憨憨
        <br><br>时而幼稚时而正经
        <br><br>朋友不多真心几个足矣
      </p>
    </div>
    <div class="table">
        <el-table :data="tableData" :border="true" size="mini" style="width: 380px;margin: 0 auto">
          <el-table-column
            prop="date"
            label="Platform"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            label="ID"
            width="140">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Address">
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'

export default {
  name: 'about',
  components: {
    LeftNav
  },
  data(){
    return{
        // 图片父容器高度
        bannerHeight: 1000,
        // 浏览器宽度
        screenWidth: 0,
        showNav: false,
        dialogTableVisible: false,
        tableData: [{
            date: 'GitHub',
            name: '@JayBery',
            address: 'https://github.com/JayBery'
          }, {
            date: 'WeChat',
            name: 'flayang6570',
            address: 'none'
          }, {
            date: 'Email',
            name: '754626536@qq.com',
            address: 'none'
          }, {
            date: 'QQ',
            name: '754626536',
            address: 'none'
          }]
    }
  },
   methods: {
    setSize() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (426 / 1920) * this.screenWidth;
    },
    openNav() {
      this.showNav = true
    },
    getMsgFormSon(data){
      this.showNav = data
    }
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
    this.screenWidth = window.innerWidth;
    this.setSize();
    };
  }
}
</script>

<style scope>
  .main{
    font-size: .1rem;
    margin-top: .1rem;
  }

  .main img{
    width: .6rem;
    height: .6rem;
    margin: 0 auto;
    margin-top: .04rem;
  }
  .main p{
    font-size: .05rem;
    /* line-height:.2rem; */
  }

  .table{
    margin-top: .3rem;
  }
</style>
