  <template>
    <div class="hello">
      <p>123</p>
    </div>
  </template>
  <script>
    export default {
      name: 'hello',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    *{
      padding:0px;
      margin:0px;
    }
    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .one_input{
    width:100%;
    min-height: 36px;
    border:1px solid #ccc;
    box-sizing:border-box;
  }
  </style>
