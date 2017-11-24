  <template>
    <div class="login-wrap">

      <div class="top_head">
        <img src="/../../static/img/a.png" />
        <div  class="top_head_box">智能足浴系统商家后台</div>
      </div>

      <div class="login_box">
         <!-- <el-button type="primary">账号密码登陆</el-button>
         <el-button type="primary">手机号码验证登陆</el-button>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form> -->
        <div class="box">
            <el-tabs type="border-card" @tab-click="handleClick">
              <el-tab-pane label="账号密码登陆">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm form_one">
                  <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="账号"><template slot="prepend"><i class="iconfont icon-ren"></i></template></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"><template slot="prepend"><i class="iconfont icon-suomiao"></i></template></el-input>
                  </el-form-item>
                  <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="手机号验证登陆">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm  form_two">
                  <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="手机号码"><template slot="prepend"><i class="iconfont icon-ren"></i></template></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input id="vCode" type="password" v-model="ruleForm.password" placeholder="验证码"><template slot="prepend" ><i class="iconfont icon-suomiao"></i></template></el-input>
                    <el-button class="vCode_btn">获取验证码</el-button>
                  </el-form-item>
                  <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
           

            
        </div>
      </div>


      <div class="top_boom">
          <div class="one_boom_div">
            <p>客服电话111111</p>
            <p>入驻咨询222222</p>
          </div>
          <div  class="two_boom_div">33333333333333333</div>
          <img src="" />
      </div>

    </div>
  </template>
  <script>
    import md5 from 'js-md5';
    import http from '../../http/Http_base.js';
    export default {
      name: 'login',
      data () {
        return {
          ruleForm:{
            username:"",
            password:""
          },
          rules: {
              username: [
                  {required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                  {required: true, message: '请输入密码', trigger: 'blur' }
              ]
          }
        }
      },
      mounted:function(){
        
      },
      methods:{
          submitForm:function(ruleForm){
            const that = this;
            that.$refs[ruleForm].validate((valid)=>{
              if(valid){
                that.ruleForm.password = md5(that.ruleForm.password)
                var data = {};
                data['acount'] = that.ruleForm.username;
                data['password'] = that.ruleForm.password;
                data['type'] = 2;
                console.log(data);
                http.authHttp.post("http://qingnin.com/tp/Admin/Index/count",data).done(function(res) { 
                    var res = JSON.parse(res);
                    if(res.code == 0){
                        var localData = {
                            phoneNumber : data.phoneNumber,
                            type : 2,
                            password : data.password
                        };
                        localData = JSON.stringify(localData);
                        that.commonSetLocalData("mess",localData);
                        that.$router.push('/Home');
                    }else{
                        that.ruleForm.password = '';
                        that.$alert('用户名或密码错误', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {
                            console.log('sss')
                          }
                        })
                    }
                });
              }
            })          
          },
          changeTab:function(e){
            var index = $(e.target).parent("li").index();
            if(index == 0){
                $(".form_one").show();
                $(".form_two").hide();
            }else{
                $(".form_one").hide();
                $(".form_two").show();
            }
          },
          handleClick:function(tab, event){
            if(tab._uid==14){

            }else{
              
            }
            
          }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import "/../../static/css/login.css";
  @import "/../../static/css/iconfont.css";
    
  </style>
