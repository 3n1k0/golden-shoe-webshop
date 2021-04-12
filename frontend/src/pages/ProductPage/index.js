import React from "react";
import {
  ProductImage,
  SizeSelector,
  AddToCartButton,
  StyledLikeButton,
  ProductContainer,
  ViewCart,
} from "./ProductPage.js";
import { GlobalStyle } from "../../config/globalStyles";
import FullNavbar from "../../components/FullNavbar";
import { NavLink } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";



const ProductPage = (props) => {

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

console.log(props, productDetails)


  useEffect(() => {
    dispatch(getProductDetails(props.match.params.id));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <GlobalStyle />
      <FullNavbar />
      <ProductContainer>
        <ProductImage />
        <h1>{product.name}</h1>
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
