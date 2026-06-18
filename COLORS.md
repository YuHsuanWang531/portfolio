# Color System

所有顏色只透過 CSS 自訂變數使用，不得在 CSS 或 HTML inline style 中出現 hardcode 色碼。

## CSS Variables

```css
/* 基礎色板 */
--bg: #f5f5f7                /* 頁面底色 */
--sidebar-bg: #ffffff        /* sidebar 背景 */
--content-bg: #ffffff        /* panel / card 背景 */
--border: #e8e8e8            /* 邊框、分隔線 */

/* 文字 */
--text-primary: #111         /* 主要文字、標題 */
--text-secondary: #666       /* 次要文字、描述 */
--text-muted: #999           /* 輔助文字、標籤、時間 */

/* 品牌色 */
--accent: #2976A0            /* 主色：按鈕、連結、高亮 */
--accent-light: #e8f3f9      /* 主色淺版：背景、hover fill */
--accent-hover: #1f5f84      /* 主色 hover 狀態 */

/* 語意色 */
--color-success: #22c55e     /* 在線狀態、成功指標 */
--color-danger: #d32f2f      /* 警告標示、挑戰卡片邊框、! 圓圈 */

/* 深色系（CTA / footer） */
--dark-bg: #111              /* CTA panel、site footer 背景 */
--dark-surface: #2a2a2a      /* 深色面板內的按鈕背景 */
--dark-surface-hover: #333   /* 深色面板內的按鈕 hover */

/* 互動 */
--hover-bg: #f0f0f2          /* nav item hover 背景 */
```

## 保留 Hardcode 的例外

下列情況允許使用 hardcode，因為是外部品牌色或純白：

| 值 | 用途 | 原因 |
|---|---|---|
| `#fff` | 深色背景上的白色文字 | 通用白，無需抽象 |
| `#0A66C2` | LinkedIn icon 背景 | 第三方品牌色 |
| `#000` | Medium icon 背景 | 第三方品牌色 |
| `rgba(0,0,0,0.X)` | 遮罩、陰影 | 透明疊加，非品牌色 |
| `rgba(255,255,255,X)` | 深色背景上的半透明白 | 透明疊加，非品牌色 |

## 使用原則

- 調整品牌色只需改 `--accent`，全站同步更新
- 深色 CTA / footer 背景統一用 `var(--dark-bg)`
- 警告紅（challenge card、! 圓圈、成果數字）統一用 `var(--color-danger)`
- 不得引入新的 hardcode 顏色；如有需要，先在此文件新增變數
