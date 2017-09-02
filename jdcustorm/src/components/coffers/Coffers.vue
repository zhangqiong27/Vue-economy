<template>
    <div>
    	<coffers-header></coffers-header>
        <coffers-pandect :pandect="pandect"></coffers-pandect>
        <coffers-shouyi-coupon :shouyicoupon="shouyicoupon"></coffers-shouyi-coupon>
        <fenjiexian></fenjiexian>
        <coffers-everyday></coffers-everyday>
        <fenjiexian></fenjiexian>
        <coffers-lcqn></coffers-lcqn>
        <coffers-allowance></coffers-allowance>
        <fenjiexian></fenjiexian>
        <coffers-wlcx></coffers-wlcx>
        <coffers-beijing :beijing="beijing"></coffers-beijing>
        <coffers-footer></coffers-footer>

	
    </div>
	

</template>

<script>
	
    import "../../public/js/jquery-1.8.3.min.js";
    import "../../public/js/swiper.animate1.0.2.min.js";
    import "../../public/js/swiper.js";
    import "../../public/js/coffers.js";

    import CoffersHeader from "./CoffersHeader.vue";
    import CoffersPandect from "./CoffersPandect.vue";
    import CoffersShouyiCoupon from "./CoffersShouyiCoupon.vue";
    import Fenjiexian from "./Fenjiexian.vue";
    import CoffersEveryday from "./CoffersEveryday.vue";
    import CoffersLcqn from "./CoffersLcqn.vue";
    import CoffersAllowance from "./CoffersAllowance.vue";
    import CoffersWlcx from "./CoffersWlcx.vue";
    import CoffersBeijing from "./CoffersBeijing.vue";
    import CoffersFooter from "./CoffersFooter.vue";

    import shujufetch from "../../../fetch/shujufetch.js";
    

    export default{
        components:{
            CoffersHeader,
            CoffersPandect,
            CoffersShouyiCoupon,
            Fenjiexian,
            CoffersEveryday,
            CoffersLcqn,
            CoffersAllowance,
            CoffersWlcx,
            CoffersBeijing,
            CoffersFooter 
        },
        data:function(){
           return {
                pandect:[],
                beijing:[],
                shouyicoupon:[]
                
           }
        },
        methods: {
            initData:function(){
               shujufetch.getShujuinfo((data)=>{
                    this.pandect=data.pandect;
                    this.beijing=data.beijing;
                    this.shouyicoupon=data.shouyicoupon;
                   
               })
            }
        },
        mounted: function () {
            this.initData();
        }
    }
    
</script>

<style scoped>
	@import "../../public/css/swiper.css";

</style>
