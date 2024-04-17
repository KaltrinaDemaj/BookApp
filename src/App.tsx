import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExoloreTopBooks } from './layouts/NavbarAndFooter/HomePage/ExploreTopBooks';

function App() {
  return (
    <div>
      <Navbar/>
      <ExoloreTopBooks/>
    </div>
  );
}

export default App;
