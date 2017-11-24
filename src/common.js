
export default { 
    install(Vue, options) {
        // -------------------------------------------公共函数------------------------------------------------------

        // 存储登录信息
        Vue.prototype.change = function() {
            console.log('sssss');
        };

         // 存储登录信息
        Vue.prototype.commonSetLocalData = function(key,data) {
            localStorage.setItem(key, data);
        };
        // 获取登录信息
        Vue.prototype.commonGetLocalData = function(key) {
           
                return localStorage.getItem(key); 
        };
        
        //Vue.prototype.$layer = layer(Vue);
        // ----------------------------------------------过滤器----------------------------------------------------
        // 管理员状态
        Vue.filter("staffStatus", function(value) { //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
            if (value == 0) {
                return "正常"
            } else {
                return "禁用"
            }
        });

    }
}