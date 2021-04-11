import React from "react";
import { CartContainer, DeleteButton, Trashcan, ItemImage, CartItem } from "./Cart.js";
import FullNavbar from "../../components/FullNavbar";
import {GlobalStyle} from '../../config/globalStyles'

const Cart = () => {
  return (
    <>
      <FullNavbar />
      <GlobalStyle />
      <CartContainer>
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
      </CartContainer>
    </>
  );
};

export default Cart;
