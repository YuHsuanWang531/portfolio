# Typography Scale

This document defines the type scale used across the portfolio site.

## Type Scale

| 層級 | CSS 變數 | 大小 | 用途 |
|------|----------|------|------|
| H1 | `--fs-h1` | `clamp(24px, 3vw, 36px)` | 頁面標題 |
| H2 | `--fs-h2` | `28px` | 區塊標題 |
| H3 | `--fs-h3` | `20px` | 子標題 |
| H4 | `--fs-h4` | `18px` | 小標題 |
| 正文 | `--fs-body` | `16px` | 主要段落 |
| 輔助文 | `--fs-small` | `14px` | 次要說明、meta |
| 標籤 | `--fs-xs` | `12px` | tag、label、section-label |

## CSS 變數

定義於 `styles.css` 的 `:root`：

```css
--fs-h1: clamp(24px, 3vw, 36px);
--fs-h2: 28px;
--fs-h3: 20px;
--fs-h4: 18px;
--fs-body: 16px;
--fs-small: 14px;
--fs-xs: 12px;
```

## 如何使用

### 在 `.prose` 內（文章、專案詳情頁的長文）

`.prose` 容器內的標題與段落由 CSS class 統一管理，直接使用語意標籤即可：

| HTML 元素 | Class 套用 | 大小 |
|-----------|-----------|------|
| `<h2>` | `.prose h2` | 28px |
| `<h3>` | `.prose h3` | 20px |
| `<h4>` | `.prose h4` | 18px |
| `<p>` | `.prose p` | 16px |

範例：
```html
<div class="prose">
  <h2>區塊標題</h2>
  <h3>子標題</h3>
  <p>段落正文...</p>
</div>
```

### 在 `.prose` 外（panel 內的獨立標題）

panel 內的標題由 `.panel h3` / `.panel h4` 統一管理：

| CSS Rule | 大小 |
|----------|------|
| `.panel h3` | 20px, font-weight: 700 |
| `.panel h4` | 18px, font-weight: 700 |

頁面標題使用 `.page-title` class（對應 H1 規格）：

```html
<h1 class="page-title">頁面標題</h1>
```

已有 class 控制的特殊元素不需加 inline font-size：

- `.section-label` — 12px（標籤層級）
- `.tag` — 12px
- `.stat-num` — 36px（數字統計，不受 type scale 管轄）
- `.hero-name` / `.hero-role` — 使用 clamp()，不受 type scale 管轄

### Inline style 補充規則

僅在無對應 class 可套用時才使用 inline `font-size`，且必須遵守以下對照：

| 情境 | 正確值 |
|------|--------|
| 標題型 div（有 font-weight: 700） | 20px 或 18px |
| 說明段落文字 | 16px |
| 輔助說明、meta label | 14px |
| tag、badge、section-label | 12px |
| emoji 圖示容器 | 保持原值（20px、24px 等） |
| 統計數字 | 保持原值（28px、32px、36px 等） |
