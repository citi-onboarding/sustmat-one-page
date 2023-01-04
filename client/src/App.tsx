import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { ContactUs, HiringSection } from './pages';
import { Footer } from './pages';
import { Navbar } from './pages';
import { AdvantagesSection } from './pages';
import { Banner} from './pages';
import { Carousel } from './pages';

function App() {
  return (
    <>
      <Navbar/> 
      <Banner/>
      <AdvantagesSection/>
      <Carousel/>
      <HiringSection/>
      {/* <ContactUs/> */}
      <Footer/>
    </>
  )
}
export default App;