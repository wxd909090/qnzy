<template>
	 <div class="sidebar">
          <el-menu :default-active="openSliderIndex"  :unique-opened="singelOpen" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
              <el-submenu index="2">
                  <template slot="title">
                    首页
                  </template>
                  <el-menu-item index="ab">门店列表</el-menu-item>
                  <el-menu-item index="add">门店添加</el-menu-item>
                  <el-menu-item index="pro">门店管理员</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title">
                  员工管理
                  </template>
                  <el-submenu index="d">
                     <template slot="title">记录统计</template>
                     <el-menu-item index="aaa">选项1</el-menu-item>
                  </el-submenu>
              </el-submenu>
              <el-submenu index="4">
                  <template slot="title">
                  角色管理
                  </template>
                  <el-menu-item index="film">电影管理</el-menu-item>
                  <el-menu-item index="filmXf">电影先锋</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                  <template slot="title">
                  客户管理
                  </template>
                  <el-menu-item index="userList">用户列表</el-menu-item>
                  <el-menu-item index="userAssess">用户评价</el-menu-item>
                  <el-menu-item index="statistics">用户分析</el-menu-item>
              </el-submenu>
              <el-submenu index="6">
                  <template slot="title">
                  项目管理
                  </template>
                  <el-menu-item index="commonSet">公共设置</el-menu-item>
              </el-submenu>
              <el-submenu index="7">
                  <template slot="title">
                  活动管理
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
              <el-submenu index="8">
                  <template slot="title">
                  卡券管理
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
              <el-submenu index="9">
                  <template slot="title">
                  订单管理
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                  <template slot="title">
                  包间管理
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
              <el-submenu index="11">
                  <template slot="title">
                  排班管理
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
              <el-submenu index="12">
                  <template slot="title">
                  日志管理
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
              <el-submenu index="13">
                  <template slot="title">
                  营业日报
                  </template>
                  <el-menu-item index="activities">优惠码活动</el-menu-item>
                  <el-menu-item index="groupBuy">团购码活动</el-menu-item>
              </el-submenu>
               <el-menu-item index="groupBuy">门店设置门店</el-menu-item>
          </el-menu>
    </div>
</template>

<script>
	export default {
    // 页面加载之后发起数据请求
    created () {
      var self = this;
      //获得当前url
      self.getUrlName();
    },
    data () {
      return {
        openSliderIndex : "",
        // 只能同时打开一个菜单
        singelOpen : true
      }
    },
		methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        getUrlName (){
          var self = this;
          self.openSliderIndex = "ab";
        }
    },
	}
</script>

<style >
	 /*侧边栏导航*/
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
        overflow-x:hidden;
        overflow-y:scroll;
    }
    .sidebar > ul {
        overflow:hidden;
    }
    .slider-icon {
      margin-right: 5px
    }
    .el-submenu{
      border-bottom:1px solid #052558;
    }
</style>