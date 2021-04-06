import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  CloseIcon,
  SidebarRoute,
  SideBtnWrap,
  Icon,
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
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
