<template>
   
		<div class="swiper-container everyday_banner">
			<ul class="swiper-wrapper">
				<li class="swiper-slide">
					<a href="#">
						<img :src="everydaybanner.src" :alt="everydaybanner.alt">
					</a>
				</li>
				<li class="swiper-slide">
					<a href="#">
						<img :src="everydaybanner.src" :alt="everydaybanner.alt">
					</a>
				</li>
				<li class="swiper-slide">
					<a href="#">
						<img :src="everydaybanner.src" :alt="everydaybanner.alt">
					</a>
				</li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>


</template>

<script>

  export default{
		props:["everydaybanner"],
		updated:function () {
			var mySwiper2 = new Swiper('.everyday_banner', {
				autoplay: 3000,
				pagination: '.swiper-pagination',
				loop: true,
				speed:2000,
				autoplayDisableOnInteraction: false,
				observer:true,
				observeParents:true
			});
		}
	
		
  
  }
</script>
<style scoped>
	
#everyday .everyday_banner ul {
  width: 100%;
  height: 2.4rem; }
  #everyday .everyday_banner ul li a img {
    display: block;
    width: 100%;
    height: 2.4rem; }


</style>
