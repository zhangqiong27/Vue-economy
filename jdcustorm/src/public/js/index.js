$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed:2000,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
});
