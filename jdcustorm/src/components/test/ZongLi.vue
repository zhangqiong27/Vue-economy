<template>
    <div>
        <testal :q1="q1"></testal>
        <testbl :q2="q2"></testbl>
        <testcl></testcl>
        <testdl :q3="q3"></testdl>
        <testef :q4="q4"></testef>
        <testcl></testcl>
        <testfz :q5="q5"></testfz>
        <testcl></testcl>
        <testgl :q6="q6"></testgl>
        <testhl :q7="q7"></testhl>
        <testcl></testcl>
        <testkl :q8="q8"></testkl>
        <testcl></testcl>
    </div>

</template>

<script type="text/ecmascript-6">
    import Testal from "./TestAl.vue";
    import Testbl from "./TestBl.vue";
    import Testcl from "./TestCl.vue";
    import Testdl from "./TestDl.vue";
    import Testef from "./TestEf.vue";
    import Testfz from "./TestFz.vue";
    import Testgl from "./TestGl.vue";
    import Testhl from "./TestHl.vue";
    import Testkl from "./Testkl.vue";



    import shujufetch from "../../../fetch/shujufetch.js";
    export default{
        data(){
          return{
              q1:[],
              q2:[],
              q3:[],
              q4:[],
              q5:[],
              q6:[],
              q7:[],
              q8:[],

          }
        },
        components:{
            Testal,
            Testbl,
            Testcl,
            Testdl,
            Testef,
            Testfz,
            Testgl,
            Testhl,
            Testkl

        },
        created:function(){
            shujufetch.getShujuinfo((data)=> {
//                console.log(1)
                //console.log(data);//拿到数据
                this.q1=data.q1//这个数据添加到list中在页面
                this.q2=data.q2
                this.q3=data.q3
                this.q4=data.q4
                this.q5=data.q5
                this.q6=data.q6
                this.q7=data.q7
                this.q8=data.q8

                console.log(this.q7);

            });


        },


    }
</script>