import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Home } from './pages';
<<<<<<< HEAD
import { Footer } from './pages';

function App() {
  return (
    <Footer/>
=======
import { Navbar } from './pages';

function App() {
  return (
      <Navbar/>
>>>>>>> develop
  );
}

export default App;

/*
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
=======
<ThemeProvider theme={theme}>
<Home/>
<GlobalStyle/>
</ThemeProvider>
>>>>>>> develop
*/