$(function () {
	var mySwiper1 = new Swiper('.crowdfunding_banner', {
		effect : 'coverflow',
		slidesPerView: 1.35,
		centeredSlides: true,
		loop:true,
			coverflow: {
			rotate: 10,
			stretch: -30,
			depth: 60,
			modifier: 2,
			slideShadows : true
		}
	});
	var mySwiper4 = new Swiper('.hwjs_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
})
