import React from "react";
import {
  CartContainer,
  DeleteButton,
  Trashcan,
  ItemImage,
  CartItem,
  OrderTotal,
} from "./Cart.js";
import FullNavbar from "../../components/FullNavbar";
import { GlobalStyle } from "../../config/globalStyles";
import { AddToCartButton } from "../ProductPage/ProductPage.js";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <FullNavbar />
      <GlobalStyle />
      <CartContainer>
        <h1>Shopping Cart</h1>
        <CartItem>
          <h2>Item name</h2>
          <p>4 pcs.</p>
          <ItemImage />
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <DeleteButton>
            <Trashcan />
          </DeleteButton>
        </CartItem>
        <OrderTotal>
          <p>Order total: 348234</p>
          <AddToCartButton>Proceed to checkout</AddToCartButton>
          <NavLink to="/">Back to shop</NavLink>
        </OrderTotal>
      </CartContainer>
    </>
  );
};

export default Cart;
