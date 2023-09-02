import styled from "styled-components";
import { Table } from "antd";
import { ReactComponent as Farmer } from "assets/missions/Farmer1.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 12px;
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

export const FarmerMissions = () => {
  const dataSource = [
    {
      key: "1",
      level: "---",
      mission: "Pick up 10 cabbage.",
      exp: "5000",
      reward: "tunic",
    },
    {
      key: "2",
      level: "---",
      mission: "Pick up 10 carrots.",
      exp: "8750",
      reward: "nunhacko",
    },
    {
      key: "3",
      level: "---",
      mission: "Bring 15 wood.",
      exp: "15000",
      reward: "1 gold",
    },
    {
      key: "4",
      level: "---",
      mission: "Pick up 30 blueberries.",
      exp: "15000",
      reward: "1 gold",
    },
    {
      key: "5",
      level: "---",
      mission: "Find and bring lost egg.",
      exp: "50000",
      reward: "10 gold",
    },
  ];

  const columns = [
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Mission",
      dataIndex: "mission",
      key: "mission",
    },
    {
      title: "Exp",
      dataIndex: "exp",
      key: "exp",
    },
    {
      title: "Reward",
      dataIndex: "reward",
      key: "reward",
    },
  ];

  return (
    <MainMenu>
      <Farmer style={{ marginBottom: `12px` }} />
      <TableStyle
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onRow={() => ({
          style: {
            border: "1px solid #bea6d8",
            background: "#3d3942",
            color: "#bea6d8",
          },
        })}
      />
    </MainMenu>
  );
};
