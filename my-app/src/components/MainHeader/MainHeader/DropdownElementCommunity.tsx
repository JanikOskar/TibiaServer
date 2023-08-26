import { Dropdown, MenuProps } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  text-decoration:none ;
  color:#DFCD00;
`;

export const DropdownElementCommunity  = () => {
  const items: MenuProps['items'] = [
    {
      key: '3',
      label: (
        <a href="/highscore/level">Highscores</a>

      ),
    },
    {
      key: '4',
      label: (
        <a href="/banList">Ban Lists</a>

      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottom">
        <Title>Community</Title>
      </Dropdown>
)
  };
