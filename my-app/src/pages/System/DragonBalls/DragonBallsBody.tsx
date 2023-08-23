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

export const DragonBallsBody = () => {

  return (
    <MainMenu>
      <SubTitle title="Dragon Balls" />
   <h2>Aproximitly 3 times a day dragon ball will apear on Earth:</h2>
   <DB1 />
   <h2>When it happens you are gonna need a dragon ball radar to localize the dragon ball position</h2>
   <DB3 />
   <h2>Once you find the dragon ball and use it.</h2>
   <DB4 />
   <h2>After gathering all 7 diffrent dragon balls you can summon Shenron and he can grant one of your wishes.</h2>
   <DB5 />
    </MainMenu>
  );
};
