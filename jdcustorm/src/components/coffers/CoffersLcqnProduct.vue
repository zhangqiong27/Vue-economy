<template>
    
   <div>
        <h2>{{product.h2}}</h2>
        <ul>
            <li v-for="t in product.titles">
                <a href="#">
                    <div class="product-l">
                        <p>{{t.pl}}</p>
                        <span>{{t.spanl}}</span>
                    </div>
                    <div class="product-r">
                        <p>{{t.pr}}</p>
                        <span>{{t.spanr}}</span>
                    </div>
                </a>
            </li>
        </ul>

   </div>
    
       
</template>

<script>

export default{
    props:["product"],
  
  }
</script>

<style scoped>
	

#lcqn h2 {
  padding-left: 0.48rem;
  font: 700 0.42rem/1.5rem "";
  color: #333; }
  
#lcqn ul {
  padding-left: 0.48rem; }
  #lcqn ul li {
    border-top: 0.01rem solid #eee;
    padding: 0.58rem 0 0.57rem;
    height: 1.23rem; }
    #lcqn ul li a .product-l {
      float: left;
      width: 3.4rem; }
      #lcqn ul li a .product-l p {
        font: 900 0.5rem/0.62rem "";
        color: #f88220; }
      #lcqn ul li a .product-l span {
        display: block;
        margin-top: 0.29rem;
        font: 700 0.32rem/0.32rem "";
        color: #999; }
    #lcqn ul li a .product-r {
      float: left;
      margin-left: 0.43rem;
      border-left: 0.01rem solid #eee;
      padding-left: 0.5rem; }
      #lcqn ul li a .product-r p {
        font: 600 0.44rem/0.68rem "";
        color: #666; }
      #lcqn ul li a .product-r span {
        display: block;
        margin-top: 0.23rem;
        font: 700 0.32rem/0.32rem "";
        color: #999; }
  #lcqn ul li:nth-child(2) a .product-r span {
    color: #ff7e12; }
  #lcqn ul li:nth-child(4) a .product-r span {
    color: #ff7e12; }

</style>
