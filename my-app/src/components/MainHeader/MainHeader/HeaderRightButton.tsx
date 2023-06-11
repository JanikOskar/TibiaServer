import styled from 'styled-components';
import { HeaderHiddenLists } from './HeaderHiddenLists';

const MainLists = styled.ul`
  display: flex;
  padding: 0;
`;

const VisibleList = styled.li`
margin:20px
list-style:none;
&&:hover #hidden {
  display: block;
}
`;

const Hidden = styled.ul`
  display: none;
`;

export const HeaderRightButton = () => (
  <MainLists>
    <VisibleList className="visible">
      <a href="">Download</a>
    </VisibleList>
    <VisibleList className="visible">
      <a href="">Login</a>
      <Hidden id="hidden">
        <HeaderHiddenLists page="" title="Recover account" />
        <HeaderHiddenLists page="" title="Register" />
      </Hidden>
    </VisibleList>
    <VisibleList className="visible">
      <a href="">Register</a>
    </VisibleList>
  </MainLists>
);
