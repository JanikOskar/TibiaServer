import styled from "styled-components";
import { MainHeader } from "components/MainHeader/MainHeader/MainHeader";
import { LeftMenu } from "components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "components/MainMenu/RightMenu/RightMenu";
import { DragonBallsBody } from "./DragonBallsBody";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DragonBalls = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <DragonBallsBody />
      <RightMenu />
    </Main>
  </>
);
