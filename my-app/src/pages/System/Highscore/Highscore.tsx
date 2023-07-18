import styled from "styled-components";
import { MainHeader } from "../../../components/MainHeader/MainHeader/MainHeader";
import { LeftMenu } from "../../../components/MainMenu/LeftMenu/LeftMenu";
import { HighscoreBody } from "./HighscoreBody";
import { RightMenu } from "../../../components/MainMenu/RightMenu/RightMenu";


const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const Highscore = () => 
<>
<MainHeader />
<Main>
  <LeftMenu />
  <HighscoreBody />
  <RightMenu />
</Main>
</>
