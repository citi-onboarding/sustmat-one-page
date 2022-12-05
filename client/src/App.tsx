import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Home } from './pages';
import { Footer } from './pages';

function App() {
  return (
    <Footer/>
  );
}

export default App;

/*
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
*/