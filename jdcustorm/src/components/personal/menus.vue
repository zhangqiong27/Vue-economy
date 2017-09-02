<template>
    <div class="menu">
        <saoma :saoma="saoma"></saoma>
        <lunbo1 :lunbo1="lunbo1"></lunbo1>
    </div>
</template>
<script type="text/ecmascript-6">
    import shujufetch from "../../../fetch/shujufetch.js";
    import saoma from "./saoma.vue";
    import lunbo1 from "./lunbo1.vue";
    export default{
        components: {
            saoma,
            lunbo1
        },
        data:function(){
            return{
                saoma:[],
                lunbo1:[]
            }
        },
        methods:{
            initData:function(){
                shujufetch.getShujuinfo((data)=>{
                    this.saoma=data.saoma;
                    this.lunbo1=data.lunbo1;
                })
            }
        },
        created:function(){
            this.initData();
        }
    }
</script>
<style scoped>
    .menu {
        padding: 0 0.48rem 0.18rem; }
</style>