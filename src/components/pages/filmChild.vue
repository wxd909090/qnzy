<template>
  <div class="add" >
    <p>我是子组件</p>
    <p :id="msg"></p>
  </div>
</template>

<script>
export default {
  name: 'filmChild',
   props: {
    msg: {
        type: String,
        default: "11111111" //这样可以指定默认的值
    }
  },
  data () {
    return {
       
    }
  },
  //页面加载后获取数据请求
  mounted:function(){
    
  },
  //事件
  methods:{
     
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
