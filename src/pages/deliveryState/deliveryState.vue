<template>
  <div class="stepBox">
    <yd-navbar title="办理交付" class="backArr">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#f39800">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="stepPerson">
      <div class="avatar">业主</div>
      <div class="avatarRight">
        <p class="hostersName">钱多多</p>
        <div class="hostAddr">
          <span class="hostAddrKey">地址:</span>
          <span class="hostAddrval">万科金域华府1栋101</span>
        </div>
      </div>
    </div>
    <div class="stepProcess">
      <div class="processTitle">
        <div class="processTxt">
          请您选择完成的步骤！
        </div>
      </div>
      <div class="processForm">
        <div class="processItem">
          <div class="itemIcon">
            <input type="radio" name="key" id="info"/>
            <i class="icon"></i>
          </div>
          <label for="info">签资料</label>
        </div>
        <div class="processItem">
          <div class="itemIcon">
            <input type="radio" name="card" id="qianBao1"/>
            <i class="icon"></i>
          </div>
          <label for="qianBao1">发放钱宝宝一卡通</label>
        </div>
        <div class="processItem">
          <div class="itemIcon">
            <input type="radio" name="card" id="qianBao2"/>
            <i class="icon"></i>
          </div>
          <label for="qianBao2">发放钱宝宝一卡通</label>
        </div>
        <div class="processItem">
          <div class="itemIcon">
            <input type="radio" name="card" id="qianBao3"/>
            <i class="icon"></i>
          </div>
          <label for="qianBao3">发放钱宝宝一卡通</label>
        </div>
        <div class="processItem">
          <div class="itemIcon">
            <input type="radio" name="card" id="money"/>
            <i class="icon"></i>
          </div>
          <label for="money">预交物业费</label>
        </div>
        <div class="processItem">
          <div class="itemIcon">
            <input type="radio" name="card" id="key"/>
            <i class="icon"></i>
          </div>
          <label for="key">领钥匙</label>
        </div>
      </div>
      <router-link :to="{name: 'over'}">
        <yd-button size="large" type="warning">确定</yd-button>
      </router-link>


    </div>

  </div>

</template>

<script>
  export default {
    name: 'deliveryState',
    data () {
      return {
        radio4: '啊啊啊'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stepBox {
    margin: auto;
  }

  .backArr {
    color: #f39800;
    background-color: #fcfbf9 !important;
  }

  .stepPerson {
    display: block;
    padding: 0 0.32rem;
    margin: 0 0 0.2rem;
    background: #FFF;

  }

  .avatar {
    width: 0.96rem;
    height: 0.96rem;
    border-radius: 50%;
    font-size: 0.36rem;
    background-color: #f7ab38;
    line-height: 0.96rem;
    text-align: center;
    color: #FFF;
    margin: 0.24rem 0.2rem 0.24rem 0;
    display: inline-block;
    box-sizing: content-box;
    vertical-align: top;
  }

  .avatarRight {
    display: inline-block;
    width: 5.33rem;
    vertical-align: top;
  }

  .avatarRight .hostersName {
    margin-top: 0.27rem;
    font-size: 0.32rem;
    color: #393939;
    line-height: 0.32rem;
    text-align: left;
  }

  .stepProcess {
    background: #FFF;
    padding: 0.4rem 0.32rem;
  }

  .processTitle {
    display: block;
    font-size: 0;
  }

  .processTxt {
    display: inline-block;
    font-size: 0.3rem;
    color: #393939;
    letter-spacing: 0;
    text-align: left;
  }

  .processTxt:before {
    content: '';
    display: inline-block;
    width: 0.06rem;
    height: 0.25rem;
    margin: 0.05rem 0.15rem 0 0;
    background: url("./codeShow/border_left.png") no-repeat 0 0;
    background-size: 100% 100%;
  }

  .processForm {
    margin-top: 0;
  }

  .processItem {
    height: 0.48rem;
    margin-top: 0.6rem;
  }

  .itemIcon {
    position: relative;
    display: inline-block;
    width: 0.48rem;
    height: 0.48rem;
    vertical-align: top;

  }

  .itemIcon input[type='radio'] {
    width: 0.48rem;
    height: 0.48rem;
  }

  .itemIcon i {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.48rem;
    height: 0.48rem;
  }

  .processItem label {
    display: inline-block;
    height: 0.32rem;
    vertical-align: top;
    font-size: 0.32rem;
    color: #393939;
    text-align: left;
  }

  .hostAddr {
    width: 6.05rem;
    font-size: 0.24rem;
    color: #909090;
    line-height: 0.24rem;
    text-align: left;
    margin-top: 0.28rem;
  }

  .hostAddrKey {
    display: inline-block;
    width: 0.72rem;
    text-align: left;
    vertical-align: top;
  }

  .hostAddrval {
    display: inline-block;
    width: 4.61rem;
    text-align: left;
    vertical-align: top;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }


</style>
