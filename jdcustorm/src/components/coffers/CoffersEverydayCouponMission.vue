<template>
  
		<div class="coupon_mission">
			<div class="coupon">
				<a href="#">
					<p>{{everydaycouponmission.p1}}</p>
					<span>{{everydaycouponmission.span1}}</span>
				</a>
			</div>
			<div class="mission">
				<a href="#">
					<p>{{everydaycouponmission.p2}}</p>
					<span>{{everydaycouponmission.span2}}</span>
				</a>
			</div>
		</div>

</template>

<script>

  export default{
    props:["everydaycouponmission"]
  
  }
</script>

<style scoped>
	
#everyday .coupon_mission {
  padding: 0.6rem 0.48rem;
  border-top: 0.01rem solid #eee;
  display: flex;
  justify-content: space-between; }
  #everyday .coupon_mission div {
    box-sizing: border-box;
    height: 1.2rem;
    border-right: 0.01rem solid #eee;
    flex: 0 0 50%;
    background: #fff; }
    #everyday .coupon_mission div p {
      font: 700 0.42rem/0.68rem "";
      color: #444; }
  #everyday .coupon_mission .coupon {
    padding-left: 1.65rem;
    width: 3.27rem;
    background: url("../../public/img/coffers_t4.png") no-repeat;
    background-size: 1.2rem 1.2rem; }
    #everyday .coupon_mission .coupon span {
      display: block;
      height: 0.52rem;
      background-color: #fff4dd;
      font: 500 0.24rem/0.52rem "";
      color: #f9821e;
      text-align: center; }
  #everyday .coupon_mission .mission {
    padding-left: 2.15rem;
    width: 2.77rem;
    background: url("../../public/img/coffers_t5.png") no-repeat 0.48rem 0;
    background-size: 1.2rem 1.2rem;
    border-right: 0.01rem solid #fff; }
    #everyday .coupon_mission .mission span {
      font: 600 0.3rem/0.52rem "";
      color: #999; }

</style>
