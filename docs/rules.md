# 规则库

在这里可以寻找你想要的规则，请善用页面内查找功能。

在已安装应用的情况下点击「添加」即可完成规则的导入。

你可以通过提交 PR 到[这个文件](https://github.com/lz233/TarnhelmDocument/blob/main/docs/rules.md)帮助我们完善规则。贡献过程中，请注意格式和按照拼音首字母排序。

## 参数规则

### 哔哩哔哩

#### 动态分享

[添加](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp5Yqo5oCB5YiG5LqrIiwiZSI6InQuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IumdkuWiqCJ9)

```
域名：t.bilibili.com
模式：白名单
参数：
作者：青墨
https://t.bilibili.com/697612442479362072?share_source=&share_medium=
https://t.bilibili.com/697612442479362072
```

#### 预约分享

[添加](tarnhelm://rule?parameter=eyJhIjoi55u05pKt6aKE57qm5YiG5LqrIiwiZSI6Ind3dy5iaWxpYmlsaS5jb20iLCJmIjoxLCJnIjpbImlfdHJhbnNmZXJfbWF0Y2giXSwiZCI6IumdkuWiqCJ9)

```
域名：www.bilibili.com
模式：黑名单
参数：i_transfer_match
作者：青墨
https://www.bilibili.com/h5/lottery/result?lottery_id=106993&business_type=10&business_id=909786&i_transfer_match=
https://www.bilibili.com/h5/lottery/result?lottery_id=106993&business_type=10&business_id=909786
```

#### 直播分享

[添加](tarnhelm://rule?parameter=eyJhIjoi5ZOU5ZOp5ZOU5ZOp55u05pKt6Ze0IiwiZSI6ImxpdmUuYmlsaWJpbGkuY29tIiwiZiI6MCwiZyI6WyIiXSwiZCI6IumdkuWiqCJ9)

```
域名：live.bilibili.com
模式：白名单
参数：
作者：青墨
https://live.bilibili.com/22603245?broadcast_type=&is_room_feed=
https://live.bilibili.com/22603245
```

### 淘宝/闲鱼

[添加](tarnhelm://rule?parameter=eyJhIjoi5reY5a6dXC/pl7LpsbwiLCJlIjoibS50Yi5jbiIsImYiOjAsImciOlsiIl0sImQiOiJsejIzMyJ9)

```
域名：m.tb.cn
模式：白名单
参数：
作者：lz233
https://m.tb.cn/h.fBDkd2S?tk=
https://m.tb.cn/h.fBDkd2S
```

### 网易云音乐

[添加](tarnhelm://rule?parameter=eyJhIjoi572R5piT5LqR6Z+z5LmQIiwiZSI6InkubXVzaWMuMTYzLmNvbSIsImYiOjAsImciOlsiaWQiXSwiZCI6Imx6MjMzIn0=)

```
域名：y.music.163.com
模式：白名单
参数：id
作者：lz233
https://y.music.163.com/m/song?id=1835695995&uct=&dlt=&app_version=&sc=&tn=
https://y.music.163.com/m/song?id=1835695995
```

### 微信读书

[添加](tarnhelm://rule?parameter=eyJhIjoi5b6u5L+h6K+75LmmIiwiZSI6IndlcmVhZC5xcS5jb20iLCJmIjowLCJnIjpbInYiXSwiZCI6Imx6MjMzIn0=)

```
域名：weread.qq.com
模式：白名单
参数：v
作者：lz233
https://weread.qq.com/book-detail?type=&senderVid=&v=b2b3283071f3f63db2b307d&wtheme=&wfrom=&wvid=&scene=
https://weread.qq.com/book-detail?v=b2b3283071f3f63db2b307d
```

### 作业帮

[添加](tarnhelm://rule?parameter=eyJhIjoi5L2c5Lia5biuIiwiZSI6InBsYXQtbWluaWFwcC56dW95ZWJhbmcuY29tIiwiZiI6MCwiZyI6WyJjdWlkIiwiaXNoaXQiXSwiZCI6Im9tZy14dGFvIn0=)

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

### 京东

[添加](tarnhelm://rule?regex=eyJhIjoi5Lqs5LicIiwiYiI6WyJpdGVtLm0uamQuY29tIiwiXFw/LioiXSwiYyI6WyJpdGVtLmpkLmNvbSIsIiJdLCJkIjoibHoyMzMifQ==)

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

### 酷安

[添加](tarnhelm://rule?regex=eyJhIjoi6YW35a6JIiwiYiI6WyJjb29sYXBrLmNvbVwvZmVlZFwvIiwiXFw/LioiXSwiYyI6WyJjb29sYXBrMXMuY29tXC9mZWVkXC8iLCIiXSwiZCI6Imx6MjMzIn0=)

```
正则：
    coolapk.com/feed/
    \?.*
替换：
    coolapk1s.com/feed/
    
作者：lz233
https://www.coolapk.com/feed/14640271?shareKey=&shareUid=&shareFrom=
https://www.coolapk1s.com/feed/14640271
```

### Twitter

[添加](tarnhelm://rule?regex=eyJhIjoiVHdpdHRlciIsImIiOlsidHdpdHRlci5jb20iLCJcXD8uKiJdLCJjIjpbInZ4dHdpdHRlci5jb20iLCIiXSwiZCI6Imx6MjMzIn0=)

```
正则：
    twitter.com
    \?.*
替换：
    vxtwitter.com
    
作者：lz233
https://twitter.com/mariotaku/status/496733277274013696?t=&s=
https://vxtwitter.com/mariotaku/status/496733277274013696
```

