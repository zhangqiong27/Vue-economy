<template>
    
    <section id="allowance">
        <h2>零用钱很方便</h2>
        <div class="swiper-container allowance_banner">
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <div class="contents_t">
                        <div class="contents">
                            <a href="#">
                                <p>还信用卡</p>
                                <span>去还款</span>
                            </a>
                        </div>
                        <div class="contents">
                            <a href="#">
                                <p>还白条</p>
                                <span>去设置</span>
                            </a>
                        </div>
                    </div>
                    <div class="contents_b">
                        <div class="contents">
                            <a href="#">
                                <p>手机充值</p>
                                <span>极速到账</span>
                            </a>
                        </div>
                        <div class="contents">
                            <a href="#">
                                <p>转账</p>
                                <span>免手续费</span>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="swiper-pagination"></div>
        </div>
    </section>

</template>

<script type="text/ecmascript-6">
	


    
</script>

<style scoped>
	
    #allowance h2 {
  padding: 0 0.48rem;
  font: 700 0.44rem/1.32rem "";
  color: #444; }
  
#allowance .allowance_banner ul li .contents_t {
  border-bottom: 0.01rem solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0; }
  #allowance .allowance_banner ul li .contents_t div:nth-child(1) {
    background: url("../../public/img/coffers_t6.png") no-repeat 0.48rem 0;
    background-size: 1.2rem 1.2rem; }
  #allowance .allowance_banner ul li .contents_t div:nth-child(2) {
    background: url("../../public/img/coffers_t7.png") no-repeat 0.48rem 0;
    background-size: 1.2rem 1.2rem; }
#allowance .allowance_banner ul li .contents_b {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0 0.5rem; }
  #allowance .allowance_banner ul li .contents_b div:nth-child(1) {
    background: url("../../public/img/coffers_t8.png") no-repeat 0.48rem 0;
    background-size: 1.2rem 1.2rem; }
  #allowance .allowance_banner ul li .contents_b div:nth-child(2) {
    background: url("../../public/img/coffers_t9.png") no-repeat 0.48rem 0;
    background-size: 1.2rem 1.2rem; }
#allowance .allowance_banner ul li .contents {
  box-sizing: border-box;
  height: 1.2rem;
  border-right: 0.01rem solid #eee;
  flex: 0 0 50%;
  background: #fff;
  width: 5.4rem;
  padding-left: 2.15rem; }
  #allowance .allowance_banner ul li .contents p {
    font: 700 0.42rem/0.68rem "";
    color: #444; }
  #allowance .allowance_banner ul li .contents span {
    font: 600 0.3rem/0.52rem "";
    color: #bc9c69; }

</style>
