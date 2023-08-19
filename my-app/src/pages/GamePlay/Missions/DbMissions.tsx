import styled from "styled-components";
import { Table } from "antd";
import { ReactComponent as DB } from "assets/missions/DB1.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DbMissions = () => {
    const BulmaSagaDataSource = [
        {
          key: '1',
          level: '1',
          mission: 'Talk with Teenager Bulma.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: '1',
            mission: 'Defeat Bandit.',
            exp: '3.000',
            reward: 'bandit legs',
          },
          {
            key: '3',
            level: '1',
            mission: 'Find and talk with Master Roshi at a desert.',
            exp: '---',
            reward: 'kinto technique',
          },
          {
            key: '4',
            level: '1',
            mission: 'Find and fight Yamcha at the Diablo desert.',
            exp: '450.000',
            reward: '---',
          },
      ];

      const TrainingSagaDataSource = [
        {
          key: '1',
          level: '1',
          mission: 'Go to the West Island and talk with Master Roshi to start his ruthless trainings.',
          exp: '---',
          reward: 'x6 Milk'
        },
        {
            key: '2',
            level: '1',
            mission: 'Bring the milk bottles to the farmer that Master Roshi mentioned.',
            exp: '---',
            reward: '---',
          },
          {
            key: '3',
            level: '1',
            mission: 'Go to 21st World Martial Arts Tournament and face your opponents.',
            exp: '15.000',
            reward: 'master roshi jacket',
          },
      ];
      
      const PiccoloSagaDataSource = [
        {
          key: '1',
          level: '1',
          mission: 'Find and kill King Piccolo.',
          exp: '15.000',
          reward: 'red ki',
        },
      ];

      const columns = [
        {
          title: 'Level',
          dataIndex: 'level',
          key: 'level',
        },
        {
          title: 'Mission',
          dataIndex: 'mission',
          key: 'mission',
        },
        {
          title: 'Exp',
          dataIndex: 'exp',
          key: 'exp',
        },
        {
            title: 'Reward',
            dataIndex: 'reward',
            key: 'reward',
          },
      ];

  return (
    <MainMenu>
      <DB />
        <Table dataSource={BulmaSagaDataSource} columns={columns}  pagination={false} caption={'Bulma Saga'} />
        <Table dataSource={TrainingSagaDataSource} columns={columns} pagination={false} caption={'Training Saga'} />
        <Table dataSource={PiccoloSagaDataSource} columns={columns} pagination={false}  caption={'Piccolo Saga'} />

    </MainMenu>
  );
};
