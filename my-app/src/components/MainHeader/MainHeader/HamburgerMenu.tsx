import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const HamburgerMenuStyled = styled.div`
  padding: 12px 16px;
  height: 56px;
  background-color: #1E2128;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HamburgerLink = styled.a`
  text-decoration: none;
  color: white;
`;

const DrawerMenu = styled(Drawer)``;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerMenuStyled>
        {!isOpen ? (
          <MenuUnfoldOutlined
          style={{color: 'white'}}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        ) : (
          <MenuFoldOutlined
          style={{color: 'white'}}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        )}
        <DrawerMenu
          bodyStyle={{
            backgroundColor: "#1E2128",
            display: "flex",
            flexDirection: "column",
            padding: "12px",
          }}
          title={<span style={{ color: "white" }}>World Of Anime</span>}
          headerStyle={{ color: "white", backgroundColor: "#191C21" }}
          closeIcon={<span style={{ color: "grey" }}>x</span>}
          placement="right"
          onClose={() => {
            setIsOpen(false);
          }}
          open={isOpen}
        >
          <HamburgerLink href="/">News</HamburgerLink>
          <HamburgerLink href="/register">Register</HamburgerLink>
          <HamburgerLink href="/download">Download</HamburgerLink>
          <HamburgerLink href="/team">Team</HamburgerLink>
          <HamburgerLink href="/rules">Rules</HamburgerLink>
          <HamburgerLink href="/shop">Shop Offers</HamburgerLink>
          <HamburgerLink href="/techniques">Techniques</HamburgerLink>
          <HamburgerLink href="/items">Items</HamburgerLink>
          <HamburgerLink href="/monsters">Monsters</HamburgerLink>
          <HamburgerLink href="/missions">Missions</HamburgerLink>
          <HamburgerLink href="/enchants">Enchants</HamburgerLink>
          <HamburgerLink href="/dragonball">Dragon Ball</HamburgerLink>
          <HamburgerLink href="/autoloot">Autoloot</HamburgerLink>
          <HamburgerLink href="/banlist">Ban list</HamburgerLink>
          <HamburgerLink href="/highscore/level">Highscores</HamburgerLink>
        </DrawerMenu>
      </HamburgerMenuStyled>
      <h2 style={{ color: "white", marginRight: "12px" }}>World Of Anime</h2>
    </>
  );
};
