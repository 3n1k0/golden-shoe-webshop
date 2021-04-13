import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import FullNavbar from "../components/FullNavbar";
import Footer from "../components/FooterElements";
import { GlobalStyle } from "../config/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import {AddToCartButton} from './ProductPage'

export const CartContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 100vh;

  h1 {
    padding: 50px;
  }
`;

export const OrderTotal = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(230, 230, 230, 0.7);
  height: 100%;
  padding: 50px;

  p {
    font-weight: bolder;
  }
`;

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <FullNavbar />
      <GlobalStyle />
      <CartContainer>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}

        <OrderTotal>
          <p>Subtotal ({getCartCount()}) items</p>
          <p>€{getCartSubTotal()}</p>
          <AddToCartButton>Proceed To Checkout</AddToCartButton>
        </OrderTotal>
      </CartContainer>
      <Footer />
    </>
  );
};

export default CartScreen;
