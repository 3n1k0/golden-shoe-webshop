import React from "react";
import {
  SizeSelector,
  AddToCartButton,
  StyledLikeButton,
  FirstBigContainer,
  ImageContainer,
  SecondBigContainer,
  ShippingInformation,
  ReturnPolicy,
  AddToCartContainer,
  Reviews,
  Stars,
  Price,
  Color,
  ViewCart,
  Truck,
  Arrow
} from "./ProductPage.js";
import { GlobalStyle } from "../../config/globalStyles";
import FullNavbar from "../../components/FullNavbar";
import { NavLink } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/Footer'

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  console.log(props, productDetails);

  useEffect(() => {
    dispatch(getProductDetails(props.match.params.id));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GlobalStyle />
      <FullNavbar />
      <FirstBigContainer>
        <ImageContainer>
          <img src={product.imageUrl} />
        </ImageContainer>
        <span>
          <h2>{product.name}</h2>
          <h5>SKU: {product._id}</h5>
          <Reviews>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <p>(149 reviews)</p>
          </Reviews>
          <Price>{product.price} Ercsi</Price>
          <Color>
            <b>Color:</b> valoszinu
          </Color>

          <p>Size (EU)</p>
          <SizeSelector>
            <option>37</option>
            <option>39</option>
            <option>40</option>
            <option>43</option>
          </SizeSelector>
          <AddToCartContainer>
            <AddToCartButton>Add to cart</AddToCartButton>
            <StyledLikeButton />
          </AddToCartContainer>

          <ViewCart to="/cart">View Shopping Cart(10)</ViewCart>
          <NavLink to="/liked"></NavLink>
          <ShippingInformation>
            <Truck />
            <p>
              Free Shipping Free standard shipping on orders over 29,00€
              Estimated to be delivered on 26/04/2021 - 29/04/2021.
            </p>
          </ShippingInformation>
          <ReturnPolicy>
            <Arrow />
            Return Policy
            <br /> Learn more
          </ReturnPolicy>
        </span>
      </FirstBigContainer>
      <SecondBigContainer>
        <p>{product.description}</p>
      </SecondBigContainer>
      <Footer />
    </div>
  );
};

export default ProductPage;
