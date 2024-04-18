import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExoloreTopBooks } from './layouts/Home Page/ExploreTopBooks';
import { Carousel } from './layouts/Home Page/Carousel';
import { Heros } from './layouts/Home Page/Heros';
import { LibraryServices } from './layouts/Home Page/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <ExoloreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
      <Footer/>
    </div>
  );
}

export default App;
