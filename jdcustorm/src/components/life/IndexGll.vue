<template>
    <li class="swiper-slide">
        <dl>
            <dd>
                <a href="#">
                    <img :src="pro.pic" alt="Aipao智能血压手表">
                    <h3>{{pro.title}}</h3>
                    <p>{{pro.qal}}</p>
                    <span>￥{{pro.price}}<i>起</i></span>
                </a>
            </dd>
            <dd>
                <a href="#">
                    <img src="../../public/img/life_t12.png" alt="VOGA V激光投影手机">
                    <h3>VOGA V激光投影手机</h3>
                    <p>3,185人已支持</p>
                    <span>￥2999<i>起</i></span>
                </a>
            </dd>
            <dd>
                <a href="#">
                    <img src="../../public/img/life_t13.png" alt="益盾炫酷七彩镀膜游泳镜">
                    <h3>益盾炫酷七彩镀膜游泳镜</h3>
                    <p>205人已支持</p>
                    <span>￥66<i>起</i></span>
                </a>
            </dd>
        </dl>
    </li>

</template>

<script type="text/ecmascript-6">
export default{
        props:["pro"]



}
</script>

<style scoped>

    li {
        width: 9.5rem; }
    li dl dd {
        margin-bottom: 0.48rem;
        height: 2.4rem; }
    li dl dd img {
        float: left;
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 0.3rem; }
    li dl dd h3 {
        width: 6.2rem;
        float: left;
        font: 600 0.38rem/0.5rem "";
        color: #444; }
    li dl dd p {
        width: 6.2rem;
        float: left;
        font: 600 0.3rem/0.75rem "";
        color: #999; }
    li dl dd span {
        width: 6.2rem;
        float: left;
        font: 600 0.28rem/0.42rem "";
        color: #fd8016; }
    li dl dd span i {
        padding-left: 0.05rem;
        color: #999; }


</style>