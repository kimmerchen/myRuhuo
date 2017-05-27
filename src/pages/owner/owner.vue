<template>
  <div class="">
       <mt-field label="username" placeholder="Input username" v-model="username"></mt-field>
      <mt-field label="email" placeholder="Input email" type="email"></mt-field>
      <mt-field label="password" placeholder="Input password" type="password"></mt-field>
      <mt-field label="phone" placeholder="Input tel" type="tel"></mt-field>
      <button @click="clickNext()">133</button>
      <moduleFooter></moduleFooter>
  </div>
  
</template>

<script type="">
import moduleFooter from '@/components/moduleFooter/moduleFooter'
export default {
  
  name: 'owner',
  data () {
    return {
      username: "",
      email: "",
      password: "23",
      phone: ""
    }
  },
  components:{moduleFooter},
  methods: {
    clickNext() {
       var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2';
                   
       this.$http.post(url, {
           
       }, {
           // 需要配置一下
           emulateJSON: true
       }).then(function(res) {
           console.log(res);
       });
    //    this.$http.post(
    // 'http://example.com', 
    // // 请求体重发送数据给服务端
    // {
    //     cat: 1,
    //     name: 'newBook'
    // },{
    //     'headers': {
    //         'Content-Type': 'x-www-form-urlencoded'
    //     }
    // }).then(function () {
    //     // 成功回调
    // }, function () {
    //     // 失败回调
    // });


    } //clickNext
  }  //methods
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

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
