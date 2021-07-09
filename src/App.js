import React from "react";

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// Rather than importing the specific location of the file we can import the methods that we need directly

import { Products, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
