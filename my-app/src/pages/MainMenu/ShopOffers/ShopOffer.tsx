import styled from "styled-components";
import { LeftMenu } from "../../../components/MainMenu/LeftMenu/LeftMenu";
import { RightMenu } from "../../../components/MainMenu/RightMenu/RightMenu";
import { MainHeader } from "../../../components/MainHeader/MainHeader/MainHeader";
import { ShopOfferBody } from "./ShopOfferBody";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShopOffer = () => (
  <>
    <MainHeader />
    <Main>
      <LeftMenu />
      <ShopOfferBody />
      <RightMenu />
    </Main>
  </>
);
