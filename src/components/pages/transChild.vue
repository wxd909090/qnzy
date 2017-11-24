<template>
  <div class="add" >
      <p>我是子组件</p>
      <p>{{childmsg}}</p>
  </div>
</template>

<script>

export default {
  name: 'transChild',
  props: {
    childmsg: {
        type: String,
        default: "" //这样可以指定默认的值
    }
  },
  data () {
    return {
        
    }
  },
  //页面加载后获取数据请求
  mounted:function(){
    console.log(this.childmsg);
  },
  //事件
  methods:{
     
  },
  //计算属性
  computed:{
      
  },
  //实时监听
  watch: {
     'childmsg':function(newVal,oldVal){
        console.log(111);
        console.log(newVal);
        console.log(oldVal);
        console.log(111);
     }
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
