import antdPreset from './src/index.ts';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [antdPreset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
