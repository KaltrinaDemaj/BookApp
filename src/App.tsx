import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExoloreTopBooks } from './layouts/Home Page/ExploreTopBooks';
import { Carousel } from './layouts/Home Page/Carousel';
import { Heros } from './layouts/Home Page/Heros';
import { LibraryServices } from './layouts/Home Page/LibraryServices';

function App() {
  return (
    <div>
      <Navbar/>
      <ExoloreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
    </div>
  );
}

export default App;
