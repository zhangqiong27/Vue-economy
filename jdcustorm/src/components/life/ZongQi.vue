<template>
    <div>
        <index></index>
        <indexbanner :wl="wl"></indexbanner>
        <indexcl :list1="list"></indexcl>
        <indexdl :wa="wa"></indexdl>
        <indexeh></indexeh>
        <indexfl :wb="wb"></indexfl>
        <indexgl :wc="wc"></indexgl>
        <indexhl :wd="wd"></indexhl>
        <indexil></indexil>
        <indexeh></indexeh>
        <indexjl :we="we"></indexjl>
        <indexkl :wf="wf"></indexkl>
        <indexil></indexil>
        <indexeh></indexeh>
        <indexll :wg="wg"></indexll>
        <indexml :wh="wh"></indexml>
        <indexeh></indexeh>
        <indexnl :wi="wi"></indexnl>
        <indexol :wj="wj"></indexol>
        <indexeh></indexeh>
        <indexpl :wk="wk"></indexpl>
        <indexql :wm="wm"></indexql>
        <indexeh></indexeh>
        <indexrl :wn="wn"></indexrl>
        <indexsl :wo="wo"></indexsl>
        <indexeh></indexeh>
        <indextl :wp="wp"></indextl>
        <indexul :wq="wq"></indexul>
        <indexvl></indexvl>
        <indexwl></indexwl>
        <indexxl></indexxl>


    </div>

</template>

<script type="text/ecmascript-6">
    import Index from "./IndexHeader.vue";
    import Indexbanner from "./IndexBanner.vue";
    import Indexcl from "./IndexCl.vue";
    import Indexdl from "./IndexDl.vue";
    import Indexeh from "./IndexEh.vue";
    import Indexfl from "./IndexFl.vue";
    import Indexgl from "./IndexGl.vue";
    import Indexhl from "./IndexHl.vue";
    import Indexil from "./IndexIl.vue";
    import Indexjl from "./IndexJl.vue";
    import Indexkl from "./IndexKl.vue";
    import Indexll from "./IndexLl.vue";
    import Indexml from "./IndexMl.vue";
    import Indexnl from "./IndexNl.vue";
    import Indexol from "./IndexOl.vue";
    import Indexpl from "./IndexPl.vue";
    import Indexql from "./IndexQl.vue";
    import Indexrl from "./IndexRl.vue";
    import Indexsl from "./IndexSl.vue";
    import Indextl from "./IndexTl.vue";
    import Indexul from "./IndexUl.vue";
    import Indexvl from "./IndexVl.vue";
    import Indexwl from "./IndexWl.vue";
    import Indexxl from "./IndexXl.vue";
    /*import WlModel from "../../../fetch1/WlModel";*/
    import shujufetch from "../../../fetch/shujufetch.js";
//提供数据源



    export default{
        data(){
          return {

              list:[],
              wl:[],
              wa:[],
              wb:[],
              wc:[],
              wd:[],
              we:[],
              wf:[],
              wg:[],
              wh:[],
              wi:[],
              wj:[],
              wk:[],
              wm:[],
              wn:[],
              wo:[],
              wp:[],
              wq:[],
          }
        },

        components:{
            Index,
            Indexbanner,
            Indexcl,
            Indexdl,
            Indexeh,
            Indexfl,
            Indexgl,
            Indexhl,
            Indexil,
            Indexjl,
            Indexkl,
            Indexll,
            Indexml,
            Indexnl,
            Indexol,
            Indexpl,
            Indexql,
            Indexrl,
            Indexsl,
            Indextl,
            Indexul,
            Indexvl,
            Indexwl,
            Indexxl,
        },

        /*methods:{
            initData:function(){
                WlModel.getShujuinfo((data)=>{

                    console.log(data)
                        this.products = data.btn;
                        this.productsa = data.ban;
                        this.productsb = data.bbn;
                        this.bcn = data.bcn;
                        this.bdn = data.bdn;

                        console.log(this.bdn)
                    })

            }


        },
        created:function(){
            this.initData();
        },*/
        created:function(){
            shujufetch.getShujuinfo((data)=> {
//                console.log(1)
           //console.log(data);//拿到数据
                this.list=data.wwl//这个数据添加到list中在页面
                this.wl=data.wl
                this.wa=data.wa
                this.wb=data.wb
                this.wc=data.wc
                this.wd=data.wd
                this.we=data.we
                this.wf=data.wf
                this.wg=data.wg
                this.wh=data.wh
                this.wi=data.wi
                this.wj=data.wj
                this.wk=data.wk
                this.wm=data.wm
                this.wn=data.wn
                this.wo=data.wo
                this.wp=data.wp
                this.wq=data.wq

                console.log(this.wo);

            });


        },


    }

</script>

<style scoped>

</style>