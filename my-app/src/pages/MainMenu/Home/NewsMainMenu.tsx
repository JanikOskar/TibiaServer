import { FC } from 'react';
import styled from 'styled-components';
import { CentralMenuRegister } from '../Register/CentralMenuRegistert';
import { LeftMenu } from '../../../components/MainMenu/LeftMenu/LeftMenu';
import { RightMenu } from '../../../components/MainMenu/RightMenu/RightMenu';
import { LatestNewsMenu } from '../../../components/MainMenu/CentralMenu/LatestNewsMenu';
import { TeamBody } from '../Team/TeamBody';
import { DownloadBody } from '../Download/DownloadBody';
import { HighscoreBody } from '../../System/Highscore/HighscoreBody';
import { RulesBody } from '../Rules/RulesBody';
import { ShopOfferBody } from '../ShopOffers/ShopOfferBody';

type Props = {
  props: string
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const chooseProps = (props: string) => {
  if (props === `Register`) {
    return <CentralMenuRegister />
  }
  else if (props === "Team") {
    return <TeamBody />
  }
  else if (props === "Download") {
    return <DownloadBody />
  }
  else if (props === "Highscore") {
    return <HighscoreBody />
  }
  else if (props === "Team") {
    return <TeamBody />
  }
  else if (props === "Rules") {
    return <RulesBody />
  }
  else if (props === "shop") {
    return <ShopOfferBody />
  }
  else return <LatestNewsMenu />
  }

export const NewsMainMenu: FC <Props> = ({props}) => {
  return (
  <Main>
    <LeftMenu />
    {chooseProps(props)}
    <RightMenu />
  </Main>
)};
