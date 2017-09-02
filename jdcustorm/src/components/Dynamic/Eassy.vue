<template>
    <div class="essay">
        <ul>
            <li class="clear" key="index" v-for="(n,index) in essaylists">
                <div class="essay_content_l">
                    <a href="#">
                        <p>{{n.detail}}</p>
                        <span>{{n.auth}}</span>
                    </a>
                </div>
                <img :src="n.pic" alt="后视镜">
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["essaylists"]
    }
</script>
<style scoped>
.essay{
    margin-bottom: 1.5rem
}
      .essay ul {
          padding: 0 0.48rem; }
      .essay ul li {
            padding: 0.51rem 0 0.5rem;
            border-bottom: 0.01rem solid #eee; }
       .essay ul li .essay_content_l {
              height: 2.1rem;
              float: left;
              width: 7.2rem; }
        .essay ul li .essay_content_l a p {
                width: 7.2rem;
                float: left;
                font: 700 0.42rem/0.69rem "";
                color: #333;
                height: 1.38rem; }
         .essay ul li .essay_content_l a span {
                width: 7.2rem;
                margin-top: 0.27rem;
                float: left;
                font: 500 0.3rem/0.45rem "";
                color: #999; }
          .essay ul li img {
              float: right;
              width: 2.1rem;
              height: 2.1rem; }
</style>