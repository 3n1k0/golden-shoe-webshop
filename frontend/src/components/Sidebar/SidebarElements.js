import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";


export const SidebarContainer = styled.aside`
  position: absolute;
  height: 100%;
  width: 350px;
  background: #ffc500;
  padding-top: 100px;
  place-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  right: 0;
  pointer-events: none;
  z-index: 2;

  @media screen and (min-width: 1025px) {
    right: 0;
    height: 80px;
    background: transparent;
   display: flex;
    align-items: center;
    width: 100%;
    padding-left: 100px;
    padding-top: 0;
  }

  span {
    display: grid;
    place-items: center;
    position: relative;
    height: 200px;

    @media screen and (min-width: 1025px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      right: 0;
      padding-right: 10px;
      position: absolute;
      height: 80px;
    }
  }
`;

export const ProfileButton = styled(CgProfile)`
  color: black;
  font-size: 1.5em;
  margin: 10px;
  @media screen and (min-width: 1025px) {
    color: white;
  }

  &:hover {
    color: gold;
  }
`;
export const LikeButton = styled(FaRegHeart)`
  color: black;
  font-size: 1.5em;
  margin: 10px;
  @media screen and (min-width: 1025px) {
    color: white;
  }

  &:hover {
    color: gold;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  pointer-events: auto;

  @media screen and (min-width: 1025px) {
    display: flex;
    justify-content: flex-start;
    position: absolute;
  }
`;
export const SidebarLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  margin: 20px;

  &:hover {
    color: gold;
    transition: 0.2s ease-in-out;
  }

  @media screen and (min-width: 1025px) {
    color: white;
    font-size: 1.3rem;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Contact = styled.button`
  background: rgb(40, 30, 20);
  white-space: nowrap;
  padding: 16px 64px;
  margin: 10px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: whitesmoke;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #cf7500;
    color: wheat;
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Login = styled(Link)`
  color: black;
  text-decoration: none;

  @media screen and (min-width: 1025px) {
    display: flex;
    color: white;
    padding: 20px;
  }
`;
export const Register = styled(Login)`
  @media screen and (min-width: 1025px) {
    display: flex;
  }
`;

export const ShoppingCart = styled(FiShoppingCart)`
  font-size: 1.5em;
`;

export const CartContainer = styled.div`
  width: 100%;
  padding: 15px;
  height: 40px;
  background: transparent;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;

  p {
    font-size: 1em;
    padding-left: 10px;
    padding-right: 3px;
  }

  &:hover {
    color: gold;
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
`;

export const StyledLink = styled(Link)`
  color: black;
  @media screen and (min-width: 1025px) {
    color: white;
    padding: 10px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  pointer-events: auto;
`;
