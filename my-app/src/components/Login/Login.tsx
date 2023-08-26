import { MainHeader } from 'components/MainHeader/MainHeader/MainHeader';
import { LeftMenu } from 'components/MainMenu/LeftMenu/LeftMenu';
import styled from 'styled-components';
import { LoginBody } from './LoginBody';
import { RightMenu } from 'components/MainMenu/RightMenu/RightMenu';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Login = () => 
<>
<MainHeader />
<Main>
  <LeftMenu />
  <LoginBody />
  <RightMenu />
</Main>
</>