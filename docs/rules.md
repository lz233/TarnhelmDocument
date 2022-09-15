# 规则库

在这里可以寻找你想要的规则，请善用页面内查找功能。

已安装应用的情况下点击超链接即可完成规则的导入。导入前请确保使用较新版本的客户端。

你可以通过提交 PR 到[这个文件](https://github.com/lz233/TarnhelmDocument/blob/main/docs/rules.md)帮助我们完善规则。贡献过程中，请注意格式和按照拼音首字母排序。

## 参数规则

### [Apple Music](tarnhelm://rule?parameter=eyJhIjoiQXBwbGUgTXVzaWMiLCJlIjoibXVzaWMuYXBwbGUuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6Im1pdGlhbjIzMyJ9)

```
域名：music.apple.com
模式：白名单
参数：
作者：mitian233
https://music.apple.com/jp/album/ヒミツ恋ゴコロ/1629870185?i=
https://music.apple.com/jp/album/ヒミツ恋ゴコロ/1629870185
```
### [百度贴吧分享](tarnhelm://rule?parameter=eyJhIjoi55m%2B5bqm6LS05ZCnIiwiZSI6InRpZWJhLmJhaWR1LmNvbSIsImYiOjAsImciOlsiIl0sImQiOiLpnZLloqgifQ%3D%3D)

```
域名：tieba.baidu.com
模式：白名单
参数：
作者：青墨
https://tieba.baidu.com/p/7989575070?share=&fr=&see_lz=&share_from=&sfc=&client_type=&client_version=&st=&is_video=&unique=
https://tieba.baidu.com/p/7989575070
```

### 哔哩哔哩

#### [动态分享](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp5Yqo5oCB5YiG5LqrIiwiZSI6InQuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IumdkuWiqCJ9)

```
域名：t.bilibili.com
模式：白名单
参数：
作者：青墨
https://t.bilibili.com/697612442479362072?share_source=&share_medium=
https://t.bilibili.com/697612442479362072
```

#### [会员购分享](tarnhelm://rule?parameter=eyJhIjoi5Lya5ZGY6LSt5YiG5LqrIiwiZSI6Im1hbGwuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyJub1RpdGxlQmFyIiwiaXRlbXNJZCJdLCJkIjoi6Z2S5aKoIn0%3D)

```
域名：mall.bilibili.com
模式：白名单
参数： 
    noTitleBar
    itemsId
作者：青墨
https://mall.bilibili.com/detail.html?noTitleBar=1&loadingShow=&from=&pageType=&msource=history&outsideMall=&itemsId=10082880
https://mall.bilibili.com/detail.html?noTitleBar=1&itemsId=10082880
```

#### [个人界面分享](tarnhelm://rule?parameter=eyJhIjoi5Liq5Lq655WM6Z2i5YiG5LqrIiwiZSI6InNwYWNlLmJpbGliaWxpLmNvbSIsImYiOjAsImciOlsiIl0sImQiOiLpnZLloqgifQ%3D%3D)

```
域名：space.bilibili.com
模式：白名单
参数：
作者：青墨
https://space.bilibili.com/1265680561?share_medium=&share_source=&bbid=&ts=
https://space.bilibili.com/1265680561
```

#### [视频分享](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp6KeG6aKR5YiG5LqrIiwiZSI6Ind3dy5iaWxpYmlsaS5jb20iLCJmIjoxLCJnIjpbInNoYXJlX21lZGl1bSIsInNoYXJlX3NvdXJjZSIsImJiaWQiLCJ0cyJdLCJkIjoibGl0dGxlZjB4In0%3D)

```
域名：www.bilibili.com
模式：黑名单
参数：
    share_medium
    share_source
    bbid
    ts
作者：littlef0x
https://www.bilibili.com/video/BV1xS4y1H7UL?share_medium=&share_source=&bbid=&ts=
https://www.bilibili.com/video/BV1xS4y1H7UL
```

#### [预约分享](tarnhelm://rule?parameter=eyJhIjoi55u05pKt6aKE57qm5YiG5LqrIiwiZSI6Ind3dy5iaWxpYmlsaS5jb20iLCJmIjoxLCJnIjpbImlfdHJhbnNmZXJfbWF0Y2giXSwiZCI6IumdkuWiqCJ9)

```
域名：www.bilibili.com
模式：黑名单
参数：i_transfer_match
作者：青墨
https://www.bilibili.com/h5/lottery/result?lottery_id=106993&business_type=10&business_id=909786&i_transfer_match=
https://www.bilibili.com/h5/lottery/result?lottery_id=106993&business_type=10&business_id=909786
```

#### [直播分享](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp55u05pKt6Ze0IiwiZSI6ImxpdmUuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IumdkuWiqCJ9)

```
域名：live.bilibili.com
模式：白名单
参数：
作者：青墨
https://live.bilibili.com/22603245?broadcast_type=&is_room_feed=
https://live.bilibili.com/22603245
```

### [Disney+](tarnhelm://rule?parameter=eyJhIjoiRGlzbmV5KyIsImUiOiJ3d3cuZGlzbmV5cGx1cy5jb20iLCJmIjowLCJnIjpbIiJdLCJkIjoibWl0aWFuMjMzIn0%3D)

```
域名：www.disneyplus.com
模式：白名单
参数：
作者：mitian233
https://www.disneyplus.com/series/money-makes-the-world-go-round/14BIEgqbPnKP?sharesource=Android
https://www.disneyplus.com/series/money-makes-the-world-go-round/14BIEgqbPnKP
```

### [Netflix](tarnhelm://rule?parameter=eyJhIjoiTmV0ZmxpeCIsImUiOiJ3d3cubmV0ZmxpeC5jb20iLCJmIjowLCJnIjpbIiJdLCJkIjoibWl0aWFuMjMzIn0%3D)

```
域名：www.netflix.com
模式：白名单
参数：
作者：mitian233
https://www.netflix.com/tw/title/81565554?s=&trkid=&t=&vlang=&clip=
https://www.netflix.com/tw/title/81565554
```

### [QQ 频道](tarnhelm://rule?parameter=eyJhIjoiUVEg6aKR6YGTIiwiZSI6InF1bi5xcS5jb20iLCJmIjowLCJnIjpbImludml0ZUNvZGUiXSwiZCI6IumdkuWiqCJ9)

```
域名：qun.qq.com
模式：白名单
参数：inviteCode
作者：青墨
https://qun.qq.com/qqweb/qunpro/share?_wv=&_wwv=&appChannel=&inviteCode=2dsmVd&businessType=&from=&biz=
https://qun.qq.com/qqweb/qunpro/share?inviteCode=2dsmVd
```

### [Spotify](tarnhelm://rule?parameter=eyJhIjoiU3BvdGlmeSIsImUiOiJvcGVuLnNwb3RpZnkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6Imx6MjMzIn0%3D)

```
域名：open.spotify.com
模式：白名单
参数：
作者：lz233
https://open.spotify.com/track/1l3c3YMXOpvXes5Vc3YsUs?si=&utm_source=
https://open.spotify.com/track/1l3c3YMXOpvXes5Vc3YsUs
```

### [淘宝/闲鱼](tarnhelm://rule?parameter=eyJhIjoi5reY5a6dXC%2Fpl7LpsbwiLCJlIjoibS50Yi5jbiIsImYiOjAsImciOlsiIl0sImQiOiJsejIzMyJ9)

```
域名：m.tb.cn
模式：白名单
参数：
作者：lz233
https://m.tb.cn/h.fBDkd2S?tk=
https://m.tb.cn/h.fBDkd2S
```

### [腾讯视频](tarnhelm://rule?parameter=eyJhIjoi6IW%2B6K6v6KeG6aKRIiwiZSI6Im0udi5xcS5jb20iLCJmIjowLCJnIjpbInZpZCJdLCJkIjoicmV0dXJuTOOAgemdkuWiqCJ9)

```
域名：m.v.qq.com
模式：白名单
参数：vid
作者：returnL、青墨
http://m.v.qq.com/x/cover/x/mzc00200fr1ry1o/m00441h6knj.html?playtime=&url_from=&second_share=&share_from=
http://m.v.qq.com/x/cover/x/mzc00200fr1ry1o/m00441h6knj.html
https://m.v.qq.com/x/m/play?vid=p3353dbvy6v&cid=&url_from=share&second_share=0&share_from=copy
https://m.v.qq.com/x/m/play?vid=p3353dbvy6v
```

### [网易云音乐](tarnhelm://rule?parameter=eyJhIjoi572R5piT5LqR6Z%2Bz5LmQIiwiZSI6InkubXVzaWMuMTYzLmNvbSIsImYiOjAsImciOlsiaWQiXSwiZCI6Imx6MjMzIn0%3D)

```
域名：y.music.163.com
模式：白名单
参数：id
作者：lz233
https://y.music.163.com/m/song?id=1835695995&uct=&dlt=&app_version=&sc=&tn=
https://y.music.163.com/m/song?id=1835695995
```

### [微信读书](tarnhelm://rule?parameter=eyJhIjoi5b6u5L%2Bh6K%2B75LmmIiwiZSI6IndlcmVhZC5xcS5jb20iLCJmIjowLCJnIjpbInYiXSwiZCI6Imx6MjMzIn0%3D)

```
域名：weread.qq.com
模式：白名单
参数：v
作者：lz233
https://weread.qq.com/book-detail?type=&senderVid=&v=b2b3283071f3f63db2b307d&wtheme=&wfrom=&wvid=&scene=
https://weread.qq.com/book-detail?v=b2b3283071f3f63db2b307d
```

### [作业帮](tarnhelm://rule?parameter=eyJhIjoi5L2c5Lia5biuIiwiZSI6InBsYXQtbWluaWFwcC56dW95ZWJhbmcuY29tIiwiZiI6MCwiZyI6WyJjdWlkIiwiaXNoaXQiXSwiZCI6Im9tZy14dGFvIn0=)

```
域名：plat-miniapp.zuoyebang.com
模式：白名单
参数：
    cuid
    ishit
作者：omg-xtao
https://plat-miniapp.zuoyebang.com/miniapp/share/a114a56e7481c963be1e4e2af47ca000+b2e53b3649d2faceb9caf17c7c305bca7c3dc99125440b67?appId=&uid=&cuid=DE1C58473E8FD9C41CC3C7569E9CA35A%7C0&jzms=&ishit=1
https://plat-miniapp.zuoyebang.com/miniapp/share/a114a56e7481c963be1e4e2af47ca000+b2e53b3649d2faceb9caf17c7c305bca7c3dc99125440b67?cuid=DE1C58473E8FD9C41CC3C7569E9CA35A%7C0&ishit=1
```

## 正则规则

### [京东](tarnhelm://rule?regex=eyJhIjoi5Lqs5LicIiwiYiI6WyJpdGVtLm0uamQuY29tIiwiXFw%2FLioiXSwiYyI6WyJpdGVtLmpkLmNvbSIsIiJdLCJkIjoibHoyMzMifQ%3D%3D)

```
正则：
    item.m.jd.com
    \?.*
替换：
    item.jd.com
    
作者：lz233
https://item.m.jd.com/product/10024081053559.html?gx=&ad_od=&utm_source=&utm_medium=&utm_campaign=&utm_term=
https://item.jd.com/10024081053559.html
```

### [酷安](tarnhelm://rule?regex=eyJhIjoi6YW35a6JIiwiYiI6WyJjb29sYXBrLmNvbSIsIlxcPy4qIl0sImMiOlsiY29vbGFwazFzLmNvbSIsIiJdLCJkIjoibHoyMzMifQ%3D%3D)

```
正则：
    coolapk.com
    \?.*
替换：
    coolapk1s.com
    
作者：lz233
https://www.coolapk.com/feed/14640271?shareKey=&shareUid=&shareFrom=
https://www.coolapk1s.com/feed/14640271
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
https://www.pixiv.net/artworks/77096628#5
https://pixiv.re/77096628-5.png
```

### [Twitter](tarnhelm://rule?regex=eyJhIjoiVHdpdHRlciIsImIiOlsiKGh0dHB8aHR0cHMpOlwvXC90d2l0dGVyLmNvbSIsIlxcPy4qIl0sImMiOlsiaHR0cHM6XC9cL3Z4dHdpdHRlci5jb20iLCIiXSwiZCI6Imx6MjMzIn0%3D)

```
正则：
    (http|https)://twitter.com
    \?.*
替换：
    https://vxtwitter.com
    
作者：lz233
https://twitter.com/mariotaku/status/496733277274013696?t=&s=
https://vxtwitter.com/mariotaku/status/496733277274013696
```
