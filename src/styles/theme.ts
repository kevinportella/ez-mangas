import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, Georgia, serif',
    mono: 'Poppins, Menlo, monospace',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
