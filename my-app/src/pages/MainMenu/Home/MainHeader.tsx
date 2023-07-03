import React from 'react';
import styled from 'styled-components';
import { HeaderLeftButton } from '../../../components/MainHeader/MainHeader/HeaderLeftButton';
import { HeaderRightButton } from '../../../components/MainHeader/MainHeader/HeaderRightButton';

const Header = styled.header``;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: lightskyblue;
`;

const LeftPanel = styled.div`
  float: left;
  display: block;
`;

const RightPanel = styled.div`
  display: flex;
`;

export const MainHeader = () => (
  <Header>
    <Nav>
      <LeftPanel>
        <HeaderLeftButton />
      </LeftPanel>
      <RightPanel>
        <HeaderRightButton />
      </RightPanel>
    </Nav>
  </Header>
);
