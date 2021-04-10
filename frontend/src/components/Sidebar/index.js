import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  CloseIcon,
  SideBtnWrap,
  Icon,
  ShoppingCart,
  CartContainer,
  ProfileButton,
  Contact,
  StyledLink,
  LikeButton,
  IconContainer,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/">Women</SidebarLink>
          <SidebarLink to="/">Kids</SidebarLink>
          <SidebarLink to="/">Men</SidebarLink>
        </SidebarMenu>
        <span>
          <StyledLink to="/cart">
            <CartContainer>
              <ShoppingCart />
              <p>Cart</p>(10)
            </CartContainer>
          </StyledLink>
          <IconContainer>
            <StyledLink to="/profile">
              <ProfileButton />
            </StyledLink>
            <StyledLink to="/likes">
              <LikeButton />
            </StyledLink>
          </IconContainer>
          <SideBtnWrap>
            <Contact to="/contact">Contact Us</Contact>
          </SideBtnWrap>
        </span>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
