---
layout: doc
outline: [2,3]
---
<script lang="ts" setup>
import ClockOne from "./components/ClockOne.vue"
</script>

### 翻页时钟

<ClockOne/>

::: code-group

```html [结构]
<!-- 时钟的卡片和分隔 -->
<div class="flip">
    <div class="digital front" data-number="0"></div>
    <div class="digital back" data-number="1"></div>
</div>
<em class="divider">:</em>
</div>
```

```Typescript [逻辑]
// 待更新
```

```scss [样式]
// 翻页动画

```
:::
<div class="code-box">
    <div class="be-from"><a href="https://www.bilibili.com/video/BV12X4y157ca/" target="_blank">源于</a></div>
</div>