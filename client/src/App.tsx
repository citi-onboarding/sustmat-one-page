import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { HiringSection } from './pages';
import { Home } from './pages';

function App() {
  return (
    <HiringSection/>
  );
}

export default App;

/*
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
*/