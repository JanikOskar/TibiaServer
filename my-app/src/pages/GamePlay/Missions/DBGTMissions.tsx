import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { Table } from "antd";
import { ReactComponent as DBGT } from "assets/missions/DBGT1.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const DBGTMissions = () => {
    const BebiSagaDataSource = [
        {
          key: '1',
          level: '300',
          mission: 'Talk with Goku on Dende Place.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: '300',
            mission: 'Fight with Bebi on Tsufur(Plant).',
            exp: '5.000.000',
            reward: 'tsuful armor',
          },
      ];

      const SuperC17SagaDataSource = [
        {
          key: '1',
          level: '300',
          mission: 'Talk with C18 in Underground City.',
          exp: '---',
          reward: '---'
        },
        {
            key: '2',
            level: '300',
            mission: 'Fight with Super C17.',
            exp: '5.000.000',
            reward: 'super c17 boots',
          },
      ];
      
      const ShenronSagaDataSource = [
        {
          key: '1',
          level: '300',
          mission: 'Talk with Kaito.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: '300',
            mission: 'Find and Fight with Ryan Shenlong.',
            exp: '5.000.000',
            reward: '25x senzu',
          },
          {
            key: '3',
            level: '300',
            mission: 'Find and Fight with Chii Shenlong.',
            exp: '5.000.000',
            reward: '25x senzu',
          },
          {
            key: '4',
            level: '300',
            mission: 'Find and Fight with Uu Shenlong.',
            exp: '5.000.000',
            reward: '25x senzu',
          },
          {
            key: '5',
            level: '300',
            mission: 'Find and Fight with Ryuu Shenlong.',
            exp: '5.000.000',
            reward: 'shenron makankosappo',
          },
          {
            key: '6',
            level: '300',
            mission: 'Find and Fight with San Shenron.',
            exp: '5.000.000',
            reward: '25x senzu',
          },
          {
            key: '7',
            level: '300',
            mission: 'Find and Fight with Li Shenron.',
            exp: '12.000.000',
            reward: '25x senzu',
          },
          {
            key: '8',
            level: '300',
            mission: 'Talk with Goku SSJ4 in Heaven.',
            exp: '25.000.000',
            reward: 'fusion armor, +20k health/mana',
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
      <DBGT style={{ marginBottom: `12px`}}/>
        <Table dataSource={BebiSagaDataSource} columns={columns} pagination={false} caption={'Bebi Saga'} />
        <Table dataSource={SuperC17SagaDataSource} columns={columns} pagination={false} caption={'Super C17 Saga'} />
        <Table dataSource={ShenronSagaDataSource} columns={columns} pagination={false} caption={'Shrenon Saga'} />
    </MainMenu>
  );
};
