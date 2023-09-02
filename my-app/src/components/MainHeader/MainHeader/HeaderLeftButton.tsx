import React from "react";
import { DropdownElementCommunity } from "./DropdownElementCommunity";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  margin-left: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: #bea6d8;
`;

export const HeaderLeftButton = () => (
  <Main>
    <Link href="/">
      <h3>Main</h3>
    </Link>
    <DropdownElementCommunity />
    <Link href="/shop">
      <h3>Shop</h3>
    </Link>
  </Main>
);
