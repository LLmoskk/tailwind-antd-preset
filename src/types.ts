export interface AntdColorPalette {
  [colorName: string]: string[];
}

export interface TailwindColorObject {
  [colorName: string]: {
    [shade: string]: string;
  };
}

export interface AntdPreset {
  theme: {
    extend: {
      colors: TailwindColorObject;
    };
  };
}