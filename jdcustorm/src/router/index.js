import Vue from "vue";
import VueRouter from "vue-router";
import Dynamic from "../components/Dynamic/DynPage.vue"
import GoodsChoice from "../components/GoodsChoice/GoodsChoicePage.vue"
import Zongqi from "../components/life/ZongQi.vue";
import Zongli from "../components/test/ZongLi.vue";
import Index from "../components/index/Index.vue";
import Personal from "../components/personal/personal.vue";
import Coffers from "../components/coffers/Coffers.vue";
import Personalinfo from "../components/personalinfo/Personalifo.vue";
import Trea from "../components/trea/Trea.vue"
import WhiteBar from "../components/whitebar/WhiteBar.vue"


Vue.use(VueRouter);

let router = new VueRouter({
  routes:[
    {path:"/",redirect:"/Index"},
    {path:"/Coffers",component:Coffers},
    {path:"/Personalinfo",component:Personalinfo},
    {path:"/Index",component:Index},
    {path:"/Personal",component:Personal},
    {path:"/Dynamic",component:Dynamic},
    {path:"/GoodsChoice",component:GoodsChoice},
    {path:"/pro",component:Zongqi},//life页面
    {path:"/article",component:Zongli},//life子页面众筹
    {path:"/Trea",component:Trea},
    {path:"/WhiteBar",component:WhiteBar}
  ]
});

export default router;

