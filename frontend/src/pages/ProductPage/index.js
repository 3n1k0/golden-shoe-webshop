import React from "react";
import { ProductImage } from "./ProductPage.js";
import { GlobalStyle } from "../../config/globalStyles";
import Hero from "../../components/Hero";

const ProductPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Hero/>
      <ProductImage />
    </div>
  );
};

export default ProductPage;
