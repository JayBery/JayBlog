<template>
  <div class="home">
    <!-- <div class="home">
      <el-button type="danger">危险按钮</el-button>
    </div> -->
    <div class="header">
      <div class="headerColor">
        <div class="nav">
          <div class="logo">
            <i class="el-icon-s-operation"></i>
            JayBerg
          </div>
          <div class="active"><i class="el-icon-search"></i></div>
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
  </div>
    
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scope>


.header
{
	background: #444 url(../images/banner.jpg);
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

</style>
