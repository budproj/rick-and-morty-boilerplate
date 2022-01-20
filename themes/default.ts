import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },

  colors: {
    brand: {
      50: '#F1F1FF',
      100: '#E2E2FF',
      200: '#C5C5FF',
      300: '#A9A8FF',
      400: '#8C8BFF',
      500: '#6F6EFF',
      600: '#5353BF',
      700: '#383780',
      800: '#1C1C40',
      900: '#0B0B1A',
    },
  },
})