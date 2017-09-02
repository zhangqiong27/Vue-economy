<template>
  <div class="baoxian">
			<h2>有保障 更安心</h2>
			<div class="swiper-container baoxian_banner">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="n in treabaoxian">
						<a href="#">
							<h3>{{n.h3}}</h3>
							<img :src="n.pic" alt="n.auth">
							<p>{{n.p}}</p>
							<h4>{{n.h4}}</h4>
						</a>
					</li>					
				</ul>
			</div>
		</div>
</template>

<script type="text/ecmascript-6">
    export default{
       props:["treabaoxian"]
,
     updated:function(){
    var mySwiper3 = new Swiper('.baoxian_banner', {
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 30,
    observer:true,
    observeParents:true
  });

     }
    }
</script>
<style scoped>
 .baoxian h2 {
    padding-left: 0.48rem;
    font: 700 0.42rem/1.3rem "";
    color: #333; }
  .baoxian .baoxian_banner ul {
    padding: 0.2rem 0 0.49rem 0.49rem; }
    .baoxian .baoxian_banner ul li {
      padding: 0.37rem  0.5rem 0.71rem 0.5rem;
      width: 3.15rem;
      height: 3.07rem;
      box-shadow: 0 0 20px #ededed; }
      .baoxian .baoxian_banner ul li a {
        text-align: center; }
        .baoxian .baoxian_banner ul li a h3 {
          font: 700 0.38rem/1.14rem "";
          color: #444; }
        .baoxian .baoxian_banner ul li a img {
          display: block;
          width: 3.15rem;
          height: 0.08rem; }
        .baoxian .baoxian_banner ul li a p {
          font: 600 0.36rem/1.11rem "";
          color: #888; }
      
        .baoxian .baoxian_banner ul li a h4 {
          font: 700 0.5rem/0.74rem "";
          color: #27b288; }

 </style>

