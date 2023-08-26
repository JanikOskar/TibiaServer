import React from "react";
import styled from "styled-components";
import { ReactComponent as Discord } from "assets/discord.svg";
import { Table } from "antd";

const RightMainMenu = styled.section`
  display: block;
  text-align: center;
  padding: 10px;
`;

const hisghscoreRightMenu = [
  {
    key: "1",
    position: "1",
    level: "999",
    nickname: "Ertasek",
  },
  {
    key: "2",
    position: "2",
    level: "989",
    nickname: "Mango",
  },
  {
    key: "3",
    position: "3",
    level: "979",
    nickname: "Kebabo",
  },
  {
    key: "4",
    position: "4",
    level: "969",
    nickname: "Swift",
  },
  {
    key: "5",
    position: "5",
    level: "959",
    nickname: "Light",
  },
];

const columns = [
  {
    title: "Level",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "Nickname",
    dataIndex: "nickname",
    key: "nickname",
  },
];

export const RightMenu = () => {
  return (
    <RightMainMenu className="game-info">
      <div>Server Status</div>
      <h3>Online</h3>
      <div>Highscores</div>
      <Table columns={columns} dataSource={hisghscoreRightMenu} pagination={false}></Table>
      <div>Discord</div>
      <a href="https://discord.gg/pTtng2k9">
        <Discord />
      </a>
    </RightMainMenu>
  );
};
