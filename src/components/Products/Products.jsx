import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product_design/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$150", image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg'},
  { id: 2, name: "MacBook", description: "Apple MacBook", price: "$999", image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_TR?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672889000'},
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
