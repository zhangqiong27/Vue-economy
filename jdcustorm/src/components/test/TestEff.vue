<template>
    <li>
        <a href="#">
            <img class="productimg" :src="pro.pic" alt="电动牙刷"/>
            <div class="product_r">
                <h2>{{pro.title}}</h2>
                <p>￥<i>{{pro.price}}</i>.00<span>起</span></p>
                <div class="schedule clear">
                    <img class="jindutiao" :src="pro.pic1" alt="进度条"/>
                    <span>{{pro.sq}}</span>
                </div>
                <span class="ren">{{pro.sq1}}</span>
                <span class="qian">{{pro.sq2}}</span>
                <span class="tian">{{pro.sq3}}</span>
            </div>
        </a>
    </li>

</template>

<script type="text/ecmascript-6">
    export default{
        props:["pro"]
    }

</script>

<style scoped>
   li {
        border-top: 0.01rem solid #eee;
        padding: 0.57rem 0 0.61rem; }
    li a {
        display: flex;
        justify-content: space-between; }
   li a .productimg {
        flex: 0 0 26%;
        display: block;
        width: 2.7rem;
        height: 2.7rem; }
   li a .product_r {
        flex: 0 0 65%;
        padding-right: 0.48rem; }
   li a .product_r h2 {
        font: 700 0.4rem/0.55rem "";
        color: #333; }
li a .product_r p {
        font: 600 0.24rem/0.88rem "";
        color: #ff7d0e; }
    #rqtj ul li a .product_r p i {
        font: 700 0.40rem/0.88rem ""; }
    #rqtj ul li a .product_r p span {
        color: #999; }
   li a .product_r .schedule .jindutiao {
        float: left;
        display: block;
        width: 5.17rem;
        height: 0.63rem; }
   li a .product_r .schedule span {
        float: left;
        margin-left: 0.35rem;
        font: 600 0.26rem/0.63rem "";
        color: #4e90e4; }
 li a .product_r .ren {
        font: 600 0.28rem/0.43rem "";
        color: #999;
        padding-left: 0.45rem;
        background: url("../../public/img/crowdfunding_renshu.png") no-repeat;
        background-size: 0.36rem 0.43rem; }
   li a .product_r .qian {
        font: 600 0.28rem/0.43rem "";
        color: #999;
        padding-left: 0.45rem;
        background: url("../../public/img/crowdfunding_money.png") no-repeat;
        background-size: 0.36rem 0.43rem; }
   li a .product_r .tian {
        font: 600 0.28rem/0.43rem "";
        color: #999;
        padding-left: 0.45rem;
        background: url("../../public/img/crowdfunding_date.png") no-repeat;
        background-size: 0.36rem 0.43rem; }


</style>