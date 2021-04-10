import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";


export const Nav = styled.nav`
  background: black;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  height: 80px;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  left: 30px;
`;

export const NavIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #fff;
  position: absolute;
  right: 30px;
`;
export const Bars = styled(FaBars)`
  font-size: 2.8em;


  @media screen and (min-width: 1025px) {
    display: none;
  }
`;


export const MagnifyingGlass = styled(GiMagnifyingGlass)`
  color: black;
  font-size: 1.5em;
  position: absolute;
  color: black;
  right: 50px;
  top: 35px;
  color: black;
  z-index: 1100;
`;


export const SearchBar = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 30px;
  outline: none;
  padding: 20px;
  margin: 20px;
  display: flex;
  position: relative;
  z-index: 1000;


  @media screen and (min-width: 1025px) {
    width: 330px;

    &:focus {
      width: 500px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
  }
`;


