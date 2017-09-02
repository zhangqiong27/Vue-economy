<template>
	<div class="swiper-container gdxx_b">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="n in treagdxx1">
					<p>{{n.p}}</p>
					</li>
				</ul>
			</div>
</template>

<script type="text/ecmascript-6">
    export default{
       props:["treagdxx1"],
       updated:function(){
       var mySwiper7 = new Swiper('.gdxx_b', {
		autoplay: 3000,
		direction: 'vertical',
		slidesPerView: 'auto',
		loop: true,
		speed: 1000,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});

       }
      
    }
</script>
<style scoped>
   .gdxx_b {
      height: 1.03rem; }
       .gdxx_b ul {
        height: 1.03rem; }
          .gdxx_b ul li {
          height: 1.03rem; }
           .gdxx_b ul li p {
            font: 700 0.38rem/1.03rem "";
            color: #999;
            height: 1.03rem; }
 </style>

