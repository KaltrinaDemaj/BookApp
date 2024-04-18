import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExoloreTopBooks } from './layouts/Home Page/ExploreTopBooks';
import { Carousel } from './layouts/Home Page/Carousel';
import { Heros } from './layouts/Home Page/Heros';

function App() {
  return (
    <div>
      <Navbar/>
      <ExoloreTopBooks/>
      <Carousel/>
      <Heros/>
    </div>
  );
}

export default App;
