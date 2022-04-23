import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Home from './pages/Home';
import LocalesProvider from './context/Locales';

import GlobalStyle from './styles/GlobalStyle';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#F5DD90',
    },
  },
});

function App() {
  return (
    <LocalesProvider>
      <ChakraProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ChakraProvider>
    </LocalesProvider>
  );
}

export default App;
