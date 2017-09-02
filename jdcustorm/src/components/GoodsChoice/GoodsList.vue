<template>
    <ul>
         <li class="clear" key="index" v-for="(n,index) in prolists">
            <a href="#">
                <div class="title_auther_day clear">
                    <p class="title">{{n.detail}}</p>
                    <span class="auther">{{n.authod}}</span>
                    <span class="day">{{n.time}}</span>
                </div>
                <!--<img :src="n.pic" alt=""/>-->
                <img v-lazy="n.pic" alt="蓝牙智能抱枕">
            </a>
        </li>
    </ul>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["prolists"]
    }
</script>
<style scoped>
 ul {
     width: 100%;
     margin-top: 0.88rem;
     box-sizing:border-box;
    padding-left: 0.48rem; }
ul li {
      padding: 0.5rem 0.48rem 0.5rem 0;
      border-top: 0.01rem solid #eee; }
ul li .title_auther_day {
        float: left;
        width: 5rem; }
ul li .title_auther_day .title {
          font: 700 0.28rem/0.67rem "";
          color: #333;
          margin-bottom: 0.3rem;
          height: 1.34rem; }
ul li .title_auther_day .auther {
          float: left;
          font: 600 0.3rem/0.46rem "";
          color: #999; }
ul li .title_auther_day .day {
          float: right;
          font: 600 0.3rem/0.46rem "";
          color: #999; }
ul li img {
        display: block;
        float: right;
        width: 2.1rem;
        height: 2.1rem; }
</style>