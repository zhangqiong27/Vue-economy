<template>
    <div class="anniu" id="gzBtn">
        <a href="#" class=" Btnbutton btn regUseCurr">
            <i>我的关注</i>
        </a>
        <a href="#" class="Btnbutton btn">
            <i>发现</i>
        </a>
    </div>

</template>

<script type="text/ecmascript-6">

    export default {
        components:{
          
        }
    }
</script>
<style scoped>
    #main .anniu {
        height: 1.06rem;
        padding: 0 2.5rem;
        display: flex;
        justify-content: space-between; }
        #main .anniu a {
          flex: 0 0 45%;
          text-align: center; }
          #main .anniu a i {
            padding-bottom: 0.2rem;
            font: 700 0.4rem/1rem ""; }
        #main .anniu a.regUseCurr i {
          color: #4d8dee;
          border-bottom: 0.06rem solid #4d8dee; }
</style>