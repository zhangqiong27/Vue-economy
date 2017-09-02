<template>
    <div class="menu">
        <ul class="jumpBtn">
            <li key="index" v-for="(n,index) in faxianmenu">
                <!--<a href="###">-->
                    <!--<img :src="n.pic" alt="业界大咖">-->
                <!--</a>-->
                <router-link to="/GoodsChoice">
                    <img :src="n.pic" alt="业界大咖">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: ["faxianmenu"],
        components: {

        },
        methods: {
            changeRouter:function(){
//                alert(1);
//                $(".jumpBtn li").eq(3).find("a").replace("<router-link to='/GoodsChoice'/>");
//                $(".jumpBtn li").eq(3).wrap(function() {
//                    return "<router-link to='/GoodsChoice'/>";
//                });
//                console.log($(".jumpBtn li").eq(3))
//                <img src="../../public/img/goodthings_back.png" alt="返回"/></router-link>
            }
        },
        updated: function () {
            this.changeRouter();
        }
    }
</script>
<style scoped>
   .menu {
          padding: 0.65rem 0.48rem 0.29rem; }
   .menu ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap; }
     .menu ul li {
              flex: 0 0 25%; }
      .menu ul li  img {
                display: block;
                width: 1.74rem;
                height: 2.14rem; }
</style>