<template>
  <div class="trans" >
    <button @click="changeMsg">点我</button> 
    <p>我是父组件</p> 
    <v-child :childmsg="msg"></v-child>
  </div>
</template>

<script>
import vChild from './transChild.vue';
export default {
  name: 'trans',
  data () {
    return {
       msg:"hello child"
    }
  },
  //页面加载后获取数据请求
  mounted:function(){
    
  },
  //事件
  methods:{
     changeMsg:function(){
        this.msg = "小贱";
     }
    
  },
  //计算属性
  computed:{
      
  },
  //实时监听
  watch: {
     
  },
  components:{
    vChild
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
