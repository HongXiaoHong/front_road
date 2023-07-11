> 记住你的价值，它不因外观的不雅而贬值，是金子总有发光的一天

# front_road

前端之路开启了

[Java/前端/Go/大数据/C学习路线分享 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv14023271?spm_id_from=333.999.0.0)

在项目中磨练自己

[freecodecamp](https://www.freecodecamp.org/learn)

### 冰火两仪眼-太极-音乐磁场-解析器

初版位置稍有偏差

![music_magnetic_field_analyzer](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/music_magnetic_field_analyzer.gif)

位置居中  

![music_magnetic_field_analyzer_v1](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/music_magnetic_field_analyzer_v1.gif)

不同设备兼容

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/music_magnetic_field_analyzer_media.gif)

#### music_magnetic_field_analyzer 接口

下载音乐磁场的音乐

通过爬虫爬取页面的数据进行下载

url: 音乐磁场链接

directory: 选择不同目录进行存放

```http
POST http://localhost:8888/music/magnetic/field/download  
Content-Type: application/json  

{  
    "url": "https://www.hifini.com/thread-4284.htm",    "directory": "favorite"}  
```

成功响应  

```json5
{  
    "artist_name": "周柏豪",  
    "music_url": "get_music.php?key=sHFKPlODpcWKT+8xzWMHKJ2nR8NkDo1z/xmSSf/+vgcnBATGy2vBJ9DX7E71soNa2+Dg7OwNQA",    "result": "success",    "song_name": "我的宣言"  
}  
```

### CSS 实现文字渐变色

https://www.jianshu.com/p/3a5bbfbf5957

### 太极图案绘制

思路使用

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_Yzg079gImK.png)

通过边框画出一个圆

再使用 before after 伪元素画出两个圆

覆盖到中间, 通过重叠组合画出一个太极的图案

[前端太极图怎么用一个盒子写出？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/386932078)

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_piP0FtY5QB.png)

```html
<body>
    <div class="box"></div>
</body>
```

css

```css
body {
 background-color: #668;
        }

 .box {
 position: relative;
 margin: 0 auto;
 width: 100px;
 height: 200px;
 background-color: black;
 border-right: 100px solid white;
 border-radius: 50%;
        }

 .box::before {
 content: "";
 position: absolute;
 left: 45px;
 width: 10px;
 height: 10px;
 border-radius: 50%;
 background-color: white;
 border: 45px solid black;
        }

 .box::after {
 content: "";
 position: absolute;
 left: 45px;
 bottom: 0px;
 width: 10px;
 height: 10px;
 border-radius: 50%;
 background-color: black;
 border: 45px solid white;
        }
```

### 斗罗大陆

#### 唐三招式

玄天六奥义：控鹤擒龙，暗器百解，鬼影迷踪，玄玉手，玄天功，紫极魔瞳。

---

