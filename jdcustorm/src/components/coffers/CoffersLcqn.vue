<template>
    
   <section id="lcqn"> 
        <coffers-lcqn-product :product="product"></coffers-lcqn-product>
        <Coffers-Lcqn-Banner :lcqnbanner="lcqnbanner"></Coffers-Lcqn-Banner>
    </section>

</template>

<script>
	

    import CoffersLcqnProduct from "./CoffersLcqnProduct.vue";
    import CoffersLcqnBanner from "./CoffersLcqnBanner.vue";

    import shujufetch from "../../../fetch/shujufetch.js";
 
    export default{
        components:{
            CoffersLcqnProduct,
            CoffersLcqnBanner
      
        },
        data:function(){
           return {
                product:[],
                lcqnbanner:[]
                 
           }
        },
        methods: {
            initData:function(){
               shujufetch.getShujuinfo((data)=>{
                    this.product=data.product;
                    this.lcqnbanner=data.lcqnbanner;
                   
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
