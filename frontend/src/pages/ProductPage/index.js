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
  Arrow,
  Status
} from "./ProductPage.js";
import { GlobalStyle } from "../../config/globalStyles";
import FullNavbar from "../../components/FullNavbar";
import { NavLink } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import { addToCart } from "../../redux/actions/cartActions";

const ProductPage = ({ match }, { history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

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
          <Status>
            Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </Status>

          <p>Size (EU)</p>
          <SizeSelector value={qty} onChange={(e) => setQty(e.target.value)}>
            {[...Array(product.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </SizeSelector>
          <AddToCartContainer>
            <AddToCartButton>
              Add to cart
            </AddToCartButton>
            {[...Array(product.countInStock).keys()].map((x) => {})}
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
