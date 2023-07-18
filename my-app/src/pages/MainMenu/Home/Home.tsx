import styled from 'styled-components';
import { LatestNewsMenu } from '../../../components/MainMenu/CentralMenu/LatestNewsMenu';
import { LeftMenu } from '../../../components/MainMenu/LeftMenu/LeftMenu';
import { RightMenu } from '../../../components/MainMenu/RightMenu/RightMenu';
import { MainHeader } from '../../../components/MainHeader/MainHeader/MainHeader';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Home = () => 
<>
<MainHeader />
<Main>
  <LeftMenu />
  <LatestNewsMenu />
  <RightMenu />
</Main>
</>
 