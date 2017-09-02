<template>
        <div class="swiper-container" id="registerCont">
            <div class="swiper-wrapper">
                 <div class="swiper-slide concern">
                        <img src="../../public/img/dynamic_touxiang.png" alt="头像">
                        <p>暂未登录</p>
                        <a href="###">去登录</a>
                 </div>
               <div class="swiper-slide faxian">
                  <fa-xian-banner :faxainbanner="faxainbanner"></fa-xian-banner>
                  <fa-xian-main-menu :faxianmenu="faxianmenu"> </fa-xian-main-menu>
                  <fa-xian-main-banner :faxianmainbanner="faxianmainbanner" > </fa-xian-main-banner>
                  <dyn-fen-ge></dyn-fen-ge>
                  <dyn-recommen-dessay :recommenlists="recommenlists"></dyn-recommen-dessay>
                  <eassy-banner :essaybanner="essaybanner"> </eassy-banner>
                  <eassy :essaylists="essaylists"> </eassy>
              </div>
            </div>
        </div>
</template>
<script type="text/ecmascript-6">
    import FaXianBanner from "./FaXianBanner.vue";
    import FaXianMainMenu from "./FaXianMainMenu.vue";
    import FaXianMainBanner from "./FaXianMainBanner.vue";
    import DynFenGe from "./DynFenGe.vue";
    import DynRecommenDessay from "./DynRecommenDessay.vue";
    import EassyBanner from "./EassyBanner.vue";
    import Eassy from "./Eassy.vue";

    import shujufetch from "../../../fetch/shujufetch.js";

    export default {
        components:{
            FaXianBanner,
            FaXianMainMenu,
            FaXianMainBanner,
            DynFenGe,
            DynRecommenDessay,
            EassyBanner,
            Eassy
        },
        data:function(){
           return {
                faxainbanner:[],
                faxianmenu:[],
               faxianmainbanner:[],
               recommenlists:[],
               faxianmainbanner:[],
               essaybanner:[],
               essaylists:[]
           }
        },
        methods: {
            initData:function(){
               shujufetch.getShujuinfo((data)=>{
                   this.faxainbanner=data.faxainbanner;
                   this.faxianmenu=data.faxianmenu;
                   this.faxianmainbanner=data.faxianmainbanner;
                   this.recommenlists=data.recommenlists;
                   this.faxianmainbanner=data.faxianmainbanner;
                   this.essaybanner=data.essaybanner;
                   this.essaylists=data.essaylists;
//                   console.log(this.faxianmainbanner)
               })
            }
        },
        mounted: function () {
            this.initData();
        }
    }

</script>
<style scoped>
      #registerCont .swiper-wrapper .concern {
            text-align: center; }
            #main #registerCont .swiper-wrapper .concern img {
              margin-top: 27%;
              margin-left: 3.6rem;
              display: block;
              width: 3.6rem;
              height: 1.5rem; }
       #registerCont .swiper-wrapper .concern p {
              font: 700 0.36rem/1.68rem "";
              color: #999; }
       #registerCont .swiper-wrapper .concern a {
              margin-left: 3.6rem;
              display: block;
              width: 3.54rem;
              height: 1.14rem;
              border: 0.03rem solid #ddd;
              color: #999;
              font: 700 0.36rem/1.14rem "";
              border-radius: 0.2rem; }

</style>