<template>
  <div class="add" >
    <p>来自子组件的图</p>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'pro',
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
