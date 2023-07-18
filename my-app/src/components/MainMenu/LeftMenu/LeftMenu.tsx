import styled from 'styled-components';
import { LeftMenuUl } from './LeftMenuUl';

const LeftMainMenu = styled.section`
  padding: 10px;
  background-color: aqua;
  display: block;
`;

export const LeftMenu = () => {
  const elementsDataMainMenu = [
    { nameOfTitle: 'News', link: '/' },
    { nameOfTitle: 'Register', link: '/register' },
    { nameOfTitle: 'Download', link: '/download' },
    { nameOfTitle: 'Team', link: '/team' },
    { nameOfTitle: 'Rules', link: '/rules' },
    { nameOfTitle: 'Shop Offers', link: '/shop' },
  ];

  const elementsDataGamePlay = [
    { nameOfTitle: 'Techniques', link: '/techniques' },
    { nameOfTitle: 'Items', link: '/items' },
    { nameOfTitle: 'Monsters', link: '/monsters' },
    { nameOfTitle: 'Missions', link: '/missions' },
    { nameOfTitle: 'Outfits', link: '/outfits' },
    { nameOfTitle: 'Quests', link: '/quests' },
    { nameOfTitle: 'Events', link: '/events' },
    { nameOfTitle: 'Map', link: '/map' },
  ];

  const elementsDataSystem = [
    { nameOfTitle: 'Enchants', link: '/enchants' },
    { nameOfTitle: 'Craftings', link: '/craftings' },
    { nameOfTitle: 'Dragon Ball', link: '/dragonball' },
    { nameOfTitle: 'Autoloot', link: '/autoloot' },
    { nameOfTitle: 'Cores', link: '/cores' },
  ];

  const elementsDataLibrary = [
    { nameOfTitle: 'Guilds', link: '/guilds' },
    { nameOfTitle: 'Commands', link: '/commands' },
    { nameOfTitle: 'Who is online', link: '/online' },
    { nameOfTitle: 'Last kills', link: '/lastkills' },
    { nameOfTitle: 'Ban list', link: '/banlist' },
    { nameOfTitle: 'Highscores', link: '/highscore/level' },
  ];

  return (
    <LeftMainMenu>
      <LeftMenuUl
        title="Main Menu"
        numberOfElements={elementsDataMainMenu.length}
        elementsData={elementsDataMainMenu}
      />
      <LeftMenuUl
        title="Game Play"
        numberOfElements={elementsDataGamePlay.length}
        elementsData={elementsDataGamePlay}
      />
      <LeftMenuUl title="System" numberOfElements={elementsDataSystem.length} elementsData={elementsDataSystem} />
      <LeftMenuUl title="Library" numberOfElements={elementsDataLibrary.length} elementsData={elementsDataLibrary} />
    </LeftMainMenu>
  );
};
