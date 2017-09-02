<template>
    <section class="xxzfth">
            <ul>


      <indexkll key="index" :pro="n" v-for="(n,index) in wf"></indexkll>
        <!--<ul>-->
            <!--<li>-->
                <!--<a href="#">-->
                    <!--<img src="../../public/img/life_t18.png" alt="真功夫">-->
                    <!--<h4>真功夫</h4>-->
                    <!--<p>满25减10元</p>-->
                    <!--<span>白条闪付</span>-->
                <!--</a>-->
            <!--</li>-->
            <!--<img class="fenge" src="../../public/img/life_fenjiexian.png" alt="分界线">-->
            <!--<li>-->
                <!--<a href="#">-->
                    <!--<img src="../../public/img/life_t19.png" alt="屈臣氏">-->
                    <!--<h4>屈臣氏</h4>-->
                    <!--<p>满50减10元</p>-->
                    <!--<span>白条闪付</span>-->
                <!--</a>-->
            <!--</li>-->
            <!--<img class="fenge" src="../../public/img/life_fenjiexian.png" alt="分界线">-->
            <!--<li>-->
                <!--<a href="#">-->
                    <!--<img src="../../public/img/life_t20.png" alt="汉堡王">-->
                    <!--<h4>汉堡王</h4>-->
                    <!--<p>满30减10元</p>-->
                    <!--<span>白条闪付</span>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a href="#">-->
                    <!--<img src="../../public/img/life_t21.png" alt="呷哺呷哺">-->
                    <!--<h4>呷哺呷哺</h4>-->
                    <!--<p>满50减10元</p>-->
                    <!--<span>白条闪付</span>-->
                <!--</a>-->
            <!--</li>-->
            <!--<img class="fenge" src="../../public/img/life_fenjiexian.png" alt="分界线">-->
            <!--<li>-->
                <!--<a href="#">-->
                    <!--<img src="../../public/img/life_t22.png" alt="大玩家">-->
                    <!--<h4>大玩家</h4>-->
                    <!--<p>周末半价</p>-->
                    <!--<span>扫一扫</span>-->
                <!--</a>-->
            <!--</li>-->
            <!--<img class="fenge" src="../../public/img/life_fenjiexian.png" alt="分界线">-->
            <!--<li>-->
                <!--<a href="#">-->
                    <!--<img src="../../public/img/life_t23.png" alt="米源">-->
                    <!--<h4>米源</h4>-->
                    <!--<p>周三搬家</p>-->
                    <!--<span>扫一扫</span>-->
                <!--</a>-->
            <!--</li>-->
        <!--</ul>-->
                <img class="fenge" src="../../public/img/life_fenjiexian.png" alt="分界线">
            </ul>
    </section>

</template>

<script type="text/ecmascript-6">
    import Indexkll from "./IndexKll.vue";
    export default{
        components:{
            Indexkll,
        },
        props:["wf"],

    }

</script>

<style scoped>
    .xxzfth ul {
        padding: 0 0.48rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; }
    .xxzfth ul li {
        text-align: center;
        flex: 0 0 30%;
        width: 2.63rem;
        padding: 0.21rem 0 0.31rem 0; }
    .xxzfth ul li a img {
        display: block;
        width: 100%;
        height: 1.65rem; }
    .xxzfth ul li a h4 {
        margin-top: 0.17rem;
        font: 700 0.36rem/0.53rem "";
        color: #555; }
    .xxzfth ul li a p {
        font: 500 0.28rem/0.48rem "";
        color: #e2b979; }
    .xxzfth ul li a span {
        font: 0.24rem/0.33rem "";
        color: #999; }
    .xxzfth ul .fenge {
        display: block;
        width: 0.02rem;
        height: 3.68rem; }

</style>