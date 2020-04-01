<template>
  <div class="home">
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
            <h3>热爱生活</h3>
            <p class="sub-heading">Do what you want to do. </p>
            <!-- <button>探索</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div>
        <div class="title">推荐文章</div>
          <el-carousel :interval="5000" indicator-position="none" type="card" arrow="always" class="d_jump" :height="bannerHeight + 'px'">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.idView" alt />
            <div class="min_title">{{item.name}}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <div class="title">最新文章</div>
        <div class="card">
          <img src="https://img.debuginn.cn/wp-content/uploads/2020/03/google-chrome-2020.jpeg" alt="">
          <div class="text">程序员的插件推荐<br><span>Chrome 浏览器插件提高工作效率</span></div>
        </div>
        <div class="card">
          <img src="https://img.debuginn.cn/wp-content/uploads/2020/03/google-chrome-2020.jpeg" alt="">
          <div class="text">程序员的插件推荐<br><span>Chrome 浏览器插件提高工作效率</span></div>
        </div>
        <div class="card">
          <img src="https://img.debuginn.cn/wp-content/uploads/2020/03/google-chrome-2020.jpeg" alt="">
          <div class="text">程序员的插件推荐<br><span>Chrome 浏览器插件提高工作效率</span></div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import LeftNav from '@/components/LeftNav.vue'

export default {
  name: 'Home',
  components: {
    LeftNav
  },
  data(){
    return{
     // 图片需要引入, 否则无法显示
        imgList: [
          {id: 0, name: '程序员chrome插件推荐', idView: require('../assets/images/banner3.jpg')},
          {id: 1, name: 'vue引入框架UI的方法', idView: require('../assets/images/banner2.jpg')},
          {id: 2, name: '数组倒序遍历方法', idView: require('../assets/images/banner1.jpg')}
        ],
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
.music{
  width: 1rem;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.min_title{
  width: 85%;
  color: rgb(255, 255, 255);
  font-size: .056rem;
  /* font-weight: bolder; */
  text-align: left;
  margin-top: .02rem;
  margin-left: .03rem;
  letter-spacing:.002rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.header
{
	background: #444 url(../assets/images/banner.jpg);
	/* background-attachment: fixed;  背景滚动*/
	background-repeat: no-repeat; 
	background-size: cover;
	background-position: center;
}

.headerColor
{
  background: rgba(0, 0, 0, 0.4);
  font-size: .07rem;
  margin: 0;
}

.nav
{
	background: transparent;
	height: .2rem;
}

#banner
{
	background: transparent;/*透明*/
	height: 1.2rem;
}

.nav .logo,.nav .active
{
  line-height: .2rem;
  margin-right: .1rem;
  cursor:pointer;
}

.active,.logo
{
	color: #fff;
}

.logo i{
  margin: 0 .05rem;
}

.nav .logo
{
	float: left;
}
.nav .active
{
  float: right;
}

#banner .inner 
{
	max-width: 1rem;
	text-align: center;
	margin: 0 auto;
	position: relative;
	top: 0.15rem;
	color: white;
}

#banner .inner h3 
{
	margin: 0;
	padding: .06rem;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
}

.recommend{
  margin: 0 .9rem;
}

.recommend .title{
  font-size: .08rem;
  text-align: left;
  font-weight: bolder;
  margin: .08rem 0;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 0.6rem;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: rgba(69,137,148,.9);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: rgba(69,137,148,.9);
  }

  .card{
  border-radius: 8px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  color: #000;
  background-color: #fff;
  position:relative;
  margin-bottom: .1rem;
}

img{
  width: 100%;
  display: block;
}

.text{
  text-align: left;
  padding: .12rem .08rem .08rem .08rem;
  font-size: .08rem;
  color: #fff;
  background: rgba(0,0,0,.2);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

.text span{
  font-size: .05rem;
}

</style>
