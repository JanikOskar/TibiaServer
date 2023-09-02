import React from "react";
import styled from "styled-components";
import { ReactComponent as Discord } from "assets/discord.svg";
import { Table } from "antd";
import { useRWD } from "@appsomesolutions/rwd-utils";

const RightMainMenu = styled.section`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: #1e2128;
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

const WithMD = styled.div`
  display: none;
`;

const ContentOfRightMenu = styled.div`
  background-color: #212b31;
  padding-top: 12px;
`;

const TableStyle = styled(Table)`
  margin-bottom: 12px;
  width: 100%;
  &&& td.ant-table-cell {
    text-align: center;
  }
  &&& th.ant-table-cell {
    position: sticky;
    color: #dfcd00;
    background-color: #786c85;
    border: 1px solid #bea6d8;
  }
  &&& th.ant-table-cell::before {
    display: none;
  }
  &&:where(.css-dev-only-do-not-override-k7429z).ant-table-wrapper
    .ant-table-tbody
    > tr
    > th,
  :where(.css-dev-only-do-not-override-k7429z).ant-table-wrapper
    .ant-table-tbody
    > tr
    > td {
    border: 1px solid #bea6d8;
  }
  &&& td.ant-table-cell.ant-table-cell-row-hover {
    color: #dfcd00;
    background-color: #786c85;
  }
`;

export const RightMenu = () => {
  const { less } = useRWD();

  return (
    <>
      {less.md ? (
        <WithMD />
      ) : (
        <RightMainMenu className="game-info">
          <ContentOfRightMenu>
            <h3 style={{ color: "#bea6d8", marginTop: 8 }}>Server Status</h3>
            <h1 style={{ color: "#dfcd00" }}>Offline</h1>

            <h3 style={{ color: "#bea6d8", marginBottom: 4 }}>Top Players</h3>
            <TableStyle
              columns={columns}
              dataSource={hisghscoreRightMenu}
              pagination={false}
              onRow={() => ({
                style: {
                  border: "1px solid #bea6d8",
                  background: "#3d3942",
                  color: "#bea6d8",
                },
              })}
            />
            <h3 style={{ color: "#bea6d8", marginBottom: 4 }}>Discord</h3>
            <a href="https://discord.gg/pTtng2k9">
              <Discord />
            </a>
          </ContentOfRightMenu>
        </RightMainMenu>
      )}
    </>
  );
};
