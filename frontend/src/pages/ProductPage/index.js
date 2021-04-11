import React from "react";
import {
  ProductImage,
  SizeSelector,
  AddToCartButton,
  StyledLikeButton,
  ProductContainer,
  ViewCart
} from "./ProductPage.js";
import { GlobalStyle } from "../../config/globalStyles";
import FullNavbar from "../../components/FullNavbar";
import { NavLink } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <GlobalStyle />
      <FullNavbar />
      <ProductContainer>
        <ProductImage />
        <h1>title</h1>
        <p>description</p>
        <p>price</p>
        <SizeSelector>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </SizeSelector>
        <AddToCartButton>Add to cart</AddToCartButton>
        <NavLink to="/cart">View Shopping Cart(10)</NavLink>
        <NavLink to="/liked">
          {" "}
          <StyledLikeButton />
        </NavLink>
      </ProductContainer>
    </div>
  );
};

export default ProductPage;
