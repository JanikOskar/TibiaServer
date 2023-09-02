import styled from "styled-components";
import { MainHeader } from "components/MainHeader/MainHeader/MainHeader";
import { LeftMenu } from "components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "components/MainMenu/RightMenu/RightMenu";
import { EnchantsBody } from "./EnchantsBody";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Enchants = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <EnchantsBody />
      <RightMenu />
    </Main>
  </>
);
