import styled from "styled-components";
import { SubTitle } from "components/SubTitle";
import { ReactComponent as DB1 } from "assets/DragonBalls/DragonBall.svg";
import { ReactComponent as DB3 } from "assets/DragonBalls/DragonBall2.svg";
import { ReactComponent as DB4 } from "assets/DragonBalls/DragonBall3.svg";
import { ReactComponent as DB5 } from "assets/DragonBalls/DragonBall4.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoAboutDB = styled.h2`
  margin: 12px;
  color: #dfcd00;
  text-align:center;
`;

export const DragonBallsBody = () => {

  return (
    <MainMenu>
      <SubTitle title="Dragon Balls" />
   <InfoAboutDB>Aproximitly 3 times a day dragon ball will apear on Earth:</InfoAboutDB>
   <DB1 />
   <InfoAboutDB>When it happens you are gonna need a dragon ball radar to localize the dragon ball position</InfoAboutDB>
   <DB3 />
   <InfoAboutDB>Once you find the dragon ball and use it.</InfoAboutDB>
   <DB4 />
   <InfoAboutDB>After gathering all 7 diffrent dragon balls you can summon Shenron and he can grant one of your wishes.</InfoAboutDB>
   <DB5 style={{marginBottom: '12px'}}/>
    </MainMenu>
  );
};
