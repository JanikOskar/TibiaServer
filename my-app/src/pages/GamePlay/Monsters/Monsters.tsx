import styled from "styled-components";
import { LeftMenu } from "../../../components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "../../../components/MainMenu/RightMenu/RightMenu";
import { MainHeader } from "../../../components/MainHeader/MainHeader/MainHeader";
import { MonstersBody } from "./MonstersBody";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Monsters = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <MonstersBody />
      <RightMenu />
    </Main>
  </>
);
