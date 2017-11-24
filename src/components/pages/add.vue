<template>
  <div class="add" >
  
    <el-table :data="tableData" border  style="width: 100%" >
        <el-table-column label="门店名称" prop="a">
        </el-table-column>
        <el-table-column label="创建日期"  prop="b">
        </el-table-column>
        <el-table-column label="门店管理员"  prop="c">
        </el-table-column>
    </el-table>

  <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>





  </div>
</template>

<script>

import http from '../../http/Http_base.js'
export default {
  name: 'add',
  data () {
    return {
        pageNumber:0,
        tableData:[],
        currentPage1:1
    }
  },
  //页面加载后获取数据请求
  mounted:function(){
    this.getData(1);
  },
  //事件
  methods:{
     
     handleCurrentChange(val) {
        this.getData(val);
        console.log(`当前页: ${val}`);
     },
    getData:function(num){
      var that = this;
      var newData = {};
      newData['page'] = num;
      http.authHttp.post("http://qingnin.com/tp/Admin/Index/page",newData).done(function(res) { 
          
          var res = JSON.parse(res);
          if(res.code == 0){
              that.pageNumber = res.page*10;
              var arr = [];
              arr.push(res);
              that.tableData = arr;
          }else{
              that.$alert('用户名或密码错误', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  console.log('sss')
                }
              })
          }
      });
    }
  },
  //计算属性
  computed:{
      
  },
  //实时监听
  watch: {
     
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add{
    width:100%;
    height:100%;
  }
</style>
