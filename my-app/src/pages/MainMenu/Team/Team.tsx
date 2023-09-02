import styled from "styled-components";
import { LeftMenu } from "../../../components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "../../../components/MainMenu/RightMenu/RightMenu";
import { MainHeader } from "../../../components/MainHeader/MainHeader/MainHeader";
import { TeamBody } from "./TeamBody";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Team = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <TeamBody />
      <RightMenu />
    </Main>
  </>
);
