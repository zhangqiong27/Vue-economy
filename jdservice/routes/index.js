var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });
//
//});

router.get("/jd",(req,res)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  var data={
    "dynlogo":"../src/public/img/treasure_touxiang.png",
    "faxainbanner":[
      {"pic":"../src/public/img/dynamic_banner1.png"},
      {"pic":"../src/public/img/dynamic_banner1.png"},
      {"pic":"../src/public/img/dynamic_banner1.png"}
    ],
    "faxianmenu":[
      {"pic":"../src/public/img/dynamic_t1.png"},
      {"pic":"../src/public/img/dynamic_t2.png"},
      {"pic":"../src/public/img/dynamic_t3.png"},
      {"pic":"../src/public/img/dynamic_t4.png"},
      {"pic":"../src/public/img/dynamic_t5.png"},
      {"pic":"../src/public/img/dynamic_t6.png"},
      {"pic":"../src/public/img/dynamic_t7.png"},
      {"pic":"../src/public/img/dynamic_t8.png"}
    ],
    "faxianmainbanner":[
      {"detail":"[复盘笔记]白马股跳水中小创逆袭"},
      {"detail":"加油打白条，最高立减150元！"},
      {"detail":"还贷只要0手续费，快来占便宜！"}
    ],
    "recommenlists":[
      {"logpic":"../src/public/img/dynamic_t9.png","auth":"叶落雨","morepic":"../src/public/img/dynamic_more.png","guanzhu":"关注","detail":"百万年薪的人才泡沫与人工智能的虚假繁荣","advice":"编辑推荐","img":"../src/public/img/dynamic_t14.png"},
      {"logpic":"../src/public/img/dynamic_t10.png","auth":"华尔街见闻","morepic":"../src/public/img/dynamic_more.png","guanzhu":"关注","detail":"楼市真相：调控100日后，房地产4大变化，买不买房都看看","advice":"编辑推荐","img":"../src/public/img/dynamic_t15.png"},
      {"logpic":"../src/public/img/dynamic_t11.png","auth":"溯花溪","morepic":"../src/public/img/dynamic_more.png","guanzhu":"关注","detail":"《王者荣耀》，阶段性“清算”的时候到了","advice":"编辑推荐","img":"../src/public/img/dynamic_t16.png"},
      {"logpic":"../src/public/img/dynamic_t12.png","auth":"财新私房课","morepic":"../src/public/img/dynamic_more.png","guanzhu":"关注","detail":"免费领取价值178元抵用券","advice":"编辑推荐","img":"../src/public/img/dynamic_t17.png"},
      {"logpic":"../src/public/img/dynamic_t13.png","auth":"叶檀财经","morepic":"../src/public/img/dynamic_more.png","guanzhu":"关注","detail":"深圳房价跌了","advice":"编辑推荐","img":"../src/public/img/dynamic_t18.png"}
    ],
    "essaybanner":[
      {"pic":"../src/public/img/treasure_t17.png","tol":"牛人金股","detail":"解读牛人选股逻辑，每日更新。","add":"+"},
      {"pic":"../src/public/img/treasure_t18.png","tol":"爱理财","detail":"定期爆款，安全收益高","add":"+"},
      {"pic":"../src/public/img/treasure_t19.png","tol":"京东股票","detail":"京东股票，好看好玩有品有料！","add":"+"},
      {"pic":"../src/public/img/treasure_t17.png","tol":"牛人金股","detail":"解读牛人选股逻辑，每日更新。","add":"+"},
      {"pic":"../src/public/img/treasure_t18.png","tol":"爱理财","detail":"定期爆款，安全收益高","add":"+"},
      {"pic":"../src/public/img/treasure_t19.png","tol":"京东股票","detail":"京东股票，好看好玩有品有料！","add":"+"}
    ],
    "essaylists":[
      {"detail":"雨天行车给你清晰视界，后视镜防雨喷雾-好玩日报第293期","auth":"神奇小阿索","pic":"../src/public/img/dynamic_t19.png"},
      {"detail":"一款没有喇叭的音响-HUMU蓝牙只能抱枕 体验","auth":"老胡","pic":"../src/public/img/dynamic_t20.png"},
      {"detail":"中国有多安全？老外感触最深的竟是这件事······","auth":"京东股票","pic":"../src/public/img/dynamic_t21.png"},
      {"detail":"2017十大融资事件年终盘点：最热的风口却没融到最多的钱，3··","auth":"京东股票","pic":"../src/public/img/dynamic_t22.png"}
    ],
    "goodschiocelists":[
      {"detail":"一款没有喇叭的音响--HUMU蓝牙智能抱枕 体验","pic":"../src/public/img/goodthings_t1.png","authod":"老胡","time":"7天前"},
      {"detail":"高像素、长续航、红辣椒4A百元手机中的战斗机！","pic":"../src/public/img/goodthings_t2.png","authod":"刚子玩数码","time":"15天前"},
      {"detail":"百元机也敢全民开黑，只因它是小辣椒","pic":"../src/public/img/goodthings_t3.png","authod":"铁院红叶","time":"17天前"},
      {"detail":"本命年专用数据线？结实的能当裤腰带","pic":"../src/public/img/goodthings_t4.png","authod":"蓝杜","time":"18天前"},
      {"detail":"这搞怪机器人居然让孩子不再迷恋手机游戏，究竟何方神圣？","pic":"../src/public/img/goodthings_t5.png","authod":"勺子耍数码","time":"19天前"},
      {"detail":"论如何在沙发上完成正泰智能指纹锁的全方位评测","pic":"../src/public/img/goodthings_t6.png","authod":"蓝杜","time":"5天前"},
      {"detail":"让凉爽温柔的围绕着你--ORICO迷你电风扇体验","pic":"../src/public/img/goodthings_t7.png","authod":"60后智能狂","time":"6小时前"}
    ],
    //王伟力
    "wwl":[{"title":"手机充值","price":300,"pic":"public/img/life_t1.png","qal":1},
      {"title":"众筹","price":200,"pic":"public/img/life_t2.png","qal":1},
      {"title":"惠加油","price":400,"pic":"public/img/life_t3.png","qal":1},
      {"title":"保险","price":600,"pic":"public/img/life_t4.png","qal":1},
      {"title":"Go返利","price":100,"pic":"public/img/life_t5.png","qal":1},
      {"title":"信用还款","price":800,"pic":"public/img/life_t6.png","qal":1},
      {"title":"还贷款","price":300,"pic":"public/img/life_t7.png","qal":1},
      {"title":"卡转让","price":200,"pic":"public/img/life_t8.png","qal":1},
      {"title":"酒店","price":400,"pic":"public/img/life_t9.png","qal":1},
      {"title":"全部服务","price":600,"pic":"public/img/life_t10.png","qal":1}],

    "wl":[{"price":300,"pic":"public/img/life_banner1.png","qal":1},
      {"price":200,"pic":"public/img/life_banner1.png","qal":1}],
    "wa":[

      {"title": "扫一扫付款码，天天享立减，优惠1元起！","price": 300, "pic": "public/img/life_t1.png", "qal": 1},
      {"title": "加油打白条，最高立减150元！", "price": 200, "pic": "public/img/life_t2.png", "qal": 1},
      {"title": "还贷只要0手续费，快来占便宜！", "price": 200, "pic": "public/img/life_t2.png", "qal": 1}],

    "wb": "众筹好物 TOP12",

    "wc":[

      {"title": "Aipao智能血压手表","price": 29, "pic": "public/img/life_t11.png", "qal":"928人已支持"},
      {"title": "VOGA V激光投影手机", "price":2999, "pic": "public/img/life_t12.png", "qal":"3,185人已支持"},
      {"title": "益盾炫酷七彩镀膜游泳镜", "price": 66, "pic": "public/img/life_t13.png", "qal":"205人已支持"},
      {"title": "Aipao智能血压手表","price": 29, "pic": "public/img/life_t11.png", "qal":"928人已支持"},
      {"title": "VOGA V激光投影手机", "price":2999, "pic": "public/img/life_t12.png", "qal":"3,185人已支持"},
      {"title": "益盾炫酷七彩镀膜游泳镜", "price": 66, "pic": "public/img/life_t13.png", "qal":"205人已支持"},
      {"title": "Aipao智能血压手表","price": 29, "pic": "public/img/life_t11.png", "qal":"928人已支持"},
      {"title": "VOGA V激光投影手机", "price":2999, "pic": "public/img/life_t12.png", "qal":"3,185人已支持"},
      {"title": "益盾炫酷七彩镀膜游泳镜", "price": 66, "pic": "public/img/life_t13.png", "qal":"205人已支持"}

    ],
    "wd":[

      {"title": "Aipao智能血压手表","price": 29, "pic": "public/img/life_t14.png", "qal":"928人已支持"},
      {"title": "VOGA V激光投影手机", "price":2999, "pic": "public/img/life_t15.png", "qal":"3,185人已支持"},
      {"title": "益盾炫酷七彩镀膜游泳镜", "price": 66, "pic": "public/img/life_t16.png", "qal":"205人已支持"},
      {"title": "Aipao智能血压手表","price": 29, "pic": "public/img/life_t17.png", "qal":"928人已支持"},
      {"title": "VOGA V激光投影手机", "price":2999, "pic": "public/img/life_t14.png", "qal":"3,185人已支持"},
      {"title": "益盾炫酷七彩镀膜游泳镜", "price": 66, "pic": "public/img/life_t15.png", "qal":"205人已支持"},
      {"title": "Aipao智能血压手表","price": 29, "pic": "public/img/life_t16.png", "qal":"928人已支持"},
      {"title": "VOGA V激光投影手机", "price":2999, "pic": "public/img/life_t17.png", "qal":"3,185人已支持"}

    ],
    "we": "线下支付特惠",
    "wf":[
      {"title": "真功夫","price": 29, "pic": "public/img/life_t18.png", "qal":"满25减10元","sq":"白条闪付"},
      {"title": "屈臣氏", "price":2999, "pic": "public/img/life_t19.png", "qal":"满50减10元","sq":"白条闪付"},
      {"title": "汉堡王", "price": 66, "pic": "public/img/life_t20.png", "qal":"满30减10元","sq":"白条闪付"},
      {"title": "呷哺呷哺","price": 29, "pic": "public/img/life_t21.png", "qal":"满50减10元","sq":"白条闪付"},
      {"title": "大玩家", "price":2999, "pic": "public/img/life_t22.png", "qal":"周末半价","sq":"扫一扫"},
      {"title": "米源", "price": 66, "pic": "public/img/life_t23.png", "qal":"周三搬家","sq":"扫一扫"}
    ],

    "wg":{"title":"京东定制","price":300,"pic":"public/img/life_youjiantou.png","qal":"品质由你定"},
    "wh":[
      {"title": "定制价","price": 458, "pic": "public/img/life_t24.png", "qal":"骨传导太阳镜","sq":"白条闪付"},
      {"title": "定制价", "price":699, "pic": "public/img/life_t25.png", "qal":"智能止鼾枕","sq":"白条闪付"},
      {"title": "定制价","price": 458, "pic": "public/img/life_t24.png", "qal":"骨传导太阳镜","sq":"白条闪付"},
      {"title": "定制价", "price":699, "pic": "public/img/life_t25.png", "qal":"智能止鼾枕","sq":"白条闪付"}
    ],
    "wi":{"title":"Go返利","price":300,"pic":"public/img/life_youjiantou.png","qal":"购物返现金"},
    "wj":[
      {"title": "返现","price": 10, "pic": "public/img/life_t26.png", "qal":"华为 Mate 9","sq":"白条闪付"},
      {"title": "返现", "price":10, "pic": "public/img/life_t27.png", "qal":"OPPO R9s Plus","sq":"白条闪付"},
      {"title": "返现","price": 10, "pic": "public/img/life_t26.png", "qal":"华为 Mate 9","sq":"白条闪付"},
      {"title": "返现", "price":10, "pic": "public/img/life_t27.png", "qal":"OPPO R9s Plus","sq":"白条闪付"}
    ],
    "wk":{"title":"有保障 享生活","price":300,"pic":"public/img/life_youjiantou.png","qal":"查看更多"},
    "wm":[

      {"title": "养老年金","price": 15, "pic": "public/img/treasure_fengefu.png", "qal":"保终身","sq":"交","sq1":"年"},
      {"title": "养老年金", "price":15, "pic": "public/img/treasure_fengefu.png", "qal":"保终身","sq":"交","sq1":"年"},
      {"title": "养老年金","price": 15, "pic": "public/img/treasure_fengefu.png", "qal":"保终身","sq":"交","sq1":"年"},
      {"title": "养老年金", "price":15, "pic": "public/img/treasure_fengefu.png", "qal":"保终身","sq":"交","sq1":"年"}
    ],
    "wn":{"title":"有好物专辑","price":300,"pic":"public/img/life_youjiantou.png","qal":"查看更多"},
    "wo":[

      {"title": "取信之物，原创手作印章","price": 15, "pic": "public/img/life_t28.png" },
      {"title": "全力以赴，做一个一百分的背包", "price":15, "pic": "public/img/life_t29.png"},
      {"title": "取信之物，原创手作印章","price": 15, "pic": "public/img/life_t28.png" },
      {"title": "全力以赴，做一个一百分的背包", "price":15, "pic": "public/img/life_t29.png"}
    ],
    "wp": "用一大波众筹好物吸引你",
    "wq":[
      {"title": "一款微光防辐射手机钢化膜","price":11.00, "pic": "public/img/life_t30.png", "qal":"起","sq":"白条闪付"},
      {"title": "发光智能灯泡音响", "price":159.00, "pic": "public/img/life_t31.png", "qal":"起","sq":"白条闪付"},
      {"title": "不做臭男人 日本银纤抗菌袜","price": 39.00, "pic": "public/img/life_t32.png", "qal":"起","sq":"白条闪付"},
      {"title": "金钥匙可折叠USB风扇灯", "price":59.00, "pic": "public/img/life_t33.png", "qal":"起","sq":"白条闪付"},
      {"title": "坚果严选，每天吃一点","price":39.00, "pic": "public/img/life_t34.png", "qal":"起","sq":"白条闪付"},
      {"title": "奇客帮冰鲜背包 享有冰镇世界", "price":99.00, "pic": "public/img/life_t35.png", "qal":"起","sq":"白条闪付"},
      {"title": "SmartShow便携音箱","price": 199.00, "pic": "public/img/life_t36.png", "qal":"起","sq":"白条闪付"},
      {"title": "智汇秀 旋磁净化水素机", "price":39.00, "pic": "public/img/life_t37.png", "qal":"起","sq":"白条闪付"},
      {"title": "4.0精工版指尖陀螺","price": 79.00, "pic": "public/img/life_t38.png", "qal":"起","sq":"白条闪付"},
      {"title": "卡帕克弹水镀膜，液体玻璃", "price":39.00, "pic": "public/img/life_t39.png", "qal":"起","sq":"白条闪付"}
    ],

    "q1":{"title":"推荐","price":300,"pic":"public/img/life_youjiantou.png","qal":"项目库","sq":"有好物"},

    "q2":[{"pic":"public/img/crowdfunding_banner1.png","qal":"项目库","sq":"有好物"},
      {"pic":"public/img/crowdfunding_banner1.png","qal":"项目库","sq":"有好物"},
      {"pic":"public/img/crowdfunding_banner1.png","qal":"项目库","sq":"有好物"},
      {"pic":"public/img/crowdfunding_banner1.png","qal":"项目库","sq":"有好物"}],

    "q3": "人气推荐",
    "q4":[

      {"title": "大白反菌除垢声波牙刷","price": 59, "pic": "public/img/crowdfunding_t1.png","pic1":"public/img/crowdfunding_t3.png","sq":"≥99··","sq1":"5,631人","sq2":"127万元","sq2":"5天" },
      {"title": "歼击 车载应急防身兵工铲","price": 29, "pic": "public/img/crowdfunding_t2.png","pic1":"public/img/crowdfunding_t3.png","sq":"≥99··","sq1":"4,530人","sq2":"53.2万元","sq2":"14天" }

    ],
    "q5":[

      {"pic": "public/img/crowdfunding_t4.png"},
      {"pic": "public/img/crowdfunding_t5.png"},
      {"pic": "public/img/crowdfunding_t6.png"},
      {"pic": "public/img/crowdfunding_t7.png"}
    ],
    "q6": "好玩集市",
    "q7":[

      {"title":"黑科技来袭 一款配备了投影功能的手机","pic": "public/img/crowdfunding_t8.png"},
      {"title":"能戴在手腕上的无人机 随时等你差遣","pic": "public/img/crowdfunding_t9.png"},
      {"title":"黑科技来袭 一款配备了投影功能的手机","pic": "public/img/crowdfunding_t8.png"},
      {"title":"能戴在手腕上的无人机 随时等你差遣","pic": "public/img/crowdfunding_t9.png"}
    ],
    "q8":
    {"title":"众筹打白条不潮怎么型","pic": "public/img/crowdfunding_motorcycle.png","qal":"30天免息 分期","qal2":"无压力"},

    //陈静科——第一页
    "banner":"../src/public/img/index_banner.png",
    "footer":[
      {"img":"../src/public/img/myself_checked.png"},
      {"img":"../src/public/img/treasure.png"},
      {"img":"../src/public/img/whitebar.png"},
      {"img":"../src/public/img/life.png"},
      {"img":"../src/public/img/dynamic.png"}
    ],
    "indexbeijing":"../src/public/img/index_beijing.png",
    "gift":"../src/public/img/index_banner2.png",
    "giftbag":[
      {"img": "../src/public/img/index_t1.png", "p": '激活白条领百元礼包', "span": "京东白条 先消费后付款"},
      {"img": "../src/public/img/index_t2.png", "p": '开通小金库 享收益', "span": "京东小金库 收益的零钱包"},
      {"img": "../src/public/img/index_t3.png", "p": '6.18%年化收益 30天内', "span": "短期爆品 限量抢购"}
    ],
    //第二页
    "bei":"../src/public/img/personaldetils_beijing.png",
    "fuli1":"../src/public/img/personaldetils_t7.png",
    "fuli2":"../src/public/img/personaldetils_t8.png",
    "lunbo1":[
      {"p":"[复盘笔记]白马股跳水中小创逆袭"},
      {"p":"加油打白条，最高立减150元！"},
      {"p":"还贷只要0手续费，快来占便宜！"}
    ],
    /* "swiper":[
     {"p":"[复盘笔记]白马股跳水中小创逆袭"},
     {"p":"加油打白条，最高立减150元！"},
     {"p":"还贷只要0手续费，快来占便宜！"}
     ] */
    "personalfooter":[
      {"img":"../src/public/img/myself_checked.png"},
      {"img":"../src/public/img/treasure.png"},
      {"img":"../src/public/img/whitebar.png"},
      {"img":"../src/public/img/life.png"},
      {"img":"../src/public/img/dynamic.png"}
    ],
    "personalhead":[
      {"img":"../src/public/img/personaldetils_touxiang.png"},
      {"img":"../src/public/img/treasure_menu.png"}
    ],
    "saoma":[
      {"p":"扫码","img":"../src/public/img/personaldetils_t1.png"},
      {"p":"领福利","img":"../src/public/img/personaldetils_t2.png"},
      {"p":"签到","img":"../src/public/img/personaldetils_t3.png"},
      {"p":"信用95.5","img":"../src/public/img/personaldetils_t4.png"}
    ],
    "zichan":[
      {"img":"../src/public/img/personaldetils_t5.png"},
      {"img":"../src/public/img/personaldetils_t5.png"},
      {"img":"../src/public/img/personaldetils_t5.png"}
    ],
    "zichan2":[
      {"img":"../src/public/img/personaldetils_t6.png"},
      {"img":"../src/public/img/personaldetils_t6.png"},
      {"img":"../src/public/img/personaldetils_t6.png"}
    ],

    //段世煊
    "portrait":{"src":"../src/public/img/personinfo_via.png","alt":"头像","name":"Cap921226","real":"已实名","id":"未传身份证"},
    "One":{ "titles":[{"p":"银行卡"},{"p":"账单"},{"p":"总资产","span":"金额6.13"},{"p":"会员中心","span":"会员"},{"p":"我的卡包"},{"p":"小白信用","span":"95.5分"},{"p":"我的保险"}],
      "src":"../src/public/img/personinfo_more.png","alt":"更多"} ,
    "Two":{"titles":[{"p":"定期"},{"p":"基金"},{"p":"股票"},{"p":"京东钱包"}],
      "src":"../src/public/img/personinfo_more.png","alt":"更多"},
    "Three":{"titles":[{"p":"白条","span":"可用额度8,066.00"},{"p":"白条贷款"},{"p":"金条","span":"可用额度9,000.00"}],
      "src":"../src/public/img/personinfo_more.png","alt":"更多"},
    "Four":{"titles":[{"p":"我的众筹"},{"p":"京东东家"}],
      "src":"../src/public/img/personinfo_more.png","alt":"更多"},
    "Five":{"titles":"专属客服","src":"../src/public/img/personinfo_more.png","alt":"更多"},

    "product":{"titles":[ {'pl':'6.18%','spanl':'综合年化收益率','pr':'产品期限 15天','spanr':'新手专享 | 超高福利速戳'},
      {'pl':'5.60%','spanl':'预期年化收益率','pr':'产品期限 261天','spanr':'限时秒杀 | 精品从速'},
      {'pl':'5.70%','spanl':'预期年化收益率','pr':'产品期限 364天','spanr':'稳稳赚 | 抢要看手速'},
      {'pl':'5.80%','spanl':'预期年化收益率','pr':'产品期限 462天','spanr':'高收益 | 赚钱看得见'}],
      "h2":"理财全能赚钱"},
    "pandect":{
      "totalmoney":"6.13",
      "imgs":[{'src':'../src/public/img/coffers_t1.png','alt':'理财金'},
        {'src':'../src/public/img/coffers_t2.png','alt':'零用钱'}]},
    "beijing":{
      "src":"../src/public/img/coffers_beijing.png","alt":"小金库背景"},
    "everydaybanner":{
      "src":"../src/public/img/coffers_t3.png","alt":"小白定期"},
    "everydaycouponmission":{
      "p1":"每日抢券","p2":"做任务领福利","span1":"满100元减50元券","span2":"领小金库红包"},
    "lcqnbanner":{
      "p":"行家活动","span":"8%收益稳稳赚","src":"../src/public/img/treasure_t1.png","alt":"行家活动"
    },
    "shouyicoupon":{
      "p1":"0.00","p2":"0","span1":"最新收益（元）","span2":"我的优惠券（张）"
    },

    //贾恒——财富页面
    "treaheader": {"pic1":"../src/public/img/personinfo_via.png","pic2":"../src/public/img/treasure_menu.png"},
    "treabanner":
        [
          {"pic":"../src/public/img/treasure_banner1.png","alt":"开白条就送2000京豆"},
          {"pic":"../src/public/img/treasure_banner1.png","alt":"开白条就送2000京豆"} ],
    "treanav":[
      {"pic":"../src/public/img/treasure_xiaojinku.png","auth":"金库"},
      {"pic":"../src/public/img/treasure_licai.png","auth":"定期理财"},
      {"pic":"../src/public/img/treasure_jijin.png","auth":"基金"},
      {"pic":"../src/public/img/treasure_gupiao.png","auth":"股票"},
      {"pic":"../src/public/img/treasure_xiaobaijijin.png","auth":"小白基金"},
      {"pic":"../src/public/img/treasure_baoxian.png","auth":"保险"},
      {"pic":"../src/public/img/treasure_huangjin.png","auth":"黄金"},
      {"pic":"../src/public/img/treasure_quanbu.png","auth":"全部"}
    ],
    "treadqjx":[{"p1":"4.56%","p2":"产品期限 随时存取","span1":"七日年化收益率","span2":"低风险 | 短期王牌产品"},
      {"p1":"4.80%","p2":"产品期限 77天","span1":"预期年化收益","span2":"安全低风险 | 限量秒杀速戳"},
      {"p1":"5.40%","p2":"产品期限 180天","span1":"预期年化收益","span2":"安全低风险 | 赚钱看得见"},
      {"p1":"5.80%","p2":"产品期限 365天","span1":"历史年化投资回报率","span2":"低险精品 | 安全低风险"}
    ],
    "treajjjx":[{"p1":"6.87%+7%","p2":"比宝类多赚40%","span1":"平均年化收益","span2":"长期稳定 | 爆款年年盈"},
      {"p1":"9.05%","p2":"天天赚 天天高收益","span1":"近7日年化收益","span2":"超短期 | 随存随取"},
      {"p1":"195.020%","p2":"豪礼狂欢 选冠军牛基","span1":"近三年收益率","span2":"6.18红包不限量加送iPad"},
      {"p1":"10.00%","p2":"爆款组合 成功率80.95%","span1":"止盈年化收益","span2":"再领2%加速收益"}
    ]
    ,"treajjjx1":[
      {"pic":"../src/public/img/treasure_t1.png","auth":"行家活动","span":"8%收益稳稳赚"},
      {"pic":"../src/public/img/treasure_t1.png","auth":"行家活动","span":"8%收益稳稳赚"},
      {"pic":"../src/public/img/treasure_t1.png","auth":"行家活动","span":"8%收益稳稳赚"},
      {"pic":"../src/public/img/treasure_t1.png","auth":"行家活动","span":"8%收益稳稳赚"},
      {"pic":"../src/public/img/treasure_t1.png","auth":"行家活动","span":"8%收益稳稳赚"},
      {"pic":"../src/public/img/treasure_t1.png","auth":"行家活动","span":"8%收益稳稳赚"},
    ],
    "treabaoxian":[
      {"pic":"../src/public/img/treasure_fengefu.png","auth":"分隔符","h3":"养老年金","h4":"保终身","p":"交15年"},
      {"pic":"../src/public/img/treasure_fengefu.png","auth":"分隔符","h3":"养老年金","h4":"保终身","p":"交15年"},
      {"pic":"../src/public/img/treasure_fengefu.png","auth":"分隔符","h3":"养老年金","h4":"保终身","p":"交15年"},
      {"pic":"../src/public/img/treasure_fengefu.png","auth":"分隔符","h3":"养老年金","h4":"保终身","p":"交15年"},
      {"pic":"../src/public/img/treasure_fengefu.png","auth":"分隔符","h3":"养老年金","h4":"保终身","p":"交15年"},
      {"pic":"../src/public/img/treasure_fengefu.png","auth":"分隔符","h3":"养老年金","h4":"保终身","p":"交15年"}
    ],
    "trealczs":[
      {"pic":"../src/public/img/treasure_t3.png","auth":"资产分析","span":"养成每月储蓄好习惯"},
      {"pic":"../src/public/img/treasure_t4.png","auth":"存工资","span":"分析你的资产配置"},
      {"pic":"../src/public/img/treasure_t5.png","auth":"神奇指标","span":"连续看涨20天"},
      {"pic":"../src/public/img/treasure_t6.png","auth":"基金定股","span":"长期投资首选"},
    ],
    "treatslc":[
      {"pic":"../src/public/img/treasure_t7.png","auth":"海外投资"},
      {"pic":"../src/public/img/treasure_t8.png","auth":"计划理财"},
      {"pic":"../src/public/img/treasure_t7.png","auth":"海外投资"},
      {"pic":"../src/public/img/treasure_t8.png","auth":"计划理财"},
    ],
    "treatjyd1":[
      {"pic":"../src/public/img/treasure_t9.png","auth":"理财计划"},
      {"pic":"../src/public/img/treasure_t10.png","auth":"白话可转让"},
      {"pic":"../src/public/img/treasure_t11.png","auth":"漫调思理"},
      {"pic":"../src/public/img/treasure_t9.png","auth":"理财计划"},
      {"pic":"../src/public/img/treasure_t10.png","auth":"白话可转让"},
      {"pic":"../src/public/img/treasure_t11.png","auth":"漫调思理"},
    ],
    "treatjyd2":[
      {"pic":"../src/public/img/treasure_t12.png","auth":"景顺长城基金","p":"你知道你买的基金有多厉害吗？"},
      {"pic":"../src/public/img/treasure_t13.png","auth":"兴全基金","p":"【2017.7.4】看热点，读研报"},
      {"pic":"../src/public/img/treasure_t14.png","auth":"牛人金股","p":"随意漫记职业抄手与我--雷立刚"},
      {"pic":"../src/public/img/treasure_t15.png","auth":"老罗话指数","p":"定投这么久，咋还不赚钱？"},
      {"pic":"../src/public/img/treasure_t16.png","auth":"JD金融保险","p":"保险用户证言第四期"},
    ],
    "treatjyd3":[
      {"pic":"../src/public/img/treasure_t17.png","auth":"牛人金股","p":"解读牛人选股逻辑，每日更新牛人金股。？","a":"+"},
      {"pic":"../src/public/img/treasure_t18.png","auth":"爱理财","p":"定期爆款，安全收益高？","a":"+"},
      {"pic":"../src/public/img/treasure_t19.png","auth":"京东股票","p":"京东股票，好看好玩有品有料！？","a":"+"},
      {"pic":"../src/public/img/treasure_t17.png","auth":"牛人金股","p":"解读牛人选股逻辑，每日更新牛人金股。？","a":"+"},
      {"pic":"../src/public/img/treasure_t18.png","auth":"爱理财","p":"定期爆款，安全收益高？","a":"+"},
      {"pic":"../src/public/img/treasure_t19.png","auth":"京东股票","p":"京东股票，好看好玩有品有料！？","a":"+"},
    ],
    "treagdxx": {"p":"至今为止交易无风险"},
    "treagdxx1":[
      {"p":"L****Q 购买京东小金库 16,000元 44秒前"},
      {"p":"C****Z 购买京东小金库 8,000元 1分钟前"},
      {"p":"C****G 购买京东小金库 10,000元 3分钟前"},
      {"p":"A****B 购买京东小金库 7,000元 4分钟前"},

    ],
    "treabeijing":{"pic":"../src/public/img/treasure_beijing.png","auth":"不积小流，无以成江海"},
    "whitebarheader":{"pic1":"../src/public/img/treasure_touxiang.png","pic2":"../src/public/img/treasure_menu.png"},
	"whitebarheader":{"pic1":"../src/public/img/treasure_touxiang.png","pic2":"../src/public/img/treasure_menu.png"},
    "whitebarbaitiao":{"p1":"京东白条","p2":"灵活分期","p3":"0首付","span1":"先消费后付款","span2":"3～24期随心选","span3":"先用后付 轻松购","a":"激活领100元礼包"},
    "whitebarswiper":[
      {"pic":"../src/public/img/whitebar_banner1.png","auth":"信用骑单车"},
      {"pic":"../src/public/img/whitebar_banner1.png","auth":"信用骑单车"},
    ],
    "whitebarmenu":[
      {"pic":"../src/public/img/whitebar_t1.png","auth":"领劵","p":"免单中奖名单新鲜出炉啦"},
      {"pic":"../src/public/img/whitebar_t2.png","auth":"白条商城","p":"免单中奖名单新鲜出炉啦"},
      {"pic":"../src/public/img/whitebar_t3.png","auth":"分期精选","p":"免单中奖名单新鲜出炉啦"},
      {"pic":"../src/public/img/whitebar_t4.png","auth":"全部","p":"免单中奖名单新鲜出炉啦"},
      ],
    "whitebarmrmx":[
      {"pic":"../src/public/img/whitebar_t6.png","auth":"华为 P10手机","span":"￥315.67起","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t7.png","auth":"联想小新锐700??","span":"￥883.00起","i":"x6期"},
      {"pic":"../src/public/img/whitebar_t8.png","auth":"SK2 晶透润养??","span":"￥165.00起","i":"x6期"},
      {"pic":"../src/public/img/whitebar_t6.png","auth":"华为 P10手机","span":"￥315.67起","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t7.png","auth":"联想小新锐700??","span":"￥883.00起","i":"x6期"},
      {"pic":"../src/public/img/whitebar_t8.png","auth":"SK2 晶透润养??","span":"￥165.00起","i":"x6期"},
       ],
    "whitebarbaijian":[
      {"pic":"../src/public/img/whitebar_t9.png","auth":"爆款电脑配件 打白条免息购","span":"只为游戏而生"},
      {"pic":"../src/public/img/whitebar_t10.png","auth":"最高12期免息","span":"人像摄影大师"},
      {"pic":"../src/public/img/whitebar_t11.png","auth":"打白条享免息","span":"购手机 享好礼"},
      {"pic":"../src/public/img/whitebar_t12.png","auth":"全场12期免息","span":"门店同款更划算"},
      {"pic":"../src/public/img/whitebar_t13.png","auth":"白条免息购智能","span":"摩登科技智能潮牌"},
      {"pic":"../src/public/img/whitebar_t14.png","auth":"夏日出行必备","span":"打白条 先用后付"},
      {"pic":"../src/public/img/whitebar_t15.png","auth":"雷神指定款 纵享6期免息","span":"青春不落幕 玩点特别的"},

    ],
    "whitebarsgzhp":[
      {"pic":"../src/public/img/whitebar_t16.png","auth":"北欧极简概念手表","span":"12期免息，带上就有感觉"},
      {"pic":"../src/public/img/whitebar_t17.png","auth":"Tea罩杯","span":"能一手掌握的罩杯"},
      {"pic":"../src/public/img/whitebar_t18.png","auth":"白条x咕咕机","span":"￥24.92起x12期"},
      {"pic":"../src/public/img/whitebar_t19.png","auth":"山水?咫尺","span":"￥16.5起x12期"},
      {"pic":"../src/public/img/whitebar_t20.png","auth":"山水?名片夹","span":"￥30.67起x12期"},

    ],
    "whitebarfqjx":[
      {"pic":"../src/public/img/whitebar_t21.png","auth":"挑个海岛晒太阳","span":"全场3期免息"},
      {"pic":"../src/public/img/whitebar_t22.png","auth":"有车就能贷","span":"最高可贷50万"},
      {"pic":"../src/public/img/whitebar_t23.png","auth":"有房就能贷","span":"最高可贷1000万"},
      {"pic":"../src/public/img/whitebar_t24.png","auth":"医美分期免息","span":"玻尿酸32元/月起"},

    ],
    "whitebarbaiwu":[
      {"pic":"../src/public/img/whitebar_t25.png","auth":"装一副镭射眼","span":"动感光波哔哔～"},
      {"pic":"../src/public/img/whitebar_t26.png","auth":"木质纸牌","span":"花样斗地主"},
      {"pic":"../src/public/img/whitebar_t27.png","auth":"高射炮打蚊子","span":"让灭蝇变成游戏"},

    ],
    "whitebardszq":[
      {"pic":"../src/public/img/whitebar_t28.png","auth":"华为 P10手机","span":"人像摄影大师","p":"￥315.67起","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t29.png","auth":"富图宝 蓝牙自拍杆","span":"独有焦距调节功能","p":"￥16.33","i":"x3期"},
      {"pic":"../src/public/img/whitebar_t30.png","auth":"vivo X9 全网通","span":"经典配色，所品不凡","p":"￥216.50起","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t31.png","auth":"品胜20000毫安移动电源","span":"电量一目了然","p":"￥11.58","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t32.png","auth":"宏碁暗影骑士3游戏本","span":"传承跑车基因，点燃热血激情","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t33.png","auth":"雷柏 混光机械键盘","span":"雅质战键，光彩溢色","p":"￥16.58","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t34.png","auth":"惠普 暗影精灵II代Pro","span":"完胜所有游戏战场","p":"￥4499.92","i":"x12期"},
      {"pic":"../src/public/img/whitebar_t35.png","auth":"樱桃背光机械键盘","span":"只看价位，都差不了","p":"￥108.25","i":"x12期"},

    ],
    "whitebarbeijing":{"pic":"../src/public/img/whitebar_beijing.png","auth":"?ê?á2?á?°×"}
  };
  res.jsonp(data)
});
module.exports = router;


