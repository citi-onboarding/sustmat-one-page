import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Banner, Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
