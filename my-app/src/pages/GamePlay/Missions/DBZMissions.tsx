import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { Table } from "antd";
import { ReactComponent as DBZ } from "assets/missions/DBZ1.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DBZMissions = () => {
    const SaiyanSagaDataSource = [
        {
          key: '1',
          level: '25',
          mission: 'Talk with Chibi Gohan.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: '25',
            mission: 'Fight with Raditz.',
            exp: '20.000',
            reward: 'raditz armor',
          },
          {
            key: '3',
            level: '25',
            mission: 'Go and Talk with Kaito',
            exp: '---',
            reward: '---',
          },
          {
            key: '4',
            level: '25',
            mission: 'Catch Monkey.',
            exp: '20.000',
            reward: '---',
          },
          {
            key: '5',
            level: '25',
            mission: 'Talk with Kaito.',
            exp: '---',
            reward: '---',
          },
          {
            key: '6',
            level: '25',
            mission: 'Catch Gregory.',
            exp: '20.000',
            reward: '---',
          },
          {
            key: '7',
            level: '25',
            mission: 'Talk with Kaito.',
            exp: '---',
            reward: '---',
          },
          {
            key: '8',
            level: '25',
            mission: 'Fight with Saibaman.',
            exp: '20.000',
            reward: '---',
          },
          {
            key: '9',
            level: '25',
            mission: 'Fight with Nappa.',
            exp: '40.000',
            reward: '',
          },
          {
            key: '10',
            level: '25',
            mission: 'Fight with Vegeta.',
            exp: '75.000',
            reward: 'saiyan boots, 10x senzu',
          },
      ];

      const FreezaSagaDataSource = [
        {
          key: '1',
          level: '50',
          mission: 'Talk with Bulma in West City.',
          exp: '---',
          reward: '---'
        },
        {
            key: '2',
            level: '50',
            mission: 'Talk with Namekjin on Namek.',
            exp: '---',
            reward: '---',
          },
          {
            key: '3',
            level: '50',
            mission: 'Fight with Dodoria.',
            exp: '20.000',
            reward: '---',
          },
          {
            key: '4',
            level: '50',
            mission: 'Talk with Bulma on Namek.',
            exp: '---',
            reward: '---',
          },
          {
            key: '6',
            level: '50',
            mission: 'Fight with Zarbon.',
            exp: '40.000',
            reward: '---',
          },
          {
            key: '7',
            level: '50',
            mission: 'Talk with Old Namek King.',
            exp: '1.000.000',
            reward: 'gohan legs',
          },
          {
            key: '8',
            level: '50',
            mission: 'Fight with Guldo.',
            exp: '24.000',
            reward: '---',
          },
          {
            key: '9',
            level: '50',
            mission: 'Fight with Reecome.',
            exp: '60.000',
            reward: '---',
          },
          {
            key: '10',
            level: '50',
            mission: 'Fight with Copassa.',
            exp: '100.000',
            reward: '---',
          },
          {
            key: '11',
            level: '50',
            mission: 'Fight with Capitan Ginyu.',
            exp: '200.000',
            reward: 'saiyan armor',
          },
          {
            key: '12',
            level: '50',
            mission: 'Fight with Capitan Ginyu in Gokus body.',
            exp: '200.000',
            reward: '10x senzu',
          },
          {
            key: '13',
            level: '50',
            mission: 'Talk with Nail.',
            exp: '1.000.000',
            reward: '10x senzu',
          },
          {
            key: '14',
            level: '50',
            mission: 'Fight with Freeza.',
            exp: '2.000.000',
            reward: 'saiyan gloves,25x senzu',
          },
      ];
      
      const CellSagaDataSource = [
        {
          key: '1',
          level: '100',
          mission: 'Talk with Tenshin, south-west west city.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: '100',
            mission: 'Fight with Freeza Metal form.',
            exp: '2.000.000',
            reward: 'future trunks armor',
          },
          {
            key: '3',
            level: '100',
            mission: 'Talk with Future Trunks.',
            exp: '---',
            reward: '---',
          },
          {
            key: '4',
            level: '100',
            mission: 'Fight with c19.',
            exp: '200.000',
            reward: 'c19 cap',
          },
          {
            key: '5',
            level: '100',
            mission: 'Fight with c20.',
            exp: '200.000',
            reward: '---',
          },
          {
            key: '6',
            level: '100',
            mission: 'Find Geros Laboratory and talk with C17.',
            exp: '---',
            reward: '---',
          },
          {
            key: '7',
            level: '100',
            mission: 'Find and Fight with Cell First Form.',
            exp: '400.000',
            reward: '---',
          },
          {
            key: '8',
            level: '100',
            mission: 'Find and Fight with C17.',
            exp: '600.000',
            reward: 'c17 legs',
          },
          {
            key: '9',
            level: '100',
            mission: 'Fight with Cell Second Form',
            exp: '1.000.000',
            reward: '---',
          },
          {
            key: '10',
            level: '150',
            mission: 'Talk with Future Trunks in Kame-House.',
            exp: '---',
            reward: '---',
          },
          {
            key: '10',
            level: '150',
            mission: 'Go to Cells Budokai and Fight with him.',
            exp: '5.000.000',
            reward: 'cell armor, 50x senzu',
          },
      ];
      

      const BuuSagaDataSource = [
        {
          key: '1',
          level: '150',
          mission: 'Talk with Kaioshin on Budokai, next Go to Babidis Ship and Kill Majin Monsters and Talk with Kaioshin.',
          exp: '750.000',
          reward: 'silver gloves',
        },
        {
            key: '2',
            level: '150',
            mission: 'Fight with Fat Buu.',
            exp: '2.000.000',
            reward: '25x senzu',
          },
          {
            key: '3',
            level: '150',
            mission: 'Go to Dende Place and talk with Piccolo.',
            exp: '---',
            reward: '---',
          },
          {
            key: '4',
            level: '150',
            mission: 'Fight with Evil Buu.',
            exp: '2.000.000',
            reward: '25x senzu',
          },
          {
            key: '5',
            level: '200',
            mission: 'Talk with Old Kaio in Heaven.',
            exp: '10.000.000',
            reward: '---',
          },
          {
            key: '6',
            level: '200',
            mission: 'Fight with Buu on Desert.',
            exp: '2.000.000',
            reward: '25x senzu',
          },
          {
            key: '7',
            level: '200',
            mission: 'Talk with Super Buu, Find Exit.',
            exp: '200.0000',
            reward: '25x senzu',
          },
          {
            key: '1',
            level: '200',
            mission: 'Talk with Goku in West City.',
            exp: '---',
            reward: '---',
          },
          {
            key: '1',
            level: '200',
            mission: 'Fight with Kid Buu.',
            exp: '6.000.000',
            reward: 'majin buu legs',
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
    <DBZ />
        <Table dataSource={SaiyanSagaDataSource} columns={columns} pagination={false} caption={'Saiyan Saga'}/>
        <Table dataSource={FreezaSagaDataSource} columns={columns} pagination={false} caption={'Freeza Saga'} />
        <Table dataSource={CellSagaDataSource} columns={columns} pagination={false} caption={'Cell Saga'} />
        <Table dataSource={BuuSagaDataSource} columns={columns} pagination={false} caption={'Buu Saga'} />
    </MainMenu>
  );
};
