<template>
    <section id="main">
        <menus :menus="menus"></menus>
        <fenjie></fenjie>
        <zichan :zichan="zichan"></zichan>
        <zichan2 :zichan2="zichan2"></zichan2>
        <fenjie></fenjie>
        <fuli1 :fuli1="fuli1"></fuli1>
        <fenjie></fenjie>
        <fuli2 :fuli2="fuli2"></fuli2>
        <beijing :bei="bei"></beijing>
    </section>
</template>
<script type="text/ecmascript-6">
    import menus from "./menus.vue";
    import fenjie from "./fenjie.vue";
    import zichan from "./zichan.vue";
    import zichan2 from "./zichan2.vue";
    import fuli1 from "./fuli1.vue";
    import fuli2 from "./fuli2.vue";
    import beijing from "./beijing.vue";
    import shujufetch from "../../../fetch/shujufetch.js";
    import "../../../src/public/js/personaldetils.js";
    export default{
        components:{
            menus,
            fenjie,
            zichan,
            zichan2,
            fenjie,
            fuli1,
            fenjie,
            fuli2,
            beijing
        },
        data:function(){
            return{
                menus:[],
                zichan:[],
                zichan2:[],
                bei:[],
                fuli1:[],
                fuli2:[]
            }
        },
        methods:{
            initData:function(){
                shujufetch.getShujuinfo((data)=>{
                    this.menus=data.zichan;
                    this.zichan=data.zichan;
                    this.zichan2=data.zichan2;
                    this.bei=data.bei;
                    this.fuli1=data.fuli1;
                    this.fuli2=data.fuli2;
                })
            }
        },
        created:function(){
            this.initData();
        }
    }
</script>
<style scoped>

    #main {
        padding-top: 1.64rem;
        margin-bottom: 1.5rem; }
</style>