# Manual

This manual will lead you to understand Tarnhelm's processing logic and guide you to writing custom rules.

## Rules Priority

Each rule will be processed one by one from top to bottom according to the order in the list, and the parameter rules will be processed first.

A rule can be sorted by long pressing and dragging it.

## Parameter Rules

The parameter rules are divided into "whitelist" and "blacklist" modes. The "whitelist" mode keeps the parameter names you fill in the rules, and the "blacklist" mode removes them.

When there are multiple parameters that need to be operated, input them in a **new line**.

If you need to remove or keep all parameters, you can leave the "Parameters" field **blank**.

Each rule corresponds to one domain name. When there are multiple domains to be operated, please add **more** rules.

The following example shows how Tarnhelm uses "parameter rules" to handle sharing links of NetEase Cloud Music for Android.

::: tip Example of parameter rules
0. Example rules

    `eyJhIjoi572R5piT5LqR6Z+z5LmQIiwiZSI6InkubXVzaWMuMTYzLmNvbSIsImYiOjAsImciOlsiaWQiXSwiZCI6Imx6MjMzIn0=`

1. Incoming text

   `分享46_P/诗岸的单曲《Narcissus》: https://y.music.163.com/m/song?id=1835695995&userid=299866209&dlt=0846 (来自@网易云音乐)`

2. Extract links from text based on built-in regex

   `https://y.music.163.com/m/song?id=1835695995&userid=299866209&dlt=0846`

3. According to the "whitelist" mode in the rule and the `id` in the "Parameters" filed, keep the parameter `id`

   `https://y.music.163.com/m/song?id=1835695995`

4. Put the link back into the text

   `分享46_P/诗岸的单曲《Narcissus》: https://y.music.163.com/m/song?id=1835695995 (来自@网易云音乐)`
   :::

## Regex Rules

The "Regexes" and "Replacements" in regex rules support **multiple lines**, each line is a separate match and replacement, and correspond to each other by line, and are processed in top-to-bottom order, as shown below.

<p style="text-align: center;">
<img src="../img/manual-1.webp" style="zoom: 30%;" />
</p>

The first regex is special and serves as a match, so that if the first regex does not match any character in the link, Tarnhelm will skip the **entire** rule. Using this feature, we can limit the scope of this regex rule.

"Replacements" will replace all parts of the link that are matched, e.g. after both `coolapk` in `https://coolapk.com/apk/com.coolapk.market` are matched, they will all be replaced.

The following example shows how Tarnhelm uses "regex rules" to handle sharing links of Coolapk for Android.

::: tip Example of regex rules
0. Example rules

      `eyJhIjoi6YW35a6JIiwiYiI6WyJjb29sYXBrLmNvbSIsIlxcPy4qIl0sImMiOlsiY29vbGFwazFzLmNvbSIsIiJdLCJkIjoibHoyMzMifQ==`

1. Incoming text

   `分享酷安用户@羽韵Linus 的图文：【『超长文+多图警告』Google Glass体验报告】 https://www.coolapk.com/feed/14640271?shareKey=ZjczNTkxZDBmMTU4NjJlYTU3MTU~&shareUid=12202&shareFrom=com.coolapk.market_12.4 分享自【酷安App】`

2. Extract links from text based on built-in regex

    `https://www.coolapk.com/feed/14640271?shareKey=ZjczNTkxZDBmMTU4NjJlYTU3MTU~&shareUid=12202&shareFrom=com.coolapk.market_12.4`

3. Find a match based on the first regex `coolapk.com` in the rule and replace it with `coolapk1s.com`

    `https://www.coolapk1s.com/feed/14640271?shareKey=ZjczNTkxZDBmMTU4NjJlYTU3MTU~&shareUid=12202&shareFrom=com.coolapk.market_12.4`

4. According to the second regex `\?.*` in the rule, match all parameters and replaces them with the empty text

    `https://www.coolapk1s.com/feed/14640271`

5. Put the link back into the text

   `分享酷安用户@羽韵Linus 的图文：【『超长文+多图警告』Google Glass体验报告】 https://www.coolapk1s.com/feed/14640271 分享自【酷安App】`
:::