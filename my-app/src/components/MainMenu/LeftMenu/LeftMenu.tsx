import React from 'react';
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
    { nameOfTitle: 'Download', link: '' },
    { nameOfTitle: 'Team', link: '/team' },
    { nameOfTitle: 'Rules', link: '' },
    { nameOfTitle: 'Premium', link: '' },
    { nameOfTitle: 'Shop Offers', link: '' },
  ];

  const elementsDataGamePlay = [
    { nameOfTitle: 'Techniques', link: '' },
    { nameOfTitle: 'Items', link: '' },
    { nameOfTitle: 'Monsters', link: '' },
    { nameOfTitle: 'Missions', link: '' },
    { nameOfTitle: 'Outfits', link: '' },
    { nameOfTitle: 'Quests', link: '' },
    { nameOfTitle: 'Events', link: '' },
    { nameOfTitle: 'Map', link: '' },
  ];

  const elementsDataSystem = [
    { nameOfTitle: 'Enchants', link: '' },
    { nameOfTitle: 'Craftings', link: '' },
    { nameOfTitle: 'Dragon Ball', link: '' },
    { nameOfTitle: 'Autoloot', link: '' },
    { nameOfTitle: 'Auction', link: '' },
    { nameOfTitle: 'Cores', link: '' },
  ];

  const elementsDataLibrary = [
    { nameOfTitle: 'Guilds', link: '' },
    { nameOfTitle: 'Commands', link: '' },
    { nameOfTitle: 'Who is online', link: '' },
    { nameOfTitle: 'Last kills', link: '' },
    { nameOfTitle: 'Ban list', link: '' },
    { nameOfTitle: 'Highscores', link: '' },
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
