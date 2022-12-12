import React from 'react';

import { HiringSection } from './pages';
import { Footer } from './pages';
import { Navbar } from './pages';
import { AdvantagesSection } from './pages';

function App() {
  return (
    <>
      <Navbar/> 
      <AdvantagesSection/>
      <HiringSection/>
      <Footer/>
    </>
  )
}

export default App;