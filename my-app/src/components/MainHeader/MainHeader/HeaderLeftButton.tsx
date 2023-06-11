import React from 'react';
import styled from 'styled-components';
import { HeaderHiddenLists } from './HeaderHiddenLists';

const VisibleList = styled.li`
  margin:20px;
  &&:hover #hidden {
    display: block;
  }
  list-style: none;
`;

const Hidden = styled.ul`
  display: none;
`;

const MainLists = styled.ul`
  display: flex;
  padding: 0;
`;

export const HeaderLeftButton = () => (
  <MainLists>
    <VisibleList>
      <a href="">Main</a>
      <Hidden id="hidden">
        <HeaderHiddenLists page="https://jbzd.com.pl/" title="Latest News" />
        <HeaderHiddenLists page="/account" title="News Archive" />
        <HeaderHiddenLists page="" title="Changelog" />
      </Hidden>
    </VisibleList>
    <VisibleList className="visible">
      <a>Community</a>
      <Hidden id="hidden">
        <HeaderHiddenLists page="" title="Characters" />
        <HeaderHiddenLists page="" title="Who is online" />
        <HeaderHiddenLists page="" title="Highscores" />
        <HeaderHiddenLists page="" title="Latest Kills" />
        <HeaderHiddenLists page="" title="House" />
        <HeaderHiddenLists page="" title="Guild" />
      </Hidden>
    </VisibleList>
    <VisibleList>
      <a href="">Forum</a>
    </VisibleList>
    <VisibleList>
      <a href="">Shop</a>
    </VisibleList>
  </MainLists>
);
