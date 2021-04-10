import React from "react";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  ShoppingCart,
  CartContainer,
  Quantity
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Golden Shoe</h1>
        </NavLink>
        <div>
          <NavIcon onClick={toggle}>
            <Bars />
          </NavIcon>
          <NavLink to="/cart">
            <CartContainer>
              <ShoppingCart />
              <p>Cart</p>(10)
            </CartContainer>
          </NavLink>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
