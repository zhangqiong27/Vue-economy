<template>
    <section id="fenqi">
        <div class="fenqi_l">
            <h2>{{q8.qal}}<span>{{q8.qal2}}</span></h2>
            <p>{{q8.title}}</p>
        </div>
        <img class="motorcycle" :src="q8.pic" alt="摩托车" />
    </section>

</template>

<script type="text/ecmascript-6">
    export default{
        props:["q8"]

    }

</script>

<style scoped>
    #fenqi {
        display: flex;
        justify-content: space-between;
        padding: 0 0.42rem 0 0.48rem; }
    #fenqi .fenqi_l {
        padding: 0.48rem 0; }
    #fenqi .fenqi_l h2 {
        font: 900 0.5rem/0.8rem "";
        color: #444; }
    #fenqi .fenqi_l h2 span {
        color: #ff7600; }
    #fenqi .fenqi_l p {
        font: 500 0.38rem/0.62rem "";
        color: #666; }
    #fenqi .motorcycle {
        display: block;
        width: 2.8rem;
        height: 2.4rem; }


</style>