import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/Home Page/HomePage";

export const App = () => {
   return (
      <div>
         <Navbar />
         <Footer />
         <HomePage />
      </div>
   );
};
