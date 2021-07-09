import React from "react";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// Rather than importing the specific location of the file we can import the methods that we need directly

import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
