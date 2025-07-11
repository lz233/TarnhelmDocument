# 规则库

在此处寻找你想要的规则，请善用页面内查找功能。

已安装应用的情况下点击超链接（规则标题）即可完成规则的导入。导入前请确保使用较新版本的客户端。

你可以通过提交 PR 到[这个文件](https://github.com/lz233/TarnhelmDocument/blob/main/docs/rules.md)帮助我们完善规则。贡献过程中，请注意格式和**按照拼音首字母排序**。

## 参数规则

### [Apple Music](tarnhelm://rule?parameter=eyJhIjoiQXBwbGUgTXVzaWMiLCJlIjoibXVzaWMuYXBwbGUuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6Im1pdGlhbjIzMyJ9)

```
域名：music.apple.com
模式：白名单
参数：
作者：mitian233
输入：https://music.apple.com/jp/album/ヒミツ恋ゴコロ/1629870185?i=
输出：https://music.apple.com/jp/album/ヒミツ恋ゴコロ/1629870185
```

### [百度贴吧分享](tarnhelm://rule?parameter=eyJhIjoi55m%2B5bqm6LS05ZCnIiwiZSI6InRpZWJhLmJhaWR1LmNvbSIsImYiOjAsImciOlsiIl0sImQiOiLpnZLloqgifQ%3D%3D)

```
域名：tieba.baidu.com
模式：白名单
参数：
作者：青墨
输入：https://tieba.baidu.com/p/7989575070?share=&fr=&see_lz=&share_from=&sfc=&client_type=&client_version=&st=&is_video=&unique=
输出：https://tieba.baidu.com/p/7989575070
```

### 哔哩哔哩

#### [动态分享](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp5Yqo5oCB5YiG5LqrIiwiZSI6InQuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IumdkuWiqCJ9)

```
域名：t.bilibili.com
模式：白名单
参数：
作者：青墨
输入：https://t.bilibili.com/697612442479362072?share_source=&share_medium=
输出：https://t.bilibili.com/697612442479362072
```

#### [会员购分享](tarnhelm://rule?parameter=eyJhIjoi5Lya5ZGY6LSt5YiG5LqrIiwiZSI6Im1hbGwuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyJub1RpdGxlQmFyIiwiaXRlbXNJZCJdLCJkIjoi6Z2S5aKoIn0%3D)

```
域名：mall.bilibili.com
模式：白名单
参数： 
    noTitleBar
    itemsId
作者：青墨
输入：https://mall.bilibili.com/detail.html?noTitleBar=1&loadingShow=&from=&pageType=&msource=history&outsideMall=&itemsId=10082880
输出：https://mall.bilibili.com/detail.html?noTitleBar=1&itemsId=10082880
```

#### [个人界面分享](tarnhelm://rule?parameter=eyJhIjoi5Liq5Lq655WM6Z2i5YiG5LqrIiwiZSI6InNwYWNlLmJpbGliaWxpLmNvbSIsImYiOjAsImciOlsiIl0sImQiOiLpnZLloqgifQ%3D%3D)

```
域名：space.bilibili.com
模式：白名单
参数：
作者：青墨
输入：https://space.bilibili.com/1265680561?share_medium=&share_source=&bbid=&ts=
输出：https://space.bilibili.com/1265680561
```

#### [预约分享](tarnhelm://rule?parameter=eyJhIjoi55u05pKt6aKE57qm5YiG5LqrIiwiZSI6Ind3dy5iaWxpYmlsaS5jb20iLCJmIjoxLCJnIjpbImlfdHJhbnNmZXJfbWF0Y2giXSwiZCI6IumdkuWiqCJ9)


```
域名：www.bilibili.com
模式：黑名单
参数：i_transfer_match
作者：青墨
输入：https://www.bilibili.com/h5/lottery/result?lottery_id=106993&business_type=10&business_id=909786&i_transfer_match=
输出：https://www.bilibili.com/h5/lottery/result?lottery_id=106993&business_type=10&business_id=909786
```

#### [直播分享](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp55u05pKt6Ze0IiwiZSI6ImxpdmUuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IumdkuWiqCJ9)

```
域名：live.bilibili.com
模式：白名单
参数：
作者：青墨
输入：https://live.bilibili.com/22603245?broadcast_type=&is_room_feed=
输出：https://live.bilibili.com/22603245
```

### [Disney+](tarnhelm://rule?parameter=eyJhIjoiRGlzbmV5KyIsImUiOiJ3d3cuZGlzbmV5cGx1cy5jb20iLCJmIjowLCJnIjpbIiJdLCJkIjoibWl0aWFuMjMzIn0%3D)

```
域名：www.disneyplus.com
模式：白名单
参数：
作者：mitian233
输入：https://www.disneyplus.com/series/money-makes-the-world-go-round/14BIEgqbPnKP?sharesource=Android
输出：https://www.disneyplus.com/series/money-makes-the-world-go-round/14BIEgqbPnKP
```

### [DLsite](tarnhelm://rule?parameter=eyJhIjoiRExzaXRlIiwiZSI6Ind3dy5kbHNpdGUuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6Ik1hdGVDaGFuIn0%3D)

```
域名：www.dlsite.com
模式：白名单
参数：
作者：MateChan
输入：https://www.dlsite.com/soft/work/=/product_id/VJ014866.html/?utm_medium=affiliate&utm_campaign=work_link&utm_content=VJ014866&utm_source=none
输出：https://www.dlsite.com/soft/work/=/product_id/VJ014866.html
```


### [恩山无线论坛](tarnhelm://rule?parameter=eyJhIjoi5oGp5bGx5peg57q%2F6K665Z2bIiwiZSI6Ind3dy5yaWdodC5jb20uY24iLCJmIjoxLCJnIjpbImF1dGhvcmlkIiwiZXh0cmEiXSwiZCI6Im91czUwICJ9)

```
域名：www.right.com.cn
模式：黑名单
参数：
    authorid
    extra
作者：ous50
输入：https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=4128509&extra=&authorid=328458&page=1
输出：https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=4128509&page=1
```

### [Google Search](tarnhelm://rule?parameter=eyJhIjoiR29vZ2xlIFNlYXJjaCIsImUiOiJ3d3cuZ29vZ2xlLmNvbSIsImYiOjAsImciOlsicSJdLCJkIjoiTWF0ZUNoYW4ifQ%3D%3D)

```
域名：www.google.com
模式：白名单
参数：q
作者：MateChan
输入：https://www.google.com/search?q=Tarnhelm&oq=Tarnhelm&sourceid=chrome-mobile&ie=UTF-8
输出：https://www.google.com/search?q=Tarnhelm
```

### [即刻动态](tarnhelm://rule?parameter=eyJhIjoi5Y2z5Yi75Yqo5oCBIiwiZSI6Im0ub2tqaWtlLmNvbSIsImYiOjAsImciOlsiIl0sImQiOiJUQ09UQyJ9)

```
域名：m.okjike.com
模式：白名单
参数：
作者：TCOTC
输入：https://m.okjike.com/originalPosts/66421f6c19d274e296473516?s=
输出：https://m.okjike.com/originalPosts/66421f6c19d274e296473516
```

### [Netflix](tarnhelm://rule?parameter=eyJhIjoiTmV0ZmxpeCIsImUiOiJ3d3cubmV0ZmxpeC5jb20iLCJmIjowLCJnIjpbIiJdLCJkIjoibWl0aWFuMjMzIn0%3D)

```
域名：www.netflix.com
模式：白名单
参数：
作者：mitian233
输入：https://www.netflix.com/tw/title/81565554?s=&trkid=&t=&vlang=&clip=
输出：https://www.netflix.com/tw/title/81565554
```

### [QQ 空间 (h5)](tarnhelm://rule?parameter=eyJhIjoiaDUgUVEg56m66Ze0IiwiZSI6Img1LnF6b25lLnFxLmNvbSIsImYiOjAsImciOlsic2hhcmV0YWciLCJhcHBpZCJdLCJkIjoiUFJPLTI2ODQifQ%3D%3D)

```
域名：h5.qzone.qq.com
模式：白名单
参数：
    sharetag
    appid
作者：PRO-2684
输入：https://h5.qzone.qq.com/ugc/share/?sharetag=&loginfrom=&jumptoqzone=&subtype=&ciphertext=&blog_photo=&g=&res_uin=&cellid=&subid=&bp1=&bp2=&bp7=&appid=&g_f=
输出：https://h5.qzone.qq.com/ugc/share/?sharetag=&appid=
```

### [QQ 频道](tarnhelm://rule?parameter=eyJhIjoiUVEg6aKR6YGTIiwiZSI6InF1bi5xcS5jb20iLCJmIjowLCJnIjpbImludml0ZUNvZGUiXSwiZCI6IumdkuWiqCJ9)

```
域名：qun.qq.com
模式：白名单
参数：inviteCode
作者：青墨
输入：https://qun.qq.com/qqweb/qunpro/share?_wv=&_wwv=&appChannel=&inviteCode=2dsmVd&businessType=&from=&biz=
输出：https://qun.qq.com/qqweb/qunpro/share?inviteCode=2dsmVd
```

### [全民K歌](tarnhelm://rule?parameter=eyJhIjoi5YWo5rCRa%2BatjCIsImUiOiJzdGF0aWMtcGxheS5rZy5xcS5jb20iLCJmIjowLCJnIjpbInMiXSwiZCI6IumdkuWiqCJ9)

```
域名：static-play.kg.qq.com
模式：白名单
参数：s
作者：青墨
输入：https://static-play.kg.qq.com/node/fF4a3J7LZP/play_v2?s=xxxxxx&shareuid=xxxxxx&abtype=13&shareDescABType=4&topsource=xxxxxx&pageId=poplayer
输出：https://static-play.kg.qq.com/node/fF4a3J7LZP/play_v2?s=xxxxxx
```

### [Reddit](tarnhelm://rule?parameter=eyJhIjoiUmVkZGl0IiwiZSI6Ind3dy5yZWRkaXQuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IkRyZWlzdGEifQ%3D%3D)

```
域名：www.reddit.com
模式：白名单
参数：
作者：Dreista
输入：https://www.reddit.com/r/rarekumikos/comments/y6s30c/ponytail_kumiko/?utm_source=&utm_medium=&utm_name=&utm_term=&utm_content=
输出：https://www.reddit.com/r/rarekumikos/comments/y6s30c/ponytail_kumiko/
```

### [Spotify](tarnhelm://rule?parameter=eyJhIjoiU3BvdGlmeSIsImUiOiJvcGVuLnNwb3RpZnkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6Imx6MjMzIn0%3D)

```
域名：open.spotify.com
模式：白名单
参数：
作者：lz233
输入：https://open.spotify.com/track/1l3c3YMXOpvXes5Vc3YsUs?si=&utm_source=
输出：https://open.spotify.com/track/1l3c3YMXOpvXes5Vc3YsUs
```

### [淘宝/闲鱼](tarnhelm://rule?parameter=eyJhIjoi5reY5a6dXC%2Fpl7LpsbwiLCJlIjoibS50Yi5jbiIsImYiOjAsImciOlsiIl0sImQiOiJsejIzMyJ9)

```
域名：m.tb.cn
模式：白名单
参数：
作者：lz233
输入：https://m.tb.cn/h.fBDkd2S?tk=
输出：https://m.tb.cn/h.fBDkd2S
```

### [腾讯视频](tarnhelm://rule?parameter=eyJhIjoi6IW%2B6K6v6KeG6aKRIiwiZSI6Im0udi5xcS5jb20iLCJmIjowLCJnIjpbInZpZCJdLCJkIjoicmV0dXJuTOOAgemdkuWiqCJ9)

```
域名：m.v.qq.com
模式：白名单
参数：vid
作者：returnL、青墨
输入：http://m.v.qq.com/x/cover/x/mzc00200fr1ry1o/m00441h6knj.html?playtime=&url_from=&second_share=&share_from=
输出：http://m.v.qq.com/x/cover/x/mzc00200fr1ry1o/m00441h6knj.html
输入：https://m.v.qq.com/x/m/play?vid=p3353dbvy6v&cid=&url_from=share&second_share=0&share_from=copy
输出：https://m.v.qq.com/x/m/play?vid=p3353dbvy6v
```

### [TikTok](tarnhelm://rule?parameter=eyJhIjoiVGlrdG9rIiwiZSI6Ind3dy50aWt0b2suY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6Ik1hdHRpcyJ9)

```
域名：www.tiktok.com
模式：白名单
参数：
作者：Mattis
输入：https://www.tiktok.com/@stefan_jmk1/video/7392345125495524641?_r=1&_t=XXXXXXXXXXX
输出：https://www.tiktok.com/@stefan_jmk1/video/7392345125495524641
```

### [微信读书](tarnhelm://rule?parameter=eyJhIjoi5b6u5L%2Bh6K%2B75LmmIiwiZSI6IndlcmVhZC5xcS5jb20iLCJmIjowLCJnIjpbInYiXSwiZCI6Imx6MjMzIn0%3D)

```
域名：weread.qq.com
模式：白名单
参数：v
作者：lz233
输入：https://weread.qq.com/book-detail?type=&senderVid=&v=b2b3283071f3f63db2b307d&wtheme=&wfrom=&wvid=&scene=
输出：https://weread.qq.com/book-detail?v=b2b3283071f3f63db2b307d
```

### [微信公众号文章](tarnhelm://rule?parameter=eyJhIjoi5b6u5L%2Bh5YWs5LyX5Y%2B35paH56ugIiwiZSI6Im1wLndlaXhpbi5xcS5jb20iLCJmIjowLCJnIjpbIl9fYml6IiwibWlkIiwiaWR4Iiwic24iXSwiZCI6IlBSTy0yNjg0In0%3D)

```
域名：mp.weixin.qq.com
模式：白名单
参数：
    __biz
    mid
    idx
    sn
作者：PRO-2684
输入：https://mp.weixin.qq.com/s?__biz=MjM5OTY2MzgzNQ==&mid=2247507482&idx=1&sn=a347701b1b4e6642dcbb317035153bbb&chksm=&mpshare=&scene=&srcid=&sharer_sharetime=&sharer_shareid=#rd
输出：https://mp.weixin.qq.com/s?__biz=MjM5OTY2MzgzNQ==&mid=2247507482&idx=1&sn=a347701b1b4e6642dcbb317035153bbb
```

### [微店分享](tarnhelm://rule?parameter=eyJhIjoi5b6u5bqXIiwiZSI6ImsueW91c2hvcDEwLmNvbSIsImYiOjAsImciOlsiIl0sImQiOiJraXJpdG8ifQ%3D%3D)

```
域名：k.youshop10.com
模式：白名单
参数：
作者：kirito
输入：https://k.youshop10.com/atHaOQyq?share_relation=&a=&wfr=
输出：https://k.youshop10.com/atHaOQyq
```

### [小红书](tarnhelm://rule?parameter=eyJhIjoi5bCP57qi5LmmIiwiZSI6Ind3dy54aWFvaG9uZ3NodS5jb20iLCJmIjowLCJnIjpbIiJdLCJkIjoiUnRZa2sifQ%3D%3D)

```
域名：www.xiaohongshu.com
模式：白名单
参数：
作者：RtYkk
输入：https://www.xiaohongshu.com/discovery/item/63df94a9000000001d01eeee?app_platform=&app_version=&share_from_user_hidden=&type=&xhsshare=CopyLink&appuid=&apptime=
输出：https://www.xiaohongshu.com/discovery/item/63df94a9000000001d01eeee
```

### YouTube

#### [一般链接](tarnhelm://rule?parameter=eyJhIjoiWW91VHViZeS4gOiIrOmTvuaOpSIsImUiOiJ3d3cueW91dHViZS5jb20iLCJmIjowLCJnIjpbInYiXSwiZCI6Ik1vc25leSJ9)

```
域名：www.youtube.com
模式：白名单
参数：v
作者：Mosney
输入：https://www.youtube.com/watch?v=U6RTLTPy6qA&list=TLPQMDgxMTIwP_0rIqopMbPg&index=2
输出：https://www.youtube.com/watch?v=U6RTLTPy6qA
```

#### [分享短链](tarnhelm://rule?parameter=eyJhIjoiWW91VHViZeWIhuS6q%2BefremTviIsImUiOiJ5b3V0dS5iZSIsImYiOjAsImciOlsiIl0sImQiOiJNb25zZXkgIn0%3D)

```
域名：youtu.be
模式：白名单
参数：
作者：Mosney
输入：https://youtu.be/-qqWAo9mpP4?si=jbxjumk4kQ
输出：https://youtu.be/-qqWAo9mpP4
```

### 知乎

#### [知乎](tarnhelm://rule?parameter=eyJhIjoi55%2Bl5LmOIiwiZSI6Ind3dy56aGlodS5jb20iLCJmIjowLCJnIjpbIiJdLCJkIjoibHoyMzMifQ%3D%3D)

```
域名：www.zhihu.com
模式：白名单
参数：
作者：lz233
输入：https://www.zhihu.com/question/621886958/answer/3223202218?utm_psn=
输出：https://www.zhihu.com/question/621886958/answer/3223202218
```

#### [知乎文章](tarnhelm://rule?parameter=eyJhIjoi55%2Bl5LmO5paH56ugIiwiZSI6InpodWFubGFuLnpoaWh1LmNvbSIsImYiOjAsImciOlsiIl0sImQiOiJUQ09UQyJ9)

```
域名：zhuanlan.zhihu.com
模式：白名单
参数：
作者：TCOTC
输入：https://zhuanlan.zhihu.com/p/661689603?utm_psn=
输出：https://zhuanlan.zhihu.com/p/661689603
```

### [作业帮](tarnhelm://rule?parameter=eyJhIjoi5L2c5Lia5biuIiwiZSI6InBsYXQtbWluaWFwcC56dW95ZWJhbmcuY29tIiwiZiI6MCwiZyI6WyJjdWlkIiwiaXNoaXQiXSwiZCI6Im9tZy14dGFvIn0=)

```
域名：plat-miniapp.zuoyebang.com
模式：白名单
参数：
    cuid
    ishit
作者：omg-xtao
输入：https://plat-miniapp.zuoyebang.com/miniapp/share/a114a56e7481c963be1e4e2af47ca000+b2e53b3649d2faceb9caf17c7c305bca7c3dc99125440b67?appId=&uid=&cuid=DE1C58473E8FD9C41CC3C7569E9CA35A%7C0&jzms=&ishit=1
输出：https://plat-miniapp.zuoyebang.com/miniapp/share/a114a56e7481c963be1e4e2af47ca000+b2e53b3649d2faceb9caf17c7c305bca7c3dc99125440b67?cuid=DE1C58473E8FD9C41CC3C7569E9CA35A%7C0&ishit=1
```

### [飞客](tarnhelm://rule?parameter=eyJhIjoi6aOe5a6iIiwiZSI6Ind3dy5mbHllcnQuY29tLmNuIiwiZiI6MCwiZyI6WyIiXSwiZCI6InBwbHVsZWUifQ%3D%3D)

```
域名：www.flyert.com.cn
模式：白名单
参数：
作者：pplulee
输入：https://www.flyert.com.cn/t-4669569-1-1.html?utm_content=thread&utm_term=4669569&utm_medium=share_android&utm_source=copylink&fromuid=xxxx
输出：https://www.flyert.com.cn/t-4669569-1-1.html
```

## 正则规则

### [Amazon Japan](tarnhelm://rule?regex=eyJhIjoiQW1hem9uIEphcGFuIiwiYiI6WyJhbWF6b25cXC5jb1xcLmpwXC8uKlwvZHAiLCJyZWY9LioiXSwiYyI6WyJhbWF6b24uY28uanBcL2RwIiwiIl0sImQiOiJNYXRlQ2hhbiJ9)

```
正则：
    amazon\.co\.jp/.*/dp
    ref=.*
替换：
    amazon.co.jp/dp
    
作者：MateChan
输入：https://www.amazon.co.jp/モンスター-アサヒ飲料-エナジー-355ml×24本/dp/B007V6MQJY/ref=mp_s_a_1_1?crid=1DO2L9OKB2SGH&keywords=魔剤&qid=1665554354&qu=eyJxc2MiOiIyLjAxIiwicXNhIjoiMS4zOSIsInFzcCI6IjEuNDQifQ==&sprefix=魔剤,aps,317&sr=8-1
输出：https://www.amazon.co.jp/dp/B007V6MQJY
```

### 哔哩哔哩

#### [视频分享](tarnhelm://rule?regex=eyJhIjoi5ZOU5ZOp5ZOU5ZOp6KeG6aKR5YiG5LqrIiwiYiI6WyIoaHR0cHxodHRwcyk6XC9cLyhtfHd3dykqLj9iaWxpYmlsaS5jb21cL3ZpZGVvIiwiXFw%2FLioiXSwiYyI6WyJodHRwczpcL1wvd3d3LmJpbGliaWxpLmNvbVwvdmlkZW8iLCIiXSwiZCI6Imx6MjMzIn0%3D)

```
正则：
    (http|https)://(m|www)*.?bilibili.com/video
    \?.*
替换：
    https://www.bilibili.com/video
    
作者：lz233
输入：https://www.bilibili.com/video/BV1Ap4y18751/?p=&spm_id_from=&vd_source=
输出：https://www.bilibili.com/video/BV1Ap4y18751
```

#### [哔哩哔哩手机版动态分享](tarnhelm://rule?regex=eyJhIjoi5ZOU5ZOp5ZOU5ZOp5omL5py654mI5Yqo5oCB5YiG5LqrIiwiYiI6WyJtLmJpbGliaWxpLmNvbVwvZHluYW1pYyJdLCJjIjpbInQuYmlsaWJpbGkuY29tIl0sImQiOiJGVFJlZXkifQ%3D%3D)

```
正则：
     m.bilibili.com/dynamic
替换：
     t.bilibili.com
作者：FTReey
输入：https://m.bilibili.com/dynamic/xxx
输出：https://t.bilibili.com/xxx
```

### [豆瓣](tarnhelm://rule?regex=eyJhIjoi6LGG55OjIiwiYiI6WyJfc3BtX2lkPS4qIl0sImMiOlsiIl0sImQiOiIifQ%3D%3D)

```
正则：
    _spm_id=.*
替换：

作者：ChellyL
输入：https://www.douban.com/doubanapp/dispatch?uri=/group/topic/329809762?_spm_id=MjQ3NzU2NzEz&_i=51253234ecb1e7f
输出：https://www.douban.com/doubanapp/dispatch?uri=/group/topic/329809762?
```

### [E绅士表站全局访问（仅适用于捐赠用户）](tarnhelm://rule?regex=eyJhIjoiRee7heWjq%2BihqOermeWFqOWxgO%2B8iOS7hemAgueUqOS6juaNkOi1oOeUqOaIt%2B%2B8iSIsImIiOlsiZXhoZW50YWkub3JnIl0sImMiOlsiZS1oZW50YWkub3JnIl0sImQiOiJvdXM1MCJ9)

```
正则：
    exhentai.org
替换：
    e-hentai.org
作者：ous50
自己找例子（
```

### [Fanbox](tarnhelm://rule?regex=eyJhIjoiZmFuYm94IiwiYiI6WyIuZmFuYm94LmNjIiwiXFw%2FLioiXSwiYyI6WyIuZmFuYm94LmNjIiwiIl0sImQiOiJvbWcteHRhbyJ9)

```
正则：
    .fanbox.cc
    \?.*
替换：
    .fanbox.cc
    
作者：omg-xtao
输入：https://official.fanbox.cc/posts/5103101?utm_campaign=post_published_follower&utm_medium=sendgrid&utm_source=email
输出：https://official.fanbox.cc/posts/5103101
```

### [华为应用市场详细页转下载直链](tarnhelm://rule?regex=eyJhIjoi5Y2O5Li65bqU55So5biC5Zy66K%2Bm5oOF6aG16L2s5LiL6L296ZO%2B5o6lIiwiYiI6WyJhcHBnYWxsZXJ5Lmh1YXdlaS5jb21cL2FwcCIsIlxcPy4qIl0sImMiOlsiYXBwZ2FsbGVyeS5jbG91ZC5odWF3ZWkuY29tXC9hcHBkbCIsIiJdLCJkIjoiUGlhbkNhdCJ9)

```
正则：
    appgallery.huawei.com/app/
    \?.*
替换：
    appgallery.huawei.com/appdl
    
作者：PianCat
输入：https://appgallery.huawei.com/app/C100137037?sharePrepath=ag&locale=zh_CN&source=appshare&subsource=C100137037&shareTo=copylink&shareFrom=appmarket&shareIds=b46eba24cf2f4807950fce4b0e129bf3_8&callType=SHARE
输出：https://appgallery.cloud.huawei.com/appdl/C100137037
```

### [Instagram/Threads](tarnhelm://rule?regex=eyJhIjoiSW5zdGFncmFtXC9UaHJlYWRzIiwiYiI6WyJcXD9pZ3NoPS4qIiwiXFw%2FaWdzaGlkPS4qIl0sImMiOlsiIiwiIl0sImQiOiJab2lzLCBmYWl6dWw3MjYifQ%3D%3D)

```
正则：
    \?igshid=.*
    \?igsh=.*
替换：

    
作者：Zois
https://www.threads.net/t/CuWKGXPv_n4/?igshid=
https://www.threads.net/t/CuWKGXPv_n4/
```

### [京东](tarnhelm://rule?regex=eyJhIjoi5Lqs5LicIiwiYiI6WyJpdGVtLm0uamQuY29tIiwiXFw%2FLioiLCJwcm9kdWN0XC8iXSwiYyI6WyJpdGVtLmpkLmNvbSIsIiIsIiJdLCJkIjoibHoyMzMifQ%3D%3D)

```
正则：
    item.m.jd.com
    \?.*
    product/
替换：
    item.jd.com
    
    
作者：lz233
输入：https://item.m.jd.com/product/10024081053559.html?gx=&ad_od=&utm_source=&utm_medium=&utm_campaign=&utm_term=
输出：https://item.jd.com/10024081053559.html
```

### [酷安](tarnhelm://rule?regex=eyJhIjoi6YW35a6JIiwiYiI6WyJjb29sYXBrLmNvbSIsIlxcPy4qIl0sImMiOlsiY29vbGFwazFzLmNvbSIsIiJdLCJkIjoibHoyMzMifQ%3D%3D)

```
正则：
    coolapk.com
    \?.*
替换：
    coolapk1s.com
    
作者：lz233
输入：https://www.coolapk.com/feed/14640271?shareKey=&shareUid=&shareFrom=
输出：https://www.coolapk1s.com/feed/14640271
```

### [拼多多多人团](tarnhelm://rule?regex=eyJhIjoi5ou85aSa5aSa5aSa5Lq65ZuiIiwiYiI6WyJ5YW5na2VkdW9cXC5jb21cL3BpbmNhcmRfYXNrLmh0bWxcXD9fX3JwX25hbWU9YnJhbmRfYW1hemluZ19wcmljZV9ncm91cCIsImh0dHBzPzpcL1wvLitcXC55YW5na2VkdW9cXC5jb21cL2xvZ2luXFwuaHRtbFxcP2Zyb209KGh0dHBzPzpcL1wvLitcXC55YW5na2VkdW9cXC5jb21cLy4raHRtbFxcPykiLCJcXD8uKj8oLis%2FaWQ9Lis%2FKSYoLis%2FPS4rKSoiXSwiYyI6WyJ5YW5na2VkdW8uY29tXC9waW5jYXJkX2Fzay5odG1sP19fcnBfbmFtZT1icmFuZF9hbWF6aW5nX3ByaWNlX2dyb3VwIiwiJDEiLCI%2FJDEiXSwiZCI6Ik1vc25leSJ9)

```
正则：
    yangkeduo\.com/pincard_ask.html\?__rp_name=brand_amazing_price_group
    https?://.+\.yangkeduo\.com/login\.html\?from=(https?://.+\.yangkeduo\.com/.+html\?)
    \?.*?(.+?id=.+?)&(.+?=.+)*
替换：
    yangkeduo.com/pincard_ask.html?__rp_name=brand_amazing_price_group
    $1
    ?$1
作者：Mosney
输入：https://mobile.yangkeduo.com/login.html?from=https://mobile.yangkeduo.com/pincard_ask.html?__rp_name=brand_amazing_price_group&group_order_id=123&refer_page_name=&refer_page_id=&refer_page_sn=&...
输出：https://mobile.yangkeduo.com/pincard_ask.html?__rp_name=brand_amazing_price_group&group_order_id=123
```

### [Pixiv](tarnhelm://rule?regex=eyJhIjoiUGl4aXYiLCJiIjpbIih3d3cuKT9waXhpdi5uZXRcL2FydHdvcmtzXC8iLCIkIiwiIyJdLCJjIjpbInBpeGl2LnJlXC8iLCIucG5nIiwiLSJdLCJkIjoibHoyMzMifQ%3D%3D)

```
正则：
    (www.)?pixiv.net/artworks/
    $
    #
替换：
    pixiv.re/
    .png
    -
作者：lz233
输入：https://www.pixiv.net/artworks/77096628#5
输出：https://pixiv.re/77096628-5.png
```

### [Pixiv长链接缩短](tarnhelm://rule?regex=eyJhIjoiUGl4aXbplb%2Fpk77mjqXnvKnnn60iLCJiIjpbIm1lbWJlcl9pbGx1c3QucGhwXFw%2FbW9kZT1tZWRpdW0maWxsdXN0X2lkPSJdLCJjIjpbImFydHdvcmtzXC8iXSwiZCI6IkZUUmVleSJ9)

```
正则：
    member_illust.php\?mode=medium&illust_id=
替换：
    artworks/
作者：FTReey
输入：https://www.pixiv.net/member_illust.php?mode=medium&illust_id=xxx
输出：https://www.pixiv.net/artworks/xxx
```

### [Pixiv跳转到其他网站](tarnhelm://rule?regex=eyJhIjoiUGl4aXbot7PovazliLDlhbbku5bnvZHnq5kiLCJiIjpbIihodHRwcz86XC9cLykod3d3XFwuKT9waXhpdi5uZXRcL2p1bXAucGhwXFw%2FdXJsPSJdLCJjIjpbIiJdLCJkIjoiRlRSZWV5In0%3D)

```
正则：
    (https?://)(www\.)?pixiv.net/jump.php\?url=
替换:

作者：FTReey
输入：https://www.pixiv.net/jump.php?url=xxx
输出：xxx
```

### [QQ 空间外链 (urlshare.cn)](tarnhelm://rule?parameter=eyJhIjoiUVEg56m66Ze05YiG5Lqr6ZO%2B5o6lIiwiYiI6WyJodHRwcz86XFxcL1xcXC93d3dcXC51cmxzaGFyZVxcLmNuXFxcLyguKiYpP3VybD0oW14mXSspLioiXSwiYyI6WyIkMiJdLCJkIjoiUFJPIn0%3D)

```
正则：
    https?:\/\/www\.urlshare\.cn\/(.*&)?url=([^&]+).*
替换：
    $2
作者：PRO-2684
输入：https://www.urlshare.cn/umirror_url_check?_wv=&srctype=&apptype=&loginuin=&plateform=&url=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FoMHMpa_TojNGMqWSCzh9Zw&src_uin=&src_scene=&cli_scene=
输出：https://mp.weixin.qq.com/s/oMHMpa_TojNGMqWSCzh9Zw
```

### [什么值得买](tarnhelm://rule?regex=eyJhIjoi5LuA5LmI5YC85b6X5LmwIiwiYiI6WyIoaHR0cHM6XC9cL3Rlc3Quc216ZG0uY29tXC9wXC9cXGQrKShcXD8uKil8KGh0dHBzOlwvXC8uKlxcLnNtemRtXFwuY29tXC8uKlwvKSguKikiXSwiYyI6WyIkMSQzIl0sImQiOiJIaW5hdGFLYXRvIn0%3D)

```
正则：
    (https://test.smzdm.com/p/\d+)(\?.*)|(https://.*\.smzdm\.com/.*/)(.*)
替换：
    $1$3
作者：加藤日向
输入：https://test.smzdm.com/p/(ID)?zdm_ss=Android__(UUID)&from=other
输出：https://www.smzdm.com/p/(Number)/?zdm_ss=Android__(UUID)&from=other
输入：https://post.m.smzdm.com/talk/p/(ID)/?zdm_ss=Android__(UUID)&from=other
输出：https://post.m.smzdm.com/p/(ID)/?zdm_ss=Android__(UUID)&from=other
输入：https://test.smzdm.com/p/(ID)
输出：https://www.smzdm.com/p/(Number)/
输入：https://post.m.smzdm.com/talk/p/(ID)/
输出：https://post.m.smzdm.com/p/(ID)/
```

### Twitter

#### [fxtwitter](tarnhelm://rule?regex=eyJhIjoiVHdpdHRlciIsImIiOlsiaHR0cHM%2FOlwvXC8odHdpdHRlcnx4KS5jb20iLCJcXD8uKiJdLCJjIjpbImh0dHBzOlwvXC9meHR3aXR0ZXIuY29tIiwiIl0sImQiOiJxcnFyIn0%3D)

```
正则：
    https?://(twitter|x).com
    \?.*
替换：
    https://fxtwitter.com
    
作者：qrqr
输入：https://twitter.com/mariotaku/status/496733277274013696?t=&s=
输出：https://fxtwitter.com/mariotaku/status/496733277274013696
```

#### [fixupx](tarnhelm://rule?regex=eyJhIjoiVHdpdHRlciIsImIiOlsiaHR0cHM%2FOlwvXC8odHdpdHRlcnx4KS5jb20iLCJcXD8uKiJdLCJjIjpbImh0dHBzOlwvXC9maXh1cHguY29tIiwiIl0sImQiOiJsejIzMyJ9)

```
正则：
    https?://(twitter|x).com
    \?.*
替换：
    https://fixupx.com
    
作者：lz233
输入：https://x.com/mariotaku/status/496733277274013696?t=&s=
输出：https://fixupx.com/mariotaku/status/496733277274013696
```

#### [Twitter UID 链接优化](tarnhelm://rule?regex=eyJhIjoiVHdpdHRlciBVSUTpk77mjqXkvJjljJYiLCJiIjpbInR3aXR0ZXIuY29tXC9pXC91c2VyXC8iXSwiYyI6WyJ0d2l0dGVyLmNvbVwvaW50ZW50XC91c2VyP3VzZXJfaWQ9Il0sImQiOiJGVFJlZXkifQ%3D%3D)
```
正则：
    twitter.com/i/user/
替换：
    twitter.com/intent/user?user_id=
作者：FTReey
输入：https://twitter.com/i/user/xxx
输出：https://twitter.com/intent/user?user_id=xxx
备注：开启后移动端应用才能正确识别twitter.com/i/链接，我也不知道为什么这么割裂，但它就是这样
```

#### [Twitter 去跟踪](tarnhelm://rule?regex=eyJhIjoiVHdpdHRlciDljrvot5%2FouKoiLCJiIjpbIihodHRwfGh0dHBzKTpcL1wvKHd3dy4pP3R3aXR0ZXIuY29tIiwiXFw%2FLioiXSwiYyI6WyJodHRwczpcL1wvdHdpdHRlci5jb20iLCIiXSwiZCI6IkZUUmVleSJ9)
```
正则：
    (http|https)://(www.)?twitter.com
    \?.*
替换：
    https://twitter.com
    
作者：FTReey
输入：https://twitter.com/*/status/*?t=*&s=*
输出：https://twitter.com/*/status/*
```

### 微博

#### [轻享版 Weibo intl.](tarnhelm://rule?regex=eyJhIjoi5b6u5Y2a6L275Lqr54mI5YiG5Lqr6ZO%2B5o6l6L2s5o2iIiwiYiI6WyJzaGFyZS5hcGkud2VpYm8uY24iLCJzaGFyZVwvW14lXSood2VpYm9faWQ9KSJdLCJjIjpbIm0ud2VpYm8uY24iLCJzdGF0dXNcLyJdLCJkIjoi5LiJ5rO9In0%3D)

```
正则：
    share.api.weibo.cn
    share/[^%]*(weibo_id=)
替换：
    m.weibo.cn
    status/
作者：三泽
输入：https://share.api.weibo.cn/share/0,4838040630203665.html?weibo_id=4838040630203665
输出：https://m.weibo.cn/status/4838040630203665
```
#### [移动端微博用户页分享链接](tarnhelm://rule?regex=eyJhIjoi56e75Yqo56uv5b6u5Y2a55So5oi36aG15YiG5Lqr6ZO%2B5o6lIiwiYiI6WyJtLndlaWJvLmNuXC9wcm9maWxlIl0sImMiOlsid2VpYm8uY29tXC91Il0sImQiOiJGVFJlZXkifQ%3D%3D)

```
正则：
    m.weibo.cn/profile
替换：
    weibo.com/u
作者：FTReey
输入：https://m.weibo.cn/profile/xxx
输出：https://weibo.com/u/xxx
```

#### [移动端微博链接去跟踪](tarnhelm://rule?regex=eyJhIjoi56e75Yqo56uv5b6u5Y2a6ZO%2B5o6l5Y676Lef6LiqIiwiYiI6WyJodHRwKHMpPzpcL1wvbS53ZWliby5jbiIsIlxcPy4qIl0sImMiOlsiaHR0cHM6XC9cL20ud2VpYm8uY24iLCIiXSwiZCI6IiJ9)

```
正则：
    http(s)?://m.weibo.cn
    \?.*
替换：
    https://m.weibo.cn/

作者：FTReey
输入：https://m.weibo.cn/status/数字?sourceType=分享参数
输出：https://m.weibo.cn/status/数字
```

### [网易云音乐](tarnhelm://rule?regex=eyJhIjoiTmV0ZWFzZSBDbG91ZCBNdXNpYyIsImIiOlsiaHR0cHM%2FOlwvXC8uKlxcLj9tdXNpY1xcLjE2M1xcLmNvbS4qKGlkPShcXGQrKSkuKiJdLCJjIjpbImh0dHBzOlwvXC9tdXNpYy4xNjMuY29tXC9zb25nP2lkPSQyIl0sImQiOiJsejIzMyJ9)

```
正则：
    https?://.*\.?music\.163\.com.*(id=(\d+)).*
替换：
    https://music.163.com/song?id=$2
作者：lz233
输入：https://y.music.163.com/m/song?id=2630740062&uct2=&fx-wechatnew=&fx-wxqd=&fx-wordtest=&fx-listentest=&H5_DownloadVIPGift=&playerUIModeId=&PlayerStyles_SynchronousSharing=&dlt=&app_version=&sc=&tn=
输出：https://music.163.com/song?id=2630740062
```

### [小红书](tarnhelm://rule?regex=eyJhIjoi5bCP57qi5LmmIiwiYiI6WyIoaHR0cHxodHRwcykoOlwvXC94aHNsaW5rLmNvbVxcdyopIiwiKFwvLiopIl0sImMiOlsiaHR0cHMkMiIsIiQxICJdLCJkIjoibHoyMzMifQ%3D%3D)

```
正则：
    (http|https)(://xhslink.com\w*)
    (/.*)，
替换：
    https$2
    $1 ，
作者：lz233
输入：66 四维的旅行日记发布了一篇小红书笔记，快来看吧！ 😆 peAMH4Qvxm7IWc2 😆 http://xhslink.com/EuSrvu，复制本条信息，打开【小红书】App查看精彩内容！
输出：98 四维的旅行日记发布了一篇小红书笔记，快来看吧！ 😆 LiP6c7pSEM5E77m 😆 https://xhslink.com/DLXrvu ，复制本条信息，打开【小红书】App查看精彩内容！
备注：配合重定向规则那边的「网易云音乐」一起使用。
```

### Youtube

#### [Mobile](tarnhelm://rule?regex=eyJhIjoiWW91VHViZSBNb2JpbGUiLCJiIjpbIihodHRwfGh0dHBzKTpcL1wveW91dHUuYmVcLyJdLCJjIjpbImh0dHBzOlwvXC95b3V0dWJlLmNvbVwvd2F0Y2hcXD92PSJdLCJkIjoib3VzNTAifQ%3D%3D)

```
正则：
    (http|https)://youtu.be/	
替换：
    https://youtube.com/watch\?v=
作者：ous50
输入：https://youtu.be/watch?v=GtL1huin9EE
输出：https://www.youtube.com/watch?v=GtL1huin9EE
```

#### [NormalLink](tarnhelm://rule?regex=eyJhIjoiWW91VHViZSBOb3JtYWxMaW5rIiwiYiI6WyIoaHR0cHM%2FOlwvXC8pKHd3d1xcLik%2FKHlvdXR1YmVcXC5jb20pKFwvd2F0Y2hcXD92PVthLXpBLVowLTlfLV0rKShcXD9zaT1bQS1aYS16MC05Xy1dKykiXSwiYyI6WyIkMSQyJDMkNCJdLCJkIjoiSGluYXRhS2F0byJ9)

```
正则：
    (https?://)(www\.)?(youtube\.com)(/watch\?v=[a-zA-Z0-9_-]+)(\?si=[A-Za-z0-9_-]+)
替换：
    $1$2$3$4
作者：HinataKato
输入：https://youtube.com/watch?v=a-rWPzGrLHk?si=BJD9340-yS53Hn6t
输出：http://www.youtube.com/watch?v=a-rWPzGrLHk?si=BJD9340-yS53Hn6t
输入：https://youtube.com/watch?v=a-rWPzGrLHk
输出：http://www.youtube.com/watch?v=a-rWPzGrLHk
```

#### [ShortLink](tarnhelm://rule?regex=eyJhIjoiWW91VHViZSBTaG9ydExpbmsiLCJiIjpbIihodHRwcz86XC9cLykod3d3XFwuKT8oeW91dHVcXC5iZSkoXC9bQS1aYS16MC05Xy1dKykoXFw%2Fc2k9W0EtWmEtejAtOV8tXSspIl0sImMiOlsiJDEkMiQzJDQiXSwiZCI6IkhpbmF0YUthdG8ifQ%3D%3D)

```
正则：
    (https?://)(www\.)?(youtu\.be)(/[A-Za-z0-9_-]+)(\?si=[A-Za-z0-9_-]+)
替换：
    $1$2$3$4
作者：HinataKato
https://youtu.be/a-rWPzGrLHk?si=BJD9340-yS53Hn6t
http://www.youtu.be/a-rWPzGrLHk?si=BJD9340-yS53Hn6t
https://youtu.be/a-rWPzGrLHk
http://www.youtu.be/a-rWPzGrLHk
```

### [知乎关怀版](tarnhelm://rule?redirect=eyJhIjoi55%2Bl5LmO5YWz5oCA54mIIiwiYiI6WyJ3d3cuemhpaHUuY29tXC9xdWVzdGlvbiIsIlxcPy4qIl0sImMiOlsid3d3LnpoaWh1LmNvbVwvYXJpYVwvcXVlc3Rpb24iXSwiZCI6IkJpbmdvS2luZ28ifQ%3D%3D)

```
正则：
    www.zhihu.com/question
    \?.*
替换：
    www.zhihu.com/aria/question

作者：BingoKingo
输入：https://www.zhihu.com/question/621886958/answer/3223202218
输出：https://www.zhihu.com/aria/question/621886958/answer/3223202218
```

## 重定向规则

### [哔哩哔哩](tarnhelm://rule?redirect=eyJhIjoi5ZOU5ZOp5ZOU5ZOpIiwiZSI6ImIyMy50diIsImgiOiIiLCJkIjoibHoyMzMifQ==)

```
域名：b23.tv
作者：lz233
输入：https://b23.tv/UtWjqWJ
输出：https://www.bilibili.com/video/BV11w411M72E/?buvid=&from_spmid=&is_story_h5=&mid=&p=&plat_id=&share_from=&share_medium=&share_plat=&share_session_id=&share_source=&share_tag=&spmid=&timestamp=&unique_k=&up_id=&vd_source=
```

### [哔哩哔哩](tarnhelm://rule?redirect=eyJhIjoi5ZOU5ZOp5ZOU5ZOpIiwiZSI6ImJpbGkyMjMzLmNuIiwiaCI6IiIsImQiOiJab3Jyb2JsYW5jbyJ9)

```
域名：bili2233.cn
作者：Zorroblanco
输入：https://bili2233.cn/UtWjqWJ
输出：https://www.bilibili.com/video/BV11w411M72E/?buvid=&from_spmid=&is_story_h5=&mid=&p=&plat_id=&share_from=&share_medium=&share_plat=&share_session_id=&share_source=&share_tag=&spmid=&timestamp=&unique_k=&up_id=&vd_source=
```

### [Reddit](tarnhelm://rule?redirect=eyJhIjoiUmVkZGl0IiwiZSI6Ind3dy5yZWRkaXQuY29tIiwiaCI6IiIsImQiOiJEcmVpc3RhIn0=)

```
域名：www.reddit.com
作者：Dreista
输入：https://www.reddit.com/r/rarekumikos/s/xxxxxxxxxx
输出：https://www.reddit.com/r/rarekumikos/comments/15wxj3u/maid_kumiko/?share_id=xxxxxxxxxxxxxxxxxxxxx
```

### [TikTok](tarnhelm://rule?redirect=eyJhIjoiVGlrVG9rIiwiZSI6InZtLnRpa3Rvay5jb20iLCJoIjoiIiwiZCI6Ik1hdHRpcyJ9)

```
域名：www.tiktok.com
作者：Mattis
输入：https://vm.tiktok.com/XXXXXXXXX/
输出：https://www.tiktok.com/@stefan_jmk1/video/7392345125495524641?_r=1&_t=XXXXXXXXXXX
```

### [网易云音乐](tarnhelm://rule?redirect=eyJhIjoiTmV0ZWFzZSBDbG91ZCBNdXNpYyIsImUiOiIxNjNjbi50diIsImgiOiIiLCJkIjoibHoyMzMifQ%3D%3D)

```
域名：163cn.tv
作者：lz233
输入：http://163cn.tv/CbLk0UC
输出：https://y.music.163.com/m/song?id=2630740062&uct2=&fx-wechatnew=&fx-wxqd=&fx-wordtest=&fx-listentest=&H5_DownloadVIPGift=&playerUIModeId=&PlayerStyles_SynchronousSharing=&dlt=&app_version=&sc=&tn=
```
