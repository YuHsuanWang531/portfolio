# Spacing Scale

基礎格線：**4px**。所有間距只使用以下數值。

## CSS Variables

```css
--sp-1:  4px   /* micro — icon offset、細微調整 */
--sp-2:  8px   /* small — 標籤間距、icon 與文字 */
--sp-3:  12px  /* base — 預設內距、卡片元素間 */
--sp-4:  16px  /* medium — 標準間距 */
--sp-5:  20px  /* large — section 內元素 */
--sp-6:  24px  /* xl — section 間距、卡片 padding */
--sp-8:  32px  /* 2xl — panel padding */
--sp-10: 40px  /* 3xl — 大型 section gap */
--sp-12: 48px  /* 4xl — 大型 section padding */
--sp-16: 64px  /* 5xl — hero / CTA padding */
```

## 特殊值

- **6px**：chip / badge 的垂直內距（`padding: 6px 12px`）。視覺上需要的緊縮值，不納入主要 scale，但固定使用 6px。

## 使用原則

| 情境 | 值 |
|---|---|
| icon 與文字的 gap | 8px |
| tag / chip 之間的 gap | 6–8px |
| 卡片內元素間距 | 8–16px |
| 卡片 padding | 24px |
| panel 標準 padding | 32px |
| section 之間的 gap | 24–32px |
| hero / CTA padding | 64px |

## 禁止使用

以下數值已從全站清除，不得再出現：

`2px` `3px` `7px` `10px` `11px` `13px` `14px（spacing 用途）` `18px` `28px`
