# Tailwind Ant Design Preset

[English](./README.md)

一个全面的 Tailwind CSS 预设，提供完整的 Ant Design 调色板，包括亮色和暗色主题变体，可与您的项目无缝集成。

## 特性

- ✨ 完整的 Ant Design 调色板（13 种颜色 × 每种 10 个色阶）
- 🌙 亮色和暗色两种主题变体
- 🎨 主色快捷方式，方便快速访问
- 📱 TypeScript 支持，提供完整的类型定义
- 🚀 零配置 - 开箱即用
- 📦 轻量且支持 Tree-shaking

## 安装

```bash
npm install antd-tailwind-preset
```

## 使用方法

将预设添加到您的 `tailwind.config.js` 文件中：

```javascript
import antdPreset from 'antd-tailwind-preset';

export default {
  presets: [antdPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // 您的其他内容路径
  ],
  // 您的其他配置
};
```

## 可用颜色

### 亮色主题颜色
使用 `antd-` 前缀，后跟色阶编号（1-10）：

- `bg-antd-blue-1` 到 `bg-antd-blue-10`
- `bg-antd-purple-1` 到 `bg-antd-purple-10`
- `bg-antd-cyan-1` 到 `bg-antd-cyan-10`
- `bg-antd-green-1` 到 `bg-antd-green-10`
- `bg-antd-magenta-1` 到 `bg-antd-magenta-10`
- `bg-antd-red-1` 到 `bg-antd-red-10`
- `bg-antd-orange-1` 到 `bg-antd-orange-10`
- `bg-antd-yellow-1` 到 `bg-antd-yellow-10`
- `bg-antd-volcano-1` 到 `bg-antd-volcano-10`
- `bg-antd-geekblue-1` 到 `bg-antd-geekblue-10`
- `bg-antd-lime-1` 到 `bg-antd-lime-10`
- `bg-antd-gold-1` 到 `bg-antd-gold-10`
- `bg-antd-grey-1` 到 `bg-antd-grey-10`
- `bg-antd-gray-1` 到 `bg-antd-gray-10` (grey 的别名)

### 暗色主题颜色
使用 `antd-dark-` 前缀：

- `bg-antd-dark-blue-1` 到 `bg-antd-dark-blue-10`
- `bg-antd-dark-purple-1` 到 `bg-antd-dark-purple-10`
- 所有颜色变体依此类推...

### 主色
用于快速访问的单值主色：

- `bg-antd-primary-blue` (#1677FF)
- `bg-antd-primary-green` (#52C41A)
- `bg-antd-primary-red` (#F5222D)
- `bg-antd-primary-orange` (#FA8C16)
- 所有颜色依此类推...

## 示例

### 基本用法

```html
<!-- 亮色主题示例 -->
<div class="bg-antd-blue-6 text-white p-4 rounded">主蓝色按钮</div>
<div class="bg-antd-red-5 text-white p-4 rounded">错误状态</div>
<div class="bg-antd-green-6 text-white p-4 rounded">成功状态</div>

<!-- 暗色主题示例 -->
<div class="bg-antd-dark-blue-6 text-white p-4 rounded">暗色主蓝</div>
<div class="bg-antd-dark-red-5 text-white p-4 rounded">暗色错误状态</div>

<!-- 主色快捷方式 -->
<button class="bg-antd-primary-blue hover:bg-antd-blue-7 text-white px-4 py-2 rounded transition-colors">
  快捷主色按钮
</button>

<!-- 文本和边框颜色 -->
<p class="text-antd-blue-6">蓝色文本</p>
<div class="border border-antd-grey-4 p-4">灰色边框</div>
```

### 高级示例

```html
<!-- 渐变背景 -->
<div class="bg-gradient-to-r from-antd-purple-1 to-antd-blue-1 p-6">
  漂亮的渐变
</div>

<!-- 状态卡片 -->
<div class="bg-antd-green-1 border border-antd-green-3 p-4 rounded">
  <h3 class="text-antd-green-8 font-semibold">成功</h3>
  <p class="text-antd-green-7">操作已成功完成</p>
</div>

<!-- 暗色主题卡片 -->
<div class="bg-antd-dark-grey-2 border border-antd-dark-grey-4 p-6 rounded">
  <h3 class="text-antd-dark-grey-9">暗色主题卡片</h3>
  <p class="text-antd-dark-grey-8">非常适合暗色模式界面</p>
</div>
```

## 色阶

每个颜色系列包括 10 个精心设计的色阶：

- **色阶 1-3**: 最浅的色调，非常适合背景和微妙的元素
- **色阶 4-6**: 中等色调，非常适合主要用途和交互元素
- **色阶 7-10**: 最深的色调，非常适合文本和强调

## TypeScript 支持

该包包含全面的 TypeScript 定义：

```typescript
import type { AntdColorPalette, TailwindColorObject } from 'antd-tailwind-preset';
```

## 兼容性

- ✅ Tailwind CSS v3.0+
- ✅ React, Vue, Angular, 和原生项目
- ✅ Next.js, Nuxt, Vite, 和其他构建工具
- ✅ TypeScript 和 JavaScript

## 贡献

欢迎贡献！请随时提交问题和拉取请求。

## 许可证

MIT 许可证 - 可在个人和商业项目中免费使用。

---

为 Ant Design 和 Tailwind CSS 社区 ❤️ 制作。