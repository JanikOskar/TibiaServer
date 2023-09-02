import React from "react";
import styled from "styled-components";
import { HeaderLeftButton } from "./HeaderLeftButton";
import { HeaderRightButton } from "./HeaderRightButton";
import { useRWD } from "@appsomesolutions/rwd-utils";
import { HamburgerMenu } from "./HamburgerMenu";

const Header = styled.header``;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #1e2128;
`;

const LeftPanel = styled.div`
  display: flex;

`;

const RightPanel = styled.div`
  display: flex;

`;

export const MainHeader = () => {
  const { less } = useRWD();

  return (
    <Header>
      <Nav>
        {less.md ? (
          <HamburgerMenu />
        ) : (
          <>
            <LeftPanel>
              <HeaderLeftButton />
            </LeftPanel>
            <RightPanel>
              <HeaderRightButton />
            </RightPanel>
          </>
        )}
      </Nav>
    </Header>
  );
};
