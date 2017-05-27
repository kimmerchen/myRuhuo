<template>
  <div class="overShow">
    <yd-navbar title="线上交付" class="backArr"></yd-navbar>
    <dl class="overBox">
      <dt class="overIcon">
        <div class="overDui"></div>
      </dt>
      <dd class="overTxt">签资料成功</dd>
      <!--<dd class="overTxt" v-else="flag"></dd>-->
    </dl>
    <div class="overSure">
      <router-link :to="{name: 'Into'}">
        <yd-button size="large" type="warning">确定</yd-button>
      </router-link>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'over',
    data () {
      return {

      }
    }
  }

</script>

<style scoped>
  .overShow{
    display: block;
    overflow: hidden;
    background-color:#FFF ;
  }
  .backArr{
    background-color: #fcfbf9 !important;
    color: #393939;
  }
  .overIcon{
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin: 1.8rem 2.84rem 0;
    background: url("codeShow/over_bg.png") no-repeat 0 0;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .overDui{
    display: block;
    width: 1.06rem;
    height: 0.7rem;
    margin: 0.55rem 0.37rem;
    background: url("codeShow/over_right.png") no-repeat 0 0;
    background-size: 100% 100%;
  }
  .overTxt{
    font-size: 0.42rem;
    color: #393939;
    text-align: center;
    display: block;
    padding: 0.68rem 2.7rem;
  }
  .overSure{
    padding: 0 0.32rem;
    margin: 0 0 5.58rem;
  }
</style>
