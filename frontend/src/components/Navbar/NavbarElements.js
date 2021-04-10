import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const Nav = styled.nav`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;

`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

`;

export const Bars = styled(FaBars)`
  font-size: 3rem;
  margin: 20px;
  transform: translate(-50%, -15%);
`;

export const ShoppingCart = styled(FiShoppingCart)`
font-size: 1.5em;
`

export const CartContainer = styled.div`
  width: 100%;
  padding: 15px;
  height: 40px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  position: relative;
  right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1em;
    padding-left: 10px;
    padding-right: 3px;
  }
`; 

export const Quantity = styled.div`
color: black;
width: 24px;
height: 24px;
background-color: white;
border-radius: 50%;
display: grid;
place-items: center;
`