<template>
    <div>
         <dyn-header :dynlogo="dynlogo"></dyn-header>
		 <dyn-main></dyn-main>
         <dyn-footer></dyn-footer>
    </div>
</template>
<script type="text/ecmascript-6">
     import DynHeader from "./DynHeader.vue";
     import DynMain from "./DynMain.vue";
     import DynFooter from "./DynFooter.vue";
     import shujufetch from "../../../fetch/shujufetch.js";
     export default {
        components:{
           DynHeader,
           DynMain,
           DynFooter
        } ,
         data:function(){
            return {
                 dynlogo:""
            }
         },
         methods: {
             initData:function(){
                shujufetch.getShujuinfo((data)=>{
                    this.dynlogo=data.dynlogo;
                })
             }
         },
         created: function () {
             this.initData();
         }
     }
</script>
<style scoped>

</style>


