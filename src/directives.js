
export default{
    install(Vue,options)
    {
        // 注册一个全局自定义指令 二维码生成
        Vue.directive('qrCode', {
            // 当绑定元素插入到 DOM 中。
            update: function(el,val) {
                $(el).html("");
                $(el).qrcode(val.value);
                $(".qrCodeWrap canvas").css({
                    height: "100%",
                    marginLeft: "25%"
                })
            }
        })
    }
}