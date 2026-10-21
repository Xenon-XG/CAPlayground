export type SupportedFilterTypes = 'gaussianBlur' | 'colorContrast' | 'colorHueRotate' | 'colorInvert' | 'colorSaturate' | 'CISepiaTone';

export type Filter = {
  name: string;
  type: SupportedFilterTypes;
  value: number;
  enabled?: boolean;
  valueLabel?: string;
};

export const supportedFilters: Record<SupportedFilterTypes, Filter> = {
  gaussianBlur: {
    name: 'Gaussian Blur',
    type: 'gaussianBlur',
    enabled: true,
    value: 10,
    valueLabel: '半径',
  },
  colorContrast: {
    name: 'Contrast',
    type: 'colorContrast',
    value: 1,
    valueLabel: '强度',
    enabled: true,
  },
  colorHueRotate: {
    name: 'Hue Rotate',
    type: 'colorHueRotate',
    value: 0,
    valueLabel: '角度',
    enabled: true,
  },
  colorInvert: {
    name: 'Invert',
    type: 'colorInvert',
    value: 0,
    enabled: true,
  },
  colorSaturate: {
    name: 'Saturate',
    type: 'colorSaturate',
    value: 0,
    valueLabel: '强度',
    enabled: true,
  },
  CISepiaTone: {
    name: 'Sepia',
    type: 'CISepiaTone',
    value: 1,
    valueLabel: '强度',
    enabled: true,
  },
};

// Saved filter names and CAML identifiers remain in their original form.
export const filterLabels: Record<SupportedFilterTypes, string> = {
  gaussianBlur: '高斯模糊',
  colorContrast: '对比度',
  colorHueRotate: '色相旋转',
  colorInvert: '反色',
  colorSaturate: '饱和度',
  CISepiaTone: '复古棕褐色',
};
