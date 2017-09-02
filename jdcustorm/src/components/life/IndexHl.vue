<template>
    <div class="swiper-container classify">
        <ul class="swiper-wrapper">
           <indexhll key="index" :pro="n" v-for="(n,index) in wd"></indexhll>
        </ul>
    </div>

</template>

<script type="text/ecmascript-6">
    import Indexhll from  "./IndexHll.vue"
export default{
    mounted () {
        console.log('挂载好了')
        var mySwiper4 = new Swiper('.classify', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 30,
            observer:true,
            observeParents:true
        });
        console.log(mySwiper4)

    },
        components:{
            Indexhll
        },
        props:["wd"]
}
</script>

<style scoped>
    .classify ul {
        padding: 0.13rem 0 0.4rem 0.48rem;
        height: 1.03rem; }
    .classify ul li {
        width: 2.28rem;
        height: 1.03rem;
        box-shadow: 0 0 20px #ededed; }
    .classify ul li a img {
        display: block;
        width: 100%;
        height: 100%; }

</style>