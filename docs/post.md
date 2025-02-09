# 文章

博客最重要的就是给访客查看文章了。优秀的文章需要配合优秀的访问体验才能恢复最大的价值。只给自己做的博客是没有出路的。

## 外挂标签

通过外挂标签可以让文章的markdown插件渲染出你自己自定义的样式。使用外挂标签可以避免每次使用样式都要使用大量html代码的问题。

[Tag Plugins Plus](https://akilar.top/posts/615e2dec/) - Akilar

> 已发布插件版，具体配置方案请参看插件文档。

[作品推荐卡片- butterfly主题标签外挂](https://blog.leonus.cn/2022/butterflyTag.html) - Leonus

> 看到很多博客都有追番、豆瓣之类的页面，我也手痒想搞一个，不过我又不是很喜欢豆瓣的那个插件。
>
> - 一是豆瓣作品限制大自由度不高。
> - 二是样式也不是很满意，修改的话也很费时间。
>
> 然后我就想到写一个标签外挂来实现这个效果。
> 趁昨天下午休息的时间完成了大部分功能（包括 [藏宝阁](https://blog.leonus.cn/stars/) 页面，毕竟写标签外挂就是为了这个页面服务的），今天进行了一些完善并发布此教程。

## 新的页面组件

魔改作者自己创造的页面组件，原主题并没有改功能。

[butterfly文章页面上下篇按钮UI调整](https://akilar.top/posts/b77e1c58/) - Akilar

> 我试图通过将文章底部的按钮改至左右两侧，类似翻页键，同时添加悬停动作，通过css对兄弟相邻元素的hover监测来控制显隐，悬停按钮时在页面正中显示对应文章卡片。
>
> 首先要解决的是按钮显示问题，如果是常显，有可能遮盖正文内容，尤其是手机端应该不会有足够的位置。所以尝试通过设置滚动事件监听，在页面滚动至原本上下页翻页的位置，也就是正文刚好读完的时候，才显示按钮。虽然会遮盖一部分评论，不过可以把按钮调整到正中，手机端调扁一点，毕竟不是正文的话，也不用太纠结遮盖问题。

[给博客添加个性名片](https://akilar.top/posts/5ff2da64/) - Akilar

> 为什么要做这个个性名片？
> 因为再不把加群信息放在醒目位置，我的博客群就要彻底变成冰老师的售后群了。

[信笺样式留言板](https://akilar.top/posts/e2d3c450/) - Akilar

> 留言板动态弹出信封样式

[Bilibili Dynamic Banner](https://akilar.top/posts/780a2cea/) - Akilar

> B站同款动态Banner

[SAO UI Plan -- Ranklist](https://akilar.top/posts/b7126498/) - Akilar

> 把SAO Utils Web也归入了 SAO UI PLAN ，复现SAO 风格界面算是告一段落啦。
>
> 这个榜单一开始是准备拿来当做打赏榜单的。可是临到头却发现没人打赏。（疯狂暗示）所以就只能拿来充当友链排行啦。

[让butterfly主题支持文章点赞](https://yisous.xyz/posts/1b850b16/) - LYX

> 众所周知，b站的视频有点赞功能，这个功能能够充分地体现出观众们对视频的喜爱程度和白嫖率。
>
> 同样，我们可以在博客中添加这个功能，后续我可能也会增加一个收藏功能（或者说是直接整一个账号登录？用静态网页搞登录作死的博主是屑）
>

[Github样式代码高亮并上传到gist](https://blog.xlenco.top/posts/8fce.html) - Xlenco

> 本教程，可以让你在hexo中体验到github的代码高亮，总体来说十分的好看。

[butterfly文章顶部添加波浪效果](https://anzhiy.cn/posts/98c4.html) - 安知鱼

> 大功告成，需要注意的是 css 中`fill属性`可以控制波浪颜色，最好使其中一个颜色与背景颜色一致，否则会显的有点奇怪。

[Hexo博客添加站外跳出提示页面](https://www.yichkhun.com/p/9b8131b0.html) - 苏易困

> 信大家在逛一些论坛、博客的时候，点到一些要跳转第三方的超链接时，都会跳出一个类似的提示页面

## 定制组件

原主题已有功能的修改和深度定制。

[生成封面图片主色来作为文章封面顶图](https://blog.zhheo.com/p/c86d8f1f.html) - 张洪Heo

> 本教程只介绍Hexo下的Butterfly主题的方案，其他可供参考，通用性强。
> 需要七牛云图床，其他图床需能提供纯色API，使用方法雷同（使用js计算可能涉及到跨域等诸多问题）

[Butterfly 推荐文章增加描文章描述](https://blog.eurkon.com/post/3d2664bb.html) - Eurkon

> 本文用于 butterfly 魔改，博主没有测试是否适配于其他主题，以及自定义样式 CSS 可能需要一定的前端知识进行优化。 _config.butterfly.yml 配置文件可修改显示 文字描述（文章 description 属性）还是 文章内容（默认截取 500 字），以及推荐文章数量。

[自定义代码配色](https://butterfly.js.org/posts/b37b5fe3/) - Jerry

> 在Butterfly-安装文档-三-主题配置中已经介绍瞭如何使用自定义代码配色。
>
> 这篇文章是使用自定义代码配色的实例教程。

[版权声明美化](https://akilar.top/posts/8322f8e6/) - Akilar

> 基于@Nesxc同学的项目修改。仅做微调。补齐了两个配置项的默认项。精简配置过程。针对文字偏移做了自适应优化。

[源计划-方舟：标题样式修改](https://akilar.top/posts/3e4b194c/) - Akilar

> 这个新代号，源计划-方舟，是我最近心血来潮又挖的一个大坑。
> 为了让他的风格能够和谐的形成一个整体，我准备一个个版块重写过去。争取让整个博客的版块都大换血。时间可能会拖得很长。追更的可以先去看试做那篇文章：[赛博朋克风格主题样式试做](https://akilar.top/posts/9a853ad7/)，挑些过渡方案凑活着用。
> 只有我觉得满意的试做才会单独发文。

[文章meta显示位置](https://meuicat.com/blog/42/#%E6%96%87%E7%AB%A0meta%E6%98%BE%E7%A4%BA%E4%BD%8D%E7%BD%AE) - 爱吃肉的猫

> 给文章顶部meta添加一个发表位置（自定）
> 借鉴了洪佬的灵感

## 评论

博客已有的评论功能修改。

### 评论美化

[twikoo评论块气泡风格魔改美化](https://akilar.top/posts/d99b5f01/) - Akilar

> 要对twikoo进行魔改，同时又不破坏评论结构。那我首先想到的是用js附加class，然后针对新增的class进行样式覆写。
>
> 但是在尝试过程中，发现不论我如何推迟附加class的js执行时间，它永远早于twikoo评论加载。~~原因还在排查……才怪咧，我它喵直接跑去提issue，才不要在这排查~~

[Valine Visitor Tag Beautify](https://akilar.top/posts/d2222705/) - Akilar

> Valine评论添加[博主,小伙伴,访客]标签

[Butterfly comment board beautify](https://akilar.top/posts/397b8b90/) - Akilar

> 评论区侧栏弹出式美化方案

[Twikoo腾讯云函数部署转移到私有部署](https://blog.zhheo.com/p/99d020fe.html) - 张洪Heo

> 对于腾讯云毫无契约精神的行为表示强烈的抗议和严厉的谴责。
>
> 大概是去年领取到了腾讯云开发的五年期限免费使用权，可是腾讯云直接就毁约，以「计费方式调整」为由，强制要求现有用户退款结束服务。当然我相信是因为「所有解释权归腾讯所有」，腾讯云才可以肆无忌惮的毁约和取消订单。
>
> 作为一个个人的小用户，腾讯云直接以劝退的方式来行动。维权成本那么高，相信腾讯云也觉得没多少人愿意去为了这东西维权吧。

[批量替换旧的Twikoo表情包地址，修复数据库里旧的jsdelivr链接](https://blog.zhheo.com/p/7469b3de.html) - 张洪Heo

> 之前sticker-heo一直使用的是jsdelivr链接，但是因为近期jsdelivr已经彻底失效，近一个多月以来本项目已经换了三家cdn了。更换cdn确实提高了访问速度，但是旧版的sticker-heo表情仍然是不可访问的状态。
>
> 这里介绍一下如何更改旧表情链接地址方法，其他评论系统大同小异，这里只介绍twikoo。

[Twikoo魔改样式分享-博客评论系统的定制皮肤](https://blog.zhheo.com/p/8b1dde4c.html) - 张洪Heo

> 魔改了一下Twikoo的样式，拿出来分享一下，喜欢的可以搞一手。推荐用官方的。

[给你的评论添加一个输入提醒吧](https://blog.leonus.cn/2022/inputAlert.html) - Leonus

> 适用于twikoo，其他评论系统改一下应该也可以使用
>
> 实现很简单，全是css，直接在自定义css文件内添加即可，不会使用自定义css文件的看这个教程：Hexo博客添加自定义css和js文件

[评论表情包放大功能，超实用](https://blog.leonus.cn/2022/owo-big.html) - Leonus

> 最近给评论区加了一些表情包，而有的表情包是带文字的。
> 在评论时这些表情包因为太小会导致看不清具体内容。
> 这就很影响使用了，你不知道它是什么意思的话怎么会去使用这个表情包。
> 于是我就写了这个表情放大的功能。

[Hexo-Butterfly Twikoo评论区美化](https://www.cxl2020mc.top/post/Hexo-Butterfly-Twikoo%E8%AF%84%E8%AE%BA%E5%8C%BA%E7%BE%8E%E5%8C%96/) - 陈鑫磊

> 前几天，在给AG bot（作者的机器人）写原神功能的截图网页，因为作者不会css，所以开着教程网页，一边请教别人一边写网页。
>
> 直到昨天，我终于写完了，虽然不是特别好看。但好歹是自己写的，写完之后，感觉我这个小白也要变成小黑了。


[Twikoo评论区调整美化](https://meuicat.com/blog/38/#%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9F%9F) - 爱吃肉的猫

> 调整了`Twikoo`评论区的样式
> 调整在夜间模式下管理的显示问题

### 邮件模板

[Twikoo评论回复邮件模板：Acrylic Mail 粉](https://blog.zhheo.com/p/169a1abb.html) - 张洪Heo

> 今天定制了一下邮件的回复样式，之前Twikoo默认的比较简洁，我做了一个和我博客比较相近的样式。定制了一下。
>
> 有需要的小伙伴可以自取。

### 部署方法

[Twikoo私有部署记录](https://blog.leonus.cn/2022/twikoo.html) - Leonus

> 使用vercel部署的twikoo也有两个月的时间了，不得不说确实很不错。
> 既然不错那么为什么要换呢？
> 主要是因为我写的一个获取评论总数的api，这个api的速度真的是一言难尽。
> 快的时候3s多一点，慢的时候10s甚至几十秒都有可能。
> 我也不清楚这是什么原因（排除代码问题，就只是获取数据慢），评论获取速度都还挺快，就这一个慢的离谱。

[Twikoo 私有化部署第一弹：基础篇](https://tokiame.cn/2022/10/04/Twikoo%E7%A7%81%E6%9C%89%E5%8C%96%E9%83%A8%E7%BD%B2%E7%AC%AC%E4%B8%80%E5%BC%B9%EF%BC%9A%E5%9F%BA%E7%A1%80%E7%AF%87/) - Asurin

> Twikoo 私有化部署第一弹：基础篇

[Twikoo 评论定时备份方案](https://zhsher.cn/posts/33638/) - 张时贰

> Hexo 博客与其它框架不同，它是前后端分离的，上个月在博客群看到了恶意刷评论的站点，这对于 Hexo 是致命的，解决办法就是勤备份，所以在八月初我就向作者提出了建议并附上方案 Issue #429 · imaegoo/twikoo ，原本想整理发出来，但一拖再拖，方案也迭代了三次做了一些优化。最近看了 @心流的如何申请一个永久免费的 Mongodb 数据库又想起来这回事了，于是优化代码、构建仓库、整理此文以及为作者附新方案
