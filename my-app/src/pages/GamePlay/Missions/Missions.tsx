import styled from "styled-components";
import { LeftMenu } from "../../../components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "../../../components/MainMenu/RightMenu/RightMenu";
import { MainHeader } from "../../../components/MainHeader/MainHeader/MainHeader";
import { MissionsBody } from "./MissionsBody";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Missions = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <MissionsBody />
      <RightMenu />
    </Main>
  </>
);
