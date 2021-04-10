import React from "react";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  SearchBar,
  MagnifyingGlass,
  SearchContainer,
} from "./NavbarElements";

const Navbar = ({ toggle, text }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>G.S.</h1>
        </NavLink>
        <SearchContainer>
          <MagnifyingGlass />
          <SearchBar placeholder="search articles and ideas" />
        </SearchContainer>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
