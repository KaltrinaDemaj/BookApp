import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExoloreTopBooks } from './layouts/Home Page/ExploreTopBooks';
import { Carousel } from './layouts/Home Page/Carousel';

function App() {
  return (
    <div>
      <Navbar/>
      <ExoloreTopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
