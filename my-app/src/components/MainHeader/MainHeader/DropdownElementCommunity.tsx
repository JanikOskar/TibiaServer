import { Dropdown, MenuProps } from 'antd';
import React from 'react';

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
        <div>Community</div>
      </Dropdown>
)
  };
