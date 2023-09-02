import styled from "styled-components";
import { Table } from "antd";
import { ReactComponent as DB } from "assets/missions/DB1.svg";

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
    text-align:center;
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

const SagaTitle = styled.h3`
  margin: 4px;
  color: #dfcd00;
`;

export const DbMissions = () => {
  const BulmaSagaDataSource = [
    {
      key: "1",
      level: "1",
      mission: "Talk with Teenager Bulma.",
      exp: "---",
      reward: "---",
    },
    {
      key: "2",
      level: "1",
      mission: "Defeat Bandit.",
      exp: "3.000",
      reward: "bandit legs",
    },
    {
      key: "3",
      level: "1",
      mission: "Find and talk with Master Roshi at a desert.",
      exp: "---",
      reward: "kinto technique",
    },
    {
      key: "4",
      level: "1",
      mission: "Find and fight Yamcha at the Diablo desert.",
      exp: "450.000",
      reward: "---",
    },
  ];

  const TrainingSagaDataSource = [
    {
      key: "1",
      level: "1",
      mission:
        "Go to the West Island and talk with Master Roshi to start his ruthless trainings.",
      exp: "---",
      reward: "x6 Milk",
    },
    {
      key: "2",
      level: "1",
      mission:
        "Bring the milk bottles to the farmer that Master Roshi mentioned.",
      exp: "---",
      reward: "---",
    },
    {
      key: "3",
      level: "1",
      mission:
        "Go to 21st World Martial Arts Tournament and face your opponents.",
      exp: "15.000",
      reward: "master roshi jacket",
    },
  ];

  const PiccoloSagaDataSource = [
    {
      key: "1",
      level: "1",
      mission: "Find and kill King Piccolo.",
      exp: "15.000",
      reward: "red ki",
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
      <DB style={{ marginBottom: `12px` }} />
      <SagaTitle>Bulma Saga</SagaTitle>
      <TableStyle
        dataSource={BulmaSagaDataSource}
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
      <SagaTitle>Training Saga</SagaTitle>
      <TableStyle
        dataSource={TrainingSagaDataSource}
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
      <SagaTitle>Piccolo Saga</SagaTitle>
      <TableStyle
        dataSource={PiccoloSagaDataSource}
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
