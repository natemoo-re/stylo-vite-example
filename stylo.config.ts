import { Config } from '@stylo/core';

declare global {
  namespace Stylo {
    interface Types {
      Modes: 'dark';
      Theme: typeof theme;
      Scale: keyof typeof theme;
    }
  }
}

const theme = {
  space: {
    '2xs': 'base / 4',
    xs: 'base / 2',
    base: 8,
    sm: 'base * 1',
    md: 'base * 2',
    lg: 'base * 4',
    xl: 'base * 6',
    '2xl': 'base * 8',
    '3xl': 'base * 12',
    '4xl': 'base * 16'
  },
  colors: {
    surface: '#FFF',
    text: '#000',
    primary: {
      default: '#e91e63',
      400: '@default',
      500: '#d81b60',
    },
  },
  fontSizes: {
    sm: 14,
    base: 16,
    lg: 24,
    xl: 36,
  },
  radii: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
  transitions: {
    quickOut: '120ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    slowOut: '500ms cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
};

export const config: Config = {
  prefix: 'sys',
  theme,
  modes: {
    dark: {
      colors: {
        surface: '#000',
        text: '#FFF',
      },
    },
  },
};
