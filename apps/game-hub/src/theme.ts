import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: '#F9F9F9' },
          100: { value: '#EDEDED' },
          200: { value: '#D3D3D3' },
          300: { value: '#B3B3B3' },
          400: { value: '#A0A0A0' },
          500: { value: '#898989' },
          600: { value: '#6C6C6C' },
          700: { value: '#202020' },
          800: { value: '#121212' },
          900: { value: '#111' },
        },
      },
    },
  },
});

export default system;
