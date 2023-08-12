import styled from "styled-components";
import { LeftMenu } from "../../../components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "../../../components/MainMenu/RightMenu/RightMenu";
import { MainHeader } from "../../../components/MainHeader/MainHeader/MainHeader";
import { TechniquesBody } from './TechniquesBody';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Techniques = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <TechniquesBody />
      <RightMenu />
    </Main>
  </>
);
 