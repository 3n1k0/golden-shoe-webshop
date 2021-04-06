import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.8rem;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
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
