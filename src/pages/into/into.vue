<template>

  <div class="codeShow">

    <yd-navbar title="线上交付" class="backArr">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#f39800">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <div class="switchInfo">
      <div class="upTip">完善资料，更快线上交付</div>
      <div class="padding">
        <router-link :to="{name: 'deliveryState'}"><yd-button size="large" type="warning">补充资料</yd-button></router-link>
      </div>

    </div>

    <div class="codeBox">
      <img src="./codeShow/code.png" class="codeImg" />
      <div class="payTip">凭此码完成现场交付！</div>


    <div class="stepBox">
      <p class="stepTitle">
        领钥匙
      </p>
      <div class="stepTxtBox">
        <span class="stepXy">签协议</span>
        <span class="stepJf">预缴费</span>
        <span class="stepKey">领钥匙</span>
      </div>
      <div class="stepNum">
        <div class="stepItem stepFirst">
          <div class="stepInset">1</div>
        </div>
        <div class="line"></div>
       <div class="stepItem stepSecond">
          <div class="stepInset">2</div>
        </div>
        <div class="line"></div>
       <div class="stepItem stepThird">
          <div class="stepInset">3</div>
        </div>
      </div>
    </div>
    <!--领取一卡通提示-->
      <div class="cardTip">
        <!--业主一卡通-->
        <div class="cardHosters">
          <div class="hostItem">
            <div class="hostItemTxt">钱多多一卡通未领取</div>
          </div>
        </div>
        <!--成员一卡通-->
        <div class="cardGroup">
          <div class="cardMember">
            <div class="cardMemberTxt">
              钱豆豆一卡通审核通过！
            </div>
          </div>
        </div>

      </div>
          </div>

  </div>






</template>

<script>

export default {
  name: 'Into',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .codeShow{
    margin: auto;
  }
  .backArr{
    color: #f39800 !important;
    background-color: #fcfbf9 !important;
  }
  .switchInfo{
    margin: 0.2rem 0;
    background-color: #FFF;
  }
  .padding{
    padding:0 0.32rem 0.4rem;
  }
  .icon-arr{
    color: #f39800 !important;
  }
  .upTip{
    font-size:0.36rem;
    color:#393939;
    letter-spacing:0;
    text-align:center;
    padding: 0.4rem 1.74rem;
  }
  .codeBox{
    display: block;
    background-color: #ffffff;
  }

  .codeImg{
    width: 4rem;
    height:4rem;
    padding: 0.4rem 1.64rem 0.28rem 1.84rem;
    box-sizing: content-box;
  }
  .payTip{
    width:100%;
    height:0.32rem;
    font:0.32rem/0.32rem "微软雅黑";
    text-align: center;
    color:#f7ab38;
    margin-bottom: 0.4rem;
  }
  .stepBox{
    background: #ffffff;
    border-top:1px solid #dddbce;
    border-bottom:1px solid #dddbce;
    font-size:0;
    margin: 0 0.32rem;
  }
  .stepTitle{
    font-size:0.36rem;
    font-weight:600;
    line-height: 0.5rem;
    color:#393939;
    text-align:center;
    padding: 0.4rem 0;
  }
  .stepTxtBox{
    height:0.28rem;
    font-size: 0;


  }
  .stepTxtBox span{
    width:0.86rem;
    font-size: 0.28rem;
    line-height: 0.28rem;
  }
  .stepTxtBox .stepXy{
    margin-left: 0.39rem;
  }
  .stepTxtBox .stepJf{
    margin-left: 1.75rem;
  }
  .stepTxtBox .stepKey{
    margin-left: 1.71rem;
  }
  .stepNum{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height:0.96rem;
    margin:0.2rem 0 0.4rem;

  }
  .stepNum .stepItem{
    display: inline-block;
    width:0.96rem;
    height:0.96rem;
    vertical-align: top;
    background-size: 0.96rem 0.96rem;
  }
  .stepFirst{
    margin-left: 0.38rem;
  }
  .stepSecond{

  }
  .stepFirst,.stepThird{
    background: url("codeShow/start_outline_1.png") no-repeat 0 0;

  }
  .stepSecond{
    background: url("codeShow/start_outline_2.png") no-repeat 0 0;
  }
  .stepNum .stepItem .stepInset{
    display: block;
    width:0.74rem;
    height:0.74rem;
    margin: 0.11rem;
    background-size: 0.74rem 0.74rem;
    -webkit-background-size: 0.74rem 0.74rem;
  }
  .stepNum .stepFirst .stepInset,
  .stepNum .stepThird .stepInset
  {
    background: url("codeShow/start_1.png") no-repeat 0 0;
    background-size: 0.74rem 0.74rem;
  }
  .stepNum .stepSecond .stepInset{
    background: url("codeShow/start_2.png") no-repeat 0 0;
    background-size: 0.74rem 0.74rem;
  }
  .stepInset{
    font-size:0.36rem;
    line-height: 0.74rem;
    text-align: center;
    color:#ffffff;
  }
  .line{
    display: inline-block;
    width:1.65rem;
    height:0.02rem;
    vertical-align: top;
    background:url("codeShow/start_line.png") no-repeat 0 0;
    background-size: 100% 100%;
    margin: 0.47rem 0;
  }
  .cardTip{
    padding: 0 0.32rem;
  }
  .hostItem,
  .cardMember{
    height:0.3rem;
    font-size:0;
    margin-top: 0.3rem;
  }
  .hostItemTxt,
  .cardMemberTxt
  {
    display: inline-block;
    font-size:0.3rem;
    color:#393939;
    letter-spacing:0;
    text-align:left;
  }
  .hostItemTxt:before,
  .cardMemberTxt:before
  {
    content: '';
    display: inline-block;
    width:0.06rem;
    height:0.25rem;
    margin: 0.05rem 0.15rem 0 0;
    background:url("./codeShow/border_left.png") no-repeat 0 0;
    background-size: 100% 100%;
  }

</style>
