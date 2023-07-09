> 记住你的价值，它不因外观的不雅而贬值，是金子总有发光的一天

# front_road

前端之路开启了

[Java/前端/Go/大数据/C学习路线分享 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv14023271?spm_id_from=333.999.0.0)

在项目中磨练自己

[freecodecamp](https://www.freecodecamp.org/learn)


### 随机歌词时光机
初版随机歌词时光机
点击 new quote 更换背景按钮文字颜色
![random-quote-machineV1.0](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/random-quote-machine.gif)


后台做了一个接口, 返回随机歌词进行显示
![random-quote-machineV2.0](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/random_quote_song_lrcs.gif)

#### random-quote-machine 接口
原本是打算做一个返回随机名言的接口
随机名言还要使用爬虫进down一些名言警句下来
还有一个想法是
从 BrainyQuote 这个网站爬虫抓取每天的名言警句
[BrainyQuote-quote_of_the_day](https://www.brainyquote.com/quote_of_the_day)

但是突然间想做一个随机歌词的接口也不错
毕竟有一部分lrc文件了

从文件夹 E:/BaiduSyncdisk/music/lyrics 中
读取lrc 文件后
提取文件中的连续几句作为返回

访问 [获取歌词](http://localhost:8888/random/lrcs)
就可以得到
```json5
[
    {
        "author": "林宥嘉",
        "lrcs": [
            "",
            "",
            ""
        ],
        "song": "浪费"
    },
    {
        "author": "郭静",
        "lrcs": [
            "我的爱会攀上窗台盛放",
            "打开窗你会看到悲伤融化",
            "你会闻到幸福晴朗的芬芳"
        ],
        "song": "心墙"
    },
    {
        "author": "胡彦斌",
        "lrcs": [
            "曾爱的贪得无厌",
            "也要为过去留一些尊严",
            "散了我们就干脆一点"
        ],
        "song": "你要的全拿走"
    },
    {
        "author": "周慧敏",
        "lrcs": [
            "伴我星夜里幻想",
            "方知不用太紧张",
            "没法隐藏这份爱"
        ],
        "song": "最爱"
    },
    {
        "author": "林宥嘉",
        "lrcs": [
            "我跟谁变得亲密 谁逐渐离我远去",
            "华丽演出共襄盛举 唯有你的背影",
            "友情客串却留下刻骨铭心的回忆"
        ],
        "song": "神秘嘉宾"
    },
    {
        "author": "洪卓立",
        "lrcs": [
            "我未有想过绝望看她走",
            "「分手」两字情绝不留",
            "为爱伤心的声线 变了怀旧"
        ],
        "song": "弥敦道"
    },
    {
        "author": "林志炫",
        "lrcs": [
            "Right now 闭上眼用心去感受",
            "有一个声音 它说爱情 没离开过",
            ""
        ],
        "song": "没离开过"
    },
    {
        "author": "Tank",
        "lrcs": [
            "等待良人归来那一刻 眼泪为你唱歌",
            "在我离你远去那一天 蓝色的雨下在我眼前",
            "骄傲的泪 不敢弃守我眼睛"
        ],
        "song": "三国恋"
    },
    {
        "author": "林峰",
        "lrcs": [
            "前事最怕有人提起 就算怎么伸尽手臂",
            "我们亦有一些距离",
            "我情愿我狠心憎你 我还在记忆中找你"
        ],
        "song": "爱在记忆中找你"
    }
]
```


