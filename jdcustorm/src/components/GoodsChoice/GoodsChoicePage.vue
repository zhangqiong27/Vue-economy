<template>
    <div>
         <goods-header></goods-header>
         <goods-list :prolists="prolists" ></goods-list>
         <goods-footer></goods-footer>
    </div>
</template>
<script type="text/ecmascript-6">
 import GoodsHeader from "./GoodsHeader.vue";
 import GoodsList from "./GoodsList.vue";
 import GoodsFooter from "./GoodsFooter.vue";
 import shujufetch from "../../../fetch/shujufetch.js";

    export default {
     components:{
               GoodsHeader,
               GoodsList,
               GoodsFooter
            },
     data:function(){
        return {
             prolists:[]
        }
     },
     methods: {
        initData:function(){
            shujufetch.getShujuinfo((data)=>{
                console.log("1")
                this.prolists=data.goodschiocelists;
                console.log(this.prolists)
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