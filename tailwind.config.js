import antdPreset from './src/index.ts';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [antdPreset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // 确保所有 antd 颜色类都被包含
    {
      pattern: /^bg-antd-(blue|purple|cyan|green|magenta|red|orange|yellow|volcano|geekblue|lime|gold|grey|gray)-(1|2|3|4|5|6|7|8|9|10)$/,
    },
    {
      pattern: /^bg-antd-dark-(blue|purple|cyan|green|magenta|red|orange|yellow|volcano|geekblue|lime|gold|grey|gray)-(1|2|3|4|5|6|7|8|9|10)$/,
    },
    {
      pattern: /^bg-antd-primary-(blue|purple|cyan|green|magenta|red|orange|yellow|volcano|geekblue|lime|gold|grey|gray)$/,
    },
    {
      pattern: /^text-antd-(blue|purple|cyan|green|magenta|red|orange|yellow|volcano|geekblue|lime|gold|grey|gray)-(1|2|3|4|5|6|7|8|9|10)$/,
    },
    {
      pattern: /^text-antd-dark-(blue|purple|cyan|green|magenta|red|orange|yellow|volcano|geekblue|lime|gold|grey|gray)-(1|2|3|4|5|6|7|8|9|10)$/,
    },
    {
      pattern: /^border-antd-(blue|purple|cyan|green|magenta|red|orange|yellow|volcano|geekblue|lime|gold|grey|gray)-(1|2|3|4|5|6|7|8|9|10)$/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};