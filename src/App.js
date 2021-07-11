import React from "react";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// Rather than importing the specific location of the file we can import the methods that we need directly

import { Products, Navbar, Cart, Checkout } from "./components";

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
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const updateCartHandler = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const removeFromCartHandler = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const emptyCartHandler = async (productId) => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
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
            <Cart
              cart={cart}
              updateCartHandler={updateCartHandler}
              removeFromCartHandler={removeFromCartHandler}
              emptyCartHandler={emptyCartHandler}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
