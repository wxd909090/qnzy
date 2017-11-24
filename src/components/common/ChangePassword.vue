<template>
    <div>
        <el-dialog title="修改密码" v-model="ch" :show-close="aaa">
            <p>修改面膜</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="ch = false">取 消</el-button>
                <el-button type="primary" @click="ch = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
	export default {
        props: {
            childMs: ""
        },
        data: function (){
            return {
              	ch:false ,
                aaa:false 
            }
        },
        method:{
            
        },
        watch:{
            childMs:function(newValue,oldValue){

                if(newValue == 1){
                    this.ch = true;
                }else if(newValue == 2){
                    this.ch = true;
                }
            }
        }
  }
</script>

<style>
	/* 头部导航 */
    .header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;background-color: #242f42;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);}
    .header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
    .header .el-menu-demo{padding-left: 300px!important;}
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:200px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>