import React from "react";
import { Nav, NavLink, NavIcon, Bars, ShoppingCart } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Golden Shoe</NavLink>
        <div>
          <NavIcon onClick={toggle}>
            <Bars />
          </NavIcon>
          <NavLink to="/cart">
            <ShoppingCart />
          </NavLink>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
