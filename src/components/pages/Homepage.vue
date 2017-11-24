<template>
  <div class="Homepage" id="Homepage">

    <!-- 操作按钮组 -->
    <div class="radioWrap">
        <el-radio class="radio" v-model="radio" label="1">使用中的门店</el-radio>
        <el-radio class="radio" v-model="radio" label="2">禁用中的门店</el-radio>
    </div>

    <!-- 显示门店的表格 -->
    <el-row>
      <el-col :span="24">
        <el-table v-loading.body="loading" element-loading-text="拼命加载中" :data="storeDataSelect" height="300" border >
            <el-table-column label="门店名称">
              <template scope="scope">
                <span>{{ scope.row.store_name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="创建日期">
              <template scope="scope">
                <span>{{ scope.row.create_time }}</span>
              </template>
            </el-table-column>
            <el-table-column label="门店管理员">
              <template scope="scope">
                <span>{{ scope.row.staff_name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button size="" type="text" @click="handleAddDevice(scope.$index,scope.row)">进入门店</el-button>
                <el-button size="" type="text" @click="handleEditor(scope.$index,scope.row)">编辑门店信息</el-button>
              </template>
            </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!-- 添加设备模板 -->
     <el-dialog title="设备管理" v-model="dialogFormVisible2" size="tiny" top="100px">
      <div class="deviceWrap">
          <div v-for = "(device,index) in allDeviceArr" v-bind:key="index" class="text item deviceItem">
          {{(index + 1) + ' . ' + device}}
              <el-button style="float:right" type="danger" @click="deletDevice(device,index)">删除</el-button>
          </div>
          <div class="deviceFooter">
              <el-input v-model="deviceInput" placeholder="请输入内容" class="deviceInput"></el-input><el-button class="addDeviceBtn" type="success" @click="addDevice()">添加</el-button>
          </div>
      </div>
    </el-dialog>


    <!-- 编辑门店模板 -->
    <el-dialog title="门店信息编辑" v-model="dialogFormVisible" size="tiny" top="100px">
      <el-form :model="editorStoreForm"  ref="editorStoreForm" label-width="100px" class="demo-ruleForm editorStoreForm">
          <el-form-item label="门店名称：" prop="store_name">
              <el-input type="text" v-model="editorStoreForm.store_name" auto-complete="off" placeholder="请输入门店名称"></el-input>
          </el-form-item>
          <el-form-item label="门店地址：" prop="address">
              <el-input type="text" v-model="editorStoreForm.address" auto-complete="off" placeholder="请输入门店地址" v-on:blur="addressBlur(editorStoreForm.address)"></el-input>
          </el-form-item>
          <el-form-item label="纬度坐标：" prop="path_x">
              <el-input type="number" v-model="editorStoreForm.path_x" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="精度坐标：" prop="path_y">
              <el-input type="number" v-model="editorStoreForm.path_y" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="省份：" prop="province">
              <el-input type="text" v-model="editorStoreForm.province" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="城市：" prop="city">
              <el-input type="text" v-model="editorStoreForm.city" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="地区：" prop="district">
              <el-input type="text" v-model="editorStoreForm.district" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="大门设备：" prop="region">
              <el-select v-model="editorStoreForm.imei" placeholder="请选择大门imei">
                  <el-option v-for="device in deviceArr" v-bind:label="device.imei" v-bind:value="device.imei" :key="device.imei"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="二维码：" prop="qr_code">
              <el-row>
                  <el-col :span="12">
                      <el-input type="text" v-model="qrCodeInput" auto-complete="off" :disabled="qrCodeEdi"></el-input>
                  </el-col>
                  <el-col :span="11" :offset="1">
                      <el-button type="primary" @click="changQrCode">更换</el-button>
                  </el-col>
              </el-row>
              <el-row>
                  <div v-qrCode="editorStoreForm.qr_code" class="qrCodeWrap"></div>
              </el-row>
          </el-form-item>
          <el-form-item label="门店状态：" prop="status">
              <template>
                  <el-radio class="radio" v-model="editorStoreForm.status" label="0">正常</el-radio>
                  <el-radio class="radio" v-model="editorStoreForm.status" label="1">禁用</el-radio>
              </template>
          </el-form-item>
          <el-form-item label="门店描述：" prop="info">
              <el-input type="textarea" v-model="editorStoreForm.info"></el-input>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitEditor()">确 定</el-button>
      </div>
    </el-dialog>
   


    
                    




  </div>
</template>

<script>

import http from '../../http/Http_base.js'
export default {
  name: 'Homepage',
  data () {
    return {
        // 存放所有门店信息
            storeListData: [],
            // 默认选择使用的门店
            radio: '0',
            // 初始化等待动画
            loading: false,


            // 创建表格显示的数据数组
            storeDataSelect : [],
            // 初始化编辑门店
            dialogFormVisible: false,
            formLabelWidth: '120px',
            // 初始化编辑门店信息
            editorStoreForm : '',
            // 初始化大门可用设备数组
            deviceArr : [],


            // 初始化所有设备数组
            allDeviceArr : [],
            // 初始化设备管理模板隐藏
            dialogFormVisible2: false,
            // 初始化设备添加input框
            deviceInput : "",
            // 初始化添加设备的门店sn
            deviceStoreSn : "",

            // 编辑门店默认不能修改二维码
            qrCodeEdi : true,
            qrCodeType : "",
            qrCodeInput : "",
       

    }
  },
  //页面加载后获取数据请求
  mounted:function(){
    this.getInfo();
  },
  methods:{
      //点击更换二维码
      changQrCode (){
          var self = this;
          self.qrCodeEdi = false;
      },
      //点击编辑门店
      handleEditor:function(index,row) { 
          console.log(row);          
          var self = this;
          self.qrCodeEdi = true;
          self.dialogFormVisible = true;
          // 浅拷贝传进来的值
          self.editorStoreForm = JSON.parse(JSON.stringify(row));
          // // 转化二维码data
          if(self.editorStoreForm.qr_code)
          {
              self.qrCodeInput = JSON.parse(self.editorStoreForm.qr_code).data;
          }
          else
          {
              self.qrCodeInput = '';
          }
          // 获得未绑定的设备
          self.getUnbind(row,self);
          // $('#qrcode').qrcode("http://www.jq22.com")
      },
      // 获得门店未绑定的设备
      getUnbind (row,self) {
          var data = {
              store_sn : row.store_sn
          };
          http.authHttp.post("https://ft.qnbar.cn/test/api/projector/getUnbind",data).done(function(res) { 
              if(res.code == 0){
                  self.deviceArr = res.data
                  if(row.imei != ''){
                      self.deviceArr.unshift({imei : row.imei})
                  }
              }else{
                  self.$alert(res.msg, '提示');
              }
          });
      },
      // 得到门店信息
      getInfo:function(){
        var self = this;
        self.loading = true;
        var data = {};
        // ajax请求
        http.authHttp.post("https://ft.qnbar.cn/test/api/store/getStoreInfo",data).done(function(res) { 
            console.log(res);
            // 关闭等待动画
            self.loading = false;
            if(res.code == 0){
              
                // 将返回的数据放到storeListData
                self.storeListData = res.data;
                // 默认显示使用中的门店
                self.storeDataSelect = self.usingStores;
                //console.log(self.storeDataSelect);
            }else{
                self.$alert(res.msg, '提示');
            }
        });
      },
      // 点击打开添加设备模板
        handleAddDevice:function(index,row){
 

            var self = this;
            // 获取门店所有设备
            self.allDeviceArr = row.device;
            // 获取门店sn
            self.deviceStoreSn = row.store_sn;
            
            // 清空添加设备input
            self.deviceInput = "";

            // 显示设备管理模板
            self.dialogFormVisible2 = true;
        },
        // 删除设备
        deletDevice:function(device,index){
            debugger;
            var self = this;
            self.$confirm('是否删除改设备?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var data = {
                    imei : device,
                    store_sn : self.deviceStoreSn
                }
                http.authHttp.post("https://ft.qnbar.cn/test/api/projector/del",data).done(function(res) { 
                    if(res.code == 0){
                        self.dialogFormVisible = false;
                        // 清空添加设备input
                        self.deviceInput = "";
                        self.allDeviceArr.splice(index,1)
                        self.$message({type: 'success',message: '删除设备成功！!'});
                    }else{
                        self.$alert(res.msg, '提示');
                    }
                });
            }).catch(() => {
                self.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        }
  },
  computed:{
      // 使用中的门店
      usingStores : {
        get:function(){
          var arr = [];
          var storeListData = this.storeListData;
          for(var q = 0;q < storeListData.length;q++){
              if(storeListData[q].status == 0){
                  arr.push(storeListData[q])
              }
          }
          return arr;
        },
        set:function(value){
          this.storeListData = value;   
        }
      },
      // 禁用的门店
      forbidStores : {
          get:function(){
              var arr = [];
              var storeListData = this.storeListData;
              for(var q = 0;q < storeListData.length;q++){
                  if(storeListData[q].status == 1){
                      arr.push(storeListData[q])
                  }
              }
              return arr;
          },
          set:function(value){
              this.storeListData = value;   
          }
      }

  },
  // 监听
  watch: {
      // 监听查看使用中的门店还是禁用的门店
      radio : function (newValue,oldValue) {
          if(newValue == 2){
              this.storeDataSelect = this.forbidStores
          }else{
              this.storeDataSelect = this.usingStores
          }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.storeList .el-table th{
  text-align: center
}
.storeList .el-table td{
  text-align: center
}
.storeList .radioWrap{
  margin-top:20px;
}
.storeList .addStoreBtn{
  margin-left:10px;
}
.storeList .addStoreBtn a{
  color:#fff;
}
.storeList .el-table_1_column_1 .cell,.storeList .el-table_1_column_3 .cell{
  text-align: left
}


/*添加设备*/
.text {
    font-size: 14px;
}
.item {
    padding: 18px 0;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.box-card {
    width: 480px;
}
.deviceItem{
    height:36px;
    padding:0;
    line-height:36px;
    margin-top:10px;
    font-size:16px
}
.deviceWrap{
    width:80%;
    margin:0 auto;
}
.deviceFooter{
    margin-top:20px;
}
.deviceInput{
    width: 60% !important;
}
.addDeviceBtn{
    float:right !important;
}

.qrCodeWrap{
    height:100px;
    margin-top:22px
}
.qrCodeWrap canvas{
    height: 100%;
    margin-left: 35%;
}
.storeListTable{ 
    margin-top:20px;
    min-width:1000px;
    max-width:1300px;
}
</style>
