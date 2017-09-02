<template>
   <div class="gift_bag">
            <h2>给新朋友的礼包</h2>
            <ul>
                <li v-for="t in giftbag">
                    <a href="#">
                        <img :src="t.img" alt="1">
						<div class="details">
							<p>{{t.p}}</p>
							<span>{{t.span}}</span>
						</div>
                    </a>
                </li>
            </ul>
            <a class="more" href="#">获得更多惊喜</a>
		</div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["giftbag"],

    }
</script>
 <style scoped>
 	  .gift_bag h2 {
    padding: 0 0.5rem;
    font: 700 0.42rem/1.66rem "";
    color: #414141; }
   .gift_bag ul {
    padding: 0 0.5rem; }
     .gift_bag ul li {
      height: 1.32rem;
      padding: 0.48rem 0 0.5rem; }
       .gift_bag ul li a img {
        float: left;
        width: 1.32rem;
        height: 1.32rem;
        margin-right: 0.5rem;
        padding-bottom: 0.5rem; }
       .gift_bag ul li a .details {
        width: 7.8rem;
        float: left;
        height: 1.21rem;
        padding-bottom: 0.6rem;
        border-bottom: 0.01rem solid #f0f0f0; }
         .gift_bag ul li a .details p {
          float: left;
          width: 7.8rem;
          font: 600 0.42rem/0.74rem "";
          color: #414141; }
        .gift_bag ul li a .details span {
          float: left;
          width: 7.8rem;
          font: 600 0.32rem/0.48rem "";
          color: #989898; }
     .gift_bag ul li:nth-child(3) .details {
      border-bottom: none; }
   .gift_bag .more {
    display: block;
    height: 1.49rem;
    border-top: 0.01rem solid #f0f0f0;
    font: 600 0.36rem/1.49rem "";
    color: #4d8dee;
    text-align: center; }
</style>
