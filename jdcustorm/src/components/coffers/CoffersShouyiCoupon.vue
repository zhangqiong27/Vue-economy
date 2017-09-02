<template>
    
	<section id="shouyi_coupon" class="clear">
    <div class="shouyi">
      <p>{{shouyicoupon.p1}}</p>
      <span>{{shouyicoupon.span1}}</span>
    </div>
    <div class="coupon">
      <p>{{shouyicoupon.p2}}</p>
      <span>{{shouyicoupon.span2}}</span>
    </div>
  </section>

</template>

<script>

  export default{
    props:["shouyicoupon"]
  
  }
</script>

<style scoped>
	
#shouyi_coupon {
  padding: 0.44rem 0.48rem 0.38rem;
  display: flex;
  justify-content: space-between; }
  #shouyi_coupon div {
    text-align: center;
    box-sizing: border-box;
    width: 4.91rem;
    height: 1.13rem;
    border-right: 0.01rem solid #eee;
    flex: 0 0 50%;
    background: #fff; }
    #shouyi_coupon div p {
      font: 700 0.42rem/0.62rem "";
      color: #cba76d; }
    #shouyi_coupon div span {
      font: 600 0.32rem/0.52rem "";
      color: #999; }
  #shouyi_coupon .coupon {
    border-right: 0.01rem solid #fff; }
</style>
