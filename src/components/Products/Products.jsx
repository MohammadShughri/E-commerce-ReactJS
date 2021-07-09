import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product_design/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$150",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook",
    price: "$999",
    image:
      "https://www.apple.com/v/macbook-pro-16/c/images/meta/og__csakh451i0eq_large.png",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
