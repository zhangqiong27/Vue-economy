$(function() {
	var mySwiper1 = new Swiper('.treasure_banner', {
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed:2000,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper2 = new Swiper('.jjjx_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper3 = new Swiper('.baoxian_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper4 = new Swiper('.tslc_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper5 = new Swiper('.tjyd_banner1', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper6 = new Swiper('.tjyd_banner2', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
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
});
