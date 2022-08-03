# 规则库

在这里可以寻找你想要的规则，请善用页面内查找功能。

在已安装应用的情况下点击「添加」即可完成规则的导入。

你可以通过提交 PR 到[这个文件](https://github.com/lz233/TarnhelmDocument/blob/main/docs/rules.md)帮助我们完善规则。贡献过程中，请注意格式和按照拼音首字母排序。

## 参数规则

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

