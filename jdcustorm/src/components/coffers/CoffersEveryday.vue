<template>
    
    <section id="everyday">
		<coffers-everyday-banner :everydaybanner="everydaybanner"></coffers-everyday-banner>
		<coffers-everyday-coupon-mission :everydaycouponmission="everydaycouponmission"></coffers-everyday-coupon-mission>		
	</section>

</template>

<script>
	

    import CoffersEverydayBanner from "./CoffersEverydayBanner.vue";
    import CoffersEverydayCouponMission from "./CoffersEverydayCouponMission.vue";

    import shujufetch from "../../../fetch/shujufetch.js";
 
    export default{
        components:{
            CoffersEverydayBanner,
            CoffersEverydayCouponMission
      
        },
        data:function(){
           return {
                everydaybanner:[],
                everydaycouponmission:[]
                
                
           }
        },
        methods: {
            initData:function(){
               shujufetch.getShujuinfo((data)=>{
                    this.everydaybanner=data.everydaybanner;
                    this.everydaycouponmission=data.everydaycouponmission;
                   
                   
               })
            }
        },
        mounted: function () {
            this.initData();
        }
    }
    
</script>

<style scoped>
	

</style>
