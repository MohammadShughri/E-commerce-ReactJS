import React from "react";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// Rather than importing the specific location of the file we can import the methods that we need directly

import { Products, Navbar, Cart } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCartHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  //console.log(products);
  console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_Items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={addToCartHandler} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
