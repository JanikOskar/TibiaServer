import { FC } from 'react';
import styled from 'styled-components';
import { LatestNewsMenu } from '../../components/MainMenu/CentralMenu/LatestNewsMenu';
import { LeftMenu } from '../../components/MainMenu/LeftMenu/LeftMenu';
import { RightMenu } from '../../components/MainMenu/RightMenu/RightMenu';
import { CentralMenuRegister } from '../Register/CentralMenuRegistert';

type Props = {
  props: string
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const siema = (props: string) => {
  if (props === `Register`) {
    return <CentralMenuRegister />
  }
  else return <LatestNewsMenu />
  }

export const NewsMainMenu: FC <Props> = ({props}) => {
  return (
  <Main>
    <LeftMenu />
    {siema(props)}
    <RightMenu />
  </Main>
)};
