import React from 'react';

import { ContactUs, HiringSection } from './pages';
import { Footer } from './pages';
import { Navbar } from './pages';
import { AdvantagesSection } from './pages';
import { Banner} from './pages';

function App() {
  return (
    <>
      <Navbar/> 
      <section id='banner'><Banner/></section>
      <section id='advantages'><AdvantagesSection/></section>
      <section id='team'><HiringSection/></section>
      <section id='team'><HiringSection/></section>
      <ContactUs />
      <Footer/>
    </>
  )
}

export default App;