import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const theme = extendTheme({
  fonts: {
    heading: 'Rubik',
    body: 'Quicksand',
    mono: 'Menlo, monospace',
  },
  config: {
    initalColorMode: 'Light',
    useSystemColorMode: false,
  },
  breakpoints: breakpoints,
});

export default theme;
