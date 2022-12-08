import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Banner, Home } from './pages';

function App() {
  return (
      <Banner/>
  );
}

export default App;
