import React from 'react';
import { Palette, Eye, Code, Download } from 'lucide-react';

const Demo: React.FC = () => {
  // 从实际的颜色数据中获取颜色值
  const lightColors = {
    blue: ['#e6f4ff', '#bae0ff', '#91caff', '#69b1ff', '#4096ff', '#1677ff', '#0958d9', '#003eb3', '#002c8c', '#001d66'],
    purple: ['#f9f0ff', '#efdbff', '#d3adf7', '#b37feb', '#9254de', '#722ed1', '#531dab', '#391085', '#22075e', '#120338'],
    cyan: ['#e6fffb', '#b5f5ec', '#87e8de', '#5cdbd3', '#36cfc9', '#13c2c2', '#08979c', '#006d75', '#00474f', '#002329'],
    green: ['#f6ffed', '#d9f7be', '#b7eb8f', '#95de64', '#73d13d', '#52c41a', '#389e0d', '#237804', '#135200', '#092b00'],
    magenta: ['#fff0f6', '#ffd6e7', '#ffadd2', '#ff85c0', '#f759ab', '#eb2f96', '#c41d7f', '#9e1068', '#780650', '#520339'],
    red: ['#fff1f0', '#ffccc7', '#ffa39e', '#ff7875', '#ff4d4f', '#f5222d', '#cf1322', '#a8071a', '#820014', '#5c0011'],
    orange: ['#fff7e6', '#ffe7ba', '#ffd591', '#ffc069', '#ffa940', '#fa8c16', '#d46b08', '#ad4e00', '#873800', '#612500'],
    yellow: ['#feffe6', '#ffffb8', '#fffb8f', '#fff566', '#ffec3d', '#fadb14', '#d4b106', '#ad8b00', '#876800', '#614700'],
    volcano: ['#fff2e8', '#ffd8bf', '#ffbb96', '#ff9c6e', '#ff7a45', '#fa541c', '#d4380d', '#ad2102', '#871400', '#610b00'],
    geekblue: ['#f0f5ff', '#d6e4ff', '#adc6ff', '#85a5ff', '#597ef7', '#2f54eb', '#1d39c4', '#10239e', '#061178', '#030852'],
    lime: ['#fcffe6', '#f4ffb8', '#eaff8f', '#d3f261', '#bae637', '#a0d911', '#7cb305', '#5b8c00', '#3f6600', '#254000'],
    gold: ['#fffbe6', '#fff1b8', '#ffe58f', '#ffd666', '#ffc53d', '#faad14', '#d48806', '#ad6800', '#874d00', '#613400'],
    grey: ['#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#434343', '#262626'],
    gray: ['#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#434343', '#262626']
  };

  const darkColors = {
    blue: ['#111a2c', '#112545', '#15325b', '#15417e', '#1554ad', '#1668dc', '#3c89e8', '#65a9f3', '#8dc5f8', '#b7dcfa'],
    purple: ['#1a1325', '#24163a', '#301c4d', '#3e2069', '#51258f', '#642ab5', '#854eca', '#ab7ae0', '#cda8f0', '#ebd7fa'],
    cyan: ['#112123', '#113536', '#144848', '#146262', '#138585', '#13a8a8', '#33bcb7', '#58d1c9', '#84e2d8', '#b2f1e8'],
    green: ['#162312', '#1d3712', '#274916', '#306317', '#3c8618', '#49aa19', '#6abe39', '#8fd460', '#b2e58b', '#d5f2bb'],
    magenta: ['#291321', '#40162f', '#551c3b', '#75204f', '#a02669', '#cb2b83', '#e0529c', '#f37fb7', '#f8a8cc', '#fad2e3'],
    red: ['#2a1215', '#431418', '#58181c', '#791a1f', '#a61d24', '#d32029', '#e84749', '#f37370', '#f89f9a', '#fac8c3'],
    orange: ['#2b1d11', '#442a11', '#593815', '#7c4a15', '#aa6215', '#d87a16', '#e89a3c', '#f3b765', '#f8cf8d', '#fae3b7'],
    yellow: ['#2b2611', '#443b11', '#595014', '#7c6e14', '#aa9514', '#d8bd14', '#e8d639', '#f3ea62', '#f8f48b', '#fafab5'],
    volcano: ['#2b1611', '#441d12', '#592716', '#7c3118', '#aa3e19', '#d84a1b', '#e87040', '#f3956a', '#f8b692', '#fad4bc'],
    geekblue: ['#131629', '#161d40', '#1c2755', '#203175', '#263ea0', '#2b4acb', '#5273e0', '#7f9ef3', '#a8c1f8', '#d2e0fa'],
    lime: ['#1f2611', '#2e3c10', '#3e4f13', '#536d13', '#6f9412', '#8bbb11', '#a9d134', '#c9e75d', '#e4f88b', '#f0fab5'],
    gold: ['#2b2111', '#443111', '#594214', '#7c5914', '#aa7714', '#d89614', '#e8b339', '#f3cc62', '#f8df8b', '#faedb5'],
    grey: ['#151515', '#1f1f1f', '#2d2d2d', '#393939', '#494949', '#5a5a5a', '#6a6a6a', '#7b7b7b', '#888888', '#969696'],
    gray: ['#151515', '#1f1f1f', '#2d2d2d', '#393939', '#494949', '#5a5a5a', '#6a6a6a', '#7b7b7b', '#888888', '#969696']
  };

  const getColorValue = (colorName: string, shade: number, isDark: boolean) => {
    const colorMap = isDark ? darkColors : lightColors;
    return colorMap[colorName as keyof typeof colorMap]?.[shade - 1] || '#000000';
  };

  const colorNames = [
    'blue', 'purple', 'cyan', 'green', 'magenta', 'red',
    'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold', 'grey'
  ];

  const primaryColors = {
    blue: '#1677FF',
    cyan: '#13C2C2',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    green: '#52C41A',
    grey: '#666666',
    lime: '#A0D911',
    magenta: '#EB2F96',
    orange: '#FA8C16',
    purple: '#722ED1',
    red: '#F5222D',
    volcano: '#FA541C',
    yellow: '#FADB14'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-antd-primary-blue p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Tailwind Ant Design Preset
                </h1>
                <p className="text-gray-600">
                  Official Ant Design colors for Tailwind CSS
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <code className="text-sm font-mono text-gray-700">v1.0.0</code>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Quick Start */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Download className="w-6 h-6 text-antd-primary-blue" />
              <h2 className="text-2xl font-semibold text-gray-800">Quick Start</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Installation</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono">npm install tailwind-antd-preset</code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Configuration</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-blue-400 font-mono text-sm">
{`import antdPreset from 'tailwind-antd-preset';

export default {
  presets: [antdPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}']
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Colors */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Primary Colors</h2>
            <p className="text-gray-600 mb-8">
              Single-value primary colors for each Ant Design color family.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {Object.entries(primaryColors).map(([colorName, colorValue]) => (
                <div key={colorName} className="text-center">
                  <div
                    className={`bg-antd-primary-${colorName} h-20 w-full rounded-lg shadow-sm mb-3 border border-gray-200`}
                    style={{ backgroundColor: colorValue }}
                  />
                  <div className="space-y-1">
                    <p className="font-medium text-gray-700 capitalize text-sm">
                      {colorName}
                    </p>
                    <code className="text-xs text-gray-500 font-mono block">
                      antd-primary-{colorName}
                    </code>
                    <code className="text-xs text-gray-400 font-mono block">
                      {colorValue}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Light Theme Colors */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-6 h-6 text-antd-primary-blue" />
              <h2 className="text-2xl font-semibold text-gray-800">Light Theme Colors</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Complete 10-shade palette for each color family. Perfect for light theme designs.
            </p>
            <div className="grid gap-8">
              {colorNames.map((colorName) => (
                <div key={colorName} className="border border-gray-100 rounded-lg p-6 bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-700 mb-4 capitalize flex items-center">
                    <div 
                      className={`w-4 h-4 rounded-full mr-3 bg-antd-${colorName}-6`}
                    />
                    {colorName}
                  </h3>
                  <div className="grid grid-cols-10 gap-2">
                    {Array.from({ length: 10 }, (_, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`h-16 rounded-md border border-gray-200 mb-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                          style={{ backgroundColor: getColorValue(colorName, index + 1, false) }}
                          title={`bg-antd-${colorName}-${index + 1}`}
                        />
                        <span className="text-xs text-gray-500 font-mono">
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-500 font-mono bg-white px-3 py-2 rounded border">
                    bg-antd-{colorName}-[1-10]
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Theme Colors */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dark Theme Colors</h2>
            <p className="text-gray-600 mb-8">
              Optimized dark theme variants with proper contrast ratios for dark backgrounds.
            </p>
            <div className="grid gap-8">
              {colorNames.map((colorName) => (
                <div key={colorName} className="border border-gray-100 rounded-lg p-6 bg-gray-900">
                  <h3 className="text-lg font-medium text-white mb-4 capitalize flex items-center">
                    <div 
                      className={`w-4 h-4 rounded-full mr-3 bg-antd-dark-${colorName}-6`}
                    />
                    {colorName} (Dark)
                  </h3>
                  <div className="grid grid-cols-10 gap-2">
                    {Array.from({ length: 10 }, (_, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`h-16 rounded-md border border-gray-600 mb-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                          style={{ backgroundColor: getColorValue(colorName, index + 1, true) }}
                          title={`bg-antd-dark-${colorName}-${index + 1}`}
                        />
                        <span className="text-xs text-gray-400 font-mono">
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-400 font-mono bg-gray-800 px-3 py-2 rounded border border-gray-700">
                    bg-antd-dark-{colorName}-[1-10]
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="w-6 h-6 text-antd-primary-blue" />
              <h2 className="text-2xl font-semibold text-gray-800">Usage Examples</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Buttons & Components</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-antd-primary-blue hover:bg-antd-blue-7 text-white px-6 py-2 rounded-lg transition-colors shadow-sm">
                      Primary
                    </button>
                    <button className="bg-antd-primary-green hover:bg-antd-green-7 text-white px-6 py-2 rounded-lg transition-colors shadow-sm">
                      Success
                    </button>
                    <button className="bg-antd-primary-red hover:bg-antd-red-6 text-white px-6 py-2 rounded-lg transition-colors shadow-sm">
                      Danger
                    </button>
                    <button className="bg-antd-primary-orange hover:bg-antd-orange-7 text-white px-6 py-2 rounded-lg transition-colors shadow-sm">
                      Warning
                    </button>
                  </div>
                  
                  <div className="bg-antd-blue-1 border border-antd-blue-3 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-antd-primary-blue rounded-full"></div>
                      <p className="text-antd-blue-7 font-medium">Information</p>
                    </div>
                    <p className="text-antd-blue-6 text-sm">This is an informational message using Ant Design colors.</p>
                  </div>
                </div>
              </div>

              {/* Cards & Layouts */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Cards & Layouts</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-antd-purple-1 to-antd-blue-1 p-6 rounded-lg border border-antd-purple-2">
                    <h4 className="text-antd-purple-8 font-semibold mb-2">Gradient Card</h4>
                    <p className="text-antd-purple-7 text-sm">Beautiful gradients using Ant Design colors</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-antd-green-1 border-l-4 border-antd-primary-green p-3 rounded">
                      <p className="text-antd-green-8 text-xs font-medium">Success</p>
                    </div>
                    <div className="bg-antd-orange-1 border-l-4 border-antd-primary-orange p-3 rounded">
                      <p className="text-antd-orange-8 text-xs font-medium">Warning</p>
                    </div>
                    <div className="bg-antd-red-1 border-l-4 border-antd-primary-red p-3 rounded">
                      <p className="text-antd-red-8 text-xs font-medium">Error</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-4">Light Theme Usage</h3>
              <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                <code className="text-blue-400">
{`<!-- Background colors -->
<div className="bg-antd-blue-1">Light blue bg</div>
<div className="bg-antd-red-6">Primary red bg</div>

<!-- Text colors -->
<p className="text-antd-green-7">Success text</p>
<p className="text-antd-orange-6">Warning text</p>

<!-- Border colors -->
<div className="border border-antd-grey-4">
  Subtle border
</div>

<!-- Primary colors -->
<button className="bg-antd-primary-blue">
  Primary button
</button>`}
                </code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-4">Dark Theme Usage</h3>
              <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                <code className="text-purple-400">
{`<!-- Dark theme colors -->
<div className="bg-antd-dark-blue-6">
  Dark blue background
</div>

<!-- Dark text on light bg -->
<p className="text-antd-dark-grey-8">
  Dark theme text
</p>

<!-- Mixed usage -->
<div className="bg-antd-dark-purple-2 
            border border-antd-dark-purple-4">
  <h3 className="text-antd-dark-purple-9">
    Dark theme card
  </h3>
</div>`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Color Scale Guide */}
        <section className="mt-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Color Scale Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-antd-blue-1 rounded-lg border border-antd-blue-2">
                <div className="text-2xl font-bold text-antd-blue-8 mb-2">1-3</div>
                <p className="text-antd-blue-7 font-medium">Light Shades</p>
                <p className="text-antd-blue-6 text-sm">Backgrounds, subtle elements</p>
              </div>
              <div className="text-center p-6 bg-antd-blue-5 rounded-lg border border-antd-blue-6">
                <div className="text-2xl font-bold text-white mb-2">4-6</div>
                <p className="text-white font-medium">Medium Shades</p>
                <p className="text-antd-blue-1 text-sm">Primary usage, buttons</p>
              </div>
              <div className="text-center p-6 bg-antd-blue-8 rounded-lg border border-antd-blue-9">
                <div className="text-2xl font-bold text-white mb-2">7-10</div>
                <p className="text-white font-medium">Dark Shades</p>
                <p className="text-antd-blue-2 text-sm">Text, emphasis</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;