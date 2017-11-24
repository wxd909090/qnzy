<template>
  <div id="app">
      <!-- 头部导航 -->
      <v-head v-on:listenToChildEvent="showMsgFromChild"></v-head>
      <v-slider></v-slider>
      <div class="content" id="content">
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
      </div>
      <v-pass :childMs="aaa"></v-pass>
  </div>

</template>

<script>
    import vHead from './Header.vue';
    import vSlider from './Slider.vue';
    import vPass from './ChangePassword.vue';

    export default {
        data: function (){
            return {
              active:true,
              activeIndex: '1',
              activeIndex2: '1',
              name: '',
              add:{},
              aaa:false
            }
        },
        created:function(){
          const aaa = this.$loading({
            fullscreen: true,
            text:"拼命加载中..."
          });

          setTimeout(function(){
              aaa.close()
          },1000)
        },
        mounted:function(){

        },
        components:{
            vHead,vSlider,vPass
        },
        methods:{
          showMsgFromChild:function(data){
            console.log(data);
            if(data==2){
              if(!!this.commonGetLocalData('changePassword') && this.commonGetLocalData('changePassword') == 1){
                  this.commonSetLocalData('changePassword',2);
                  this.aaa = 2
              }else{
                  this.commonSetLocalData('changePassword',1);
                  this.aaa = 1
              }
              
            }
          }
        },
        watch:{
          '$route.path':function (to, from) {
              console.log('sss');
              console.log(to);
              console.log(from);
          }
        }
  }
</script>

<style>
    body{margin: 0;}
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    /* 主内容区 */
    main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px;  border: solid 1px #E9ECF1;  background-color: #FCFCFC;  }
    main .main-left{text-align: center;width: 200px;float: left;}
    main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
    main .el-menu{background-color: transparent!important;}
    .content{
      position: absolute;
      top:70px;
      left:200px;
    }
</style>