昊天锤　　乱披风（昊天宗官方魂技）九九归一、黑龙升天、孤注一掷、大须弥锤、昊天九决 　　大须弥锤奥义：炸环、须弥凌天 　　自创魂技：乱披风之舞 昊天飞锤 蓝银皇　　（先为普通蓝银草，在凝结第五魂环时由蓝银皇血统觉醒）10个魂环：9红1蓝金 　　第一魂技：缠绕；未知 　　第二魂技：寄生；未知 　　第三魂技：蛛网束缚；未知 　　第四魂技：蓝银囚笼，变异魂技：蓝银突刺； 　　第五魂技：蓝银霸皇枪；未知 　　第六魂技：（原）虚无；爆杀八段摔（现）未知 　　第七魂技：蓝银真身；未知 　　第八魂技：蓝银邪魔镜之灭；蓝银虎鲸魔之摄 　　第九魂技：蓝银天青龙之魂；蓝银青龙缠之韧 　　昊天锤 9个魂环： 8红1赤金 　　铭刻有杀神领域(后进化） 　　第一魂环魂技：泰坦之锤（强攻）大地之力（辅助） 　　第二-五魂技：未知 　　第六魂技：大地蚁皇斩 ；未知 　　第七魂技：昊天真身 ；未知 　　第八魂技：千均壁垒 （文中提到十万年魂环却只出产了这一个魂技） 　　第九魂技：无
　　【黄金十三戟】 　　【第一式】【无定风波】 　　限制性神技，在一定时间内封印住敌方，最高封印时间八秒，最低不少于三秒 　　【第二式】【千载空悠】 　　群攻性神技，曾重创6名封号斗罗 　　【第三式】【一去不返】 　　单攻性神技，重创比比东 　　【第十式】【海之阳】 　　治疗性神技，增加能量恢复速度 　　【第十三式】【身戟合一，斗转星移】 　　单攻性神技，打碎神级千仞雪的拼命一击，将之重创 　　【十三合一】【海神的黄昏】 　　唐三最强奥义，神戟一出，毁天灭地 　　【神技】【海神，吞噬】 　　【神技】【修罗，审判】 　　【神技】【双神共存】 　　小舞与唐三融合，唐三可发动修罗神力 　　【神技】【碧波，海神，无尽蔚蓝】
　　外附魂骨　　海神八翼（击杀人面魔蛛兽获得，分三阶段进化，进化前为八蛛矛） 　　技能：吞噬，腐蚀性剧毒，吞噬金丝（吞噬升级，金丝无视攻击，附带毒性），过滤（吞噬的魂力） 头部魂骨　　精神凝聚之智慧头骨（后名瀚海头骨，武魂殿奖励魂骨之一，与瀚海乾坤罩融合。） 　　技能：瀚海护身罩，乾坤定神罩，瀚海狂澜，乾坤破魔，紫极神光 　　效果：提升精神力 右臂魂骨　　柔骨魅兔右臂骨（小舞献祭时唐三得到，后为复活小舞而剥离） 　　技能：瞬移、无敌金身 　　天青牛蟒右臂骨（天青牛蟒献祭得到） 　　技能：天青迟钝神爪；天青寂灭雷霆。 左臂魂骨　　泰坦巨猿左臂骨（泰坦巨猿献祭得到） 　　技能：重力泥沼；泰坦苍穹破。 左腿魂骨　　邪魔虎鲸王左腿骨（击杀邪魔虎鲸王得到） 　　技能：虎鲸邪魔斧；虎鲸碎牙斩。 右腿魂骨　　蓝银帝皇右腿骨（唐三母亲蓝银皇遗物） 　　技能：飞翔；野火烧不尽，春风吹又生 　　躯干魂骨 　　深海魔鲸王躯干魂骨（击杀深海魔鲸王得到） 　　技能：未知 魂骨套装技能　　效果：右腿，右臂（小舞），外附，头部的四块魂骨相连，形成盔甲。能力不明，每次使用耗费1/3魂力。魂骨套装并不稳定。
　　领域　杀神领域 　　杀戮之都百战胜，地狱之路勇闯得 　　【增加气势】削弱对方实力 　　【杀戮突击】杀神领域以直线方向释放，锁定一个目标后，速度提升百分之百，攻击力提升百分之三十。 　　【领域进化】为修罗地狱：杀气在修罗地狱中会成实质，变成恐怖的攻击。可发动技能：修罗旋圆杀阵 　　【修罗现身】 能力发挥至强杀气并把杀气转化为攻击力 　　蓝银领域　 　　传承蓝银皇获得 　　隔绝外界不良影响和声音 　　控制领域范围内的所有蓝银草使用技能，现在只能使用缠绕3领域探查。以领域为媒，在领域范围内配合精神力探查周围的信息 　　蓝银领域第三次进化技能，森罗万象。附带效果，同化、压制。压制技能会将武魂属性全部压制百分之十，包括魂力释放也会降低百分之十。在领域中停留的时间越长，压制的效果也会随之增强 ，吞噬金丝。 　　蓝银领域终极进化，海纳百川 在拥有蓝银草的地方，领域能够将所有蓝银草地生命力转化为蓝银帝皇所需要地任何形态能量，补充自身，只要还有蓝银草，那么，蓝银帝皇的能量就不会枯竭。这能量转化可以是生命力，也可以是魂力或者精神力。这最终极地领域效果无疑令蓝银帝皇在森林中与同等级对手战斗时能够处于无敌状态。 　　海神领域 　　传承海神获得 　　效果：通过凝聚海神领域来获得大海的力量，补充自己的魂力 　　【碧波、海神、无尽蔚蓝】将大海之力转化为攻击之力