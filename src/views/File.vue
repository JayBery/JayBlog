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
            <h3>文章归档</h3>
            <p class="sub-heading">Archiving articles. </p>
            <!-- <button>探索</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="timeLine">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
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
  .about .header{
    background: #444 url(../assets/images/banner2.jpg);
    /* background-attachment: fixed;  背景滚动*/
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center;
  }
  .timeLine{
    margin: .2rem auto;
    width: 2.4rem;
    text-align: left;
  }
  .timeLine .el-timeline{
    font-size: .032rem;
  }
  .timeLine .el-timeline .el-timeline-item .el-timeline-item__wrapper .el-timeline-item__content .el-card__body{
    padding: .06rem;
  }
</style>
