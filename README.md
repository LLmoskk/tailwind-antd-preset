# Tailwind Ant Design Preset

A comprehensive Tailwind CSS preset that provides the complete Ant Design color palette, including both light and dark theme variants, for seamless integration with your projects.

## Features

- ✨ Complete Ant Design color palette (13 colors × 10 shades each)
- 🌙 Both light and dark theme variants
- 🎨 Primary color shortcuts for quick access
- 📱 TypeScript support with full type definitions
- 🚀 Zero configuration - works out of the box
- 📦 Lightweight and tree-shakeable

## Installation

```bash
npm install antd-tailwind-preset
```

## Usage

Add the preset to your `tailwind.config.js`:

```javascript
import antdPreset from 'antd-tailwind-preset';

export default {
  presets: [antdPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // your other content paths
  ],
  // your other config
};
```

## Available Colors

### Light Theme Colors
Use with the `antd-` prefix followed by shade number (1-10):

- `bg-antd-blue-1` to `bg-antd-blue-10`
- `bg-antd-purple-1` to `bg-antd-purple-10`
- `bg-antd-cyan-1` to `bg-antd-cyan-10`
- `bg-antd-green-1` to `bg-antd-green-10`
- `bg-antd-magenta-1` to `bg-antd-magenta-10`
- `bg-antd-red-1` to `bg-antd-red-10`
- `bg-antd-orange-1` to `bg-antd-orange-10`
- `bg-antd-yellow-1` to `bg-antd-yellow-10`
- `bg-antd-volcano-1` to `bg-antd-volcano-10`
- `bg-antd-geekblue-1` to `bg-antd-geekblue-10`
- `bg-antd-lime-1` to `bg-antd-lime-10`
- `bg-antd-gold-1` to `bg-antd-gold-10`
- `bg-antd-grey-1` to `bg-antd-grey-10`
- `bg-antd-gray-1` to `bg-antd-gray-10` (alias for grey)

### Dark Theme Colors
Use with the `antd-dark-` prefix:

- `bg-antd-dark-blue-1` to `bg-antd-dark-blue-10`
- `bg-antd-dark-purple-1` to `bg-antd-dark-purple-10`
- And so on for all color variants...

### Primary Colors
Single-value primary colors for quick access:

- `bg-antd-primary-blue` (#1677FF)
- `bg-antd-primary-green` (#52C41A)
- `bg-antd-primary-red` (#F5222D)
- `bg-antd-primary-orange` (#FA8C16)
- And so on for all colors...

## Examples

### Basic Usage

```html
<!-- Light theme examples -->
<div class="bg-antd-blue-6 text-white p-4 rounded">Primary Blue Button</div>
<div class="bg-antd-red-5 text-white p-4 rounded">Error State</div>
<div class="bg-antd-green-6 text-white p-4 rounded">Success State</div>

<!-- Dark theme examples -->
<div class="bg-antd-dark-blue-6 text-white p-4 rounded">Dark Primary Blue</div>
<div class="bg-antd-dark-red-5 text-white p-4 rounded">Dark Error State</div>

<!-- Primary color shortcuts -->
<button class="bg-antd-primary-blue hover:bg-antd-blue-7 text-white px-4 py-2 rounded transition-colors">
  Quick Primary Button
</button>

<!-- Text and border colors -->
<p class="text-antd-blue-6">Blue text</p>
<div class="border border-antd-grey-4 p-4">Grey border</div>
```

### Advanced Examples

```html
<!-- Gradient backgrounds -->
<div class="bg-gradient-to-r from-antd-purple-1 to-antd-blue-1 p-6">
  Beautiful gradient
</div>

<!-- Status cards -->
<div class="bg-antd-green-1 border border-antd-green-3 p-4 rounded">
  <h3 class="text-antd-green-8 font-semibold">Success</h3>
  <p class="text-antd-green-7">Operation completed successfully</p>
</div>

<!-- Dark theme card -->
<div class="bg-antd-dark-grey-2 border border-antd-dark-grey-4 p-6 rounded">
  <h3 class="text-antd-dark-grey-9">Dark Theme Card</h3>
  <p class="text-antd-dark-grey-8">Perfect for dark mode interfaces</p>
</div>
```

## Color Scale

Each color family includes 10 carefully crafted shades:

- **Shades 1-3**: Lightest tones, perfect for backgrounds and subtle elements
- **Shades 4-6**: Medium tones, ideal for primary usage and interactive elements
- **Shades 7-10**: Darkest tones, excellent for text and emphasis

## TypeScript Support

This package includes comprehensive TypeScript definitions:

```typescript
import type { AntdColorPalette, TailwindColorObject } from 'antd-tailwind-preset';
```

## Compatibility

- ✅ Tailwind CSS v3.0+
- ✅ React, Vue, Angular, and vanilla projects
- ✅ Next.js, Nuxt, Vite, and other build tools
- ✅ TypeScript and JavaScript

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - feel free to use in personal and commercial projects.

---

Made with ❤️ for the Ant Design and Tailwind CSS communities.