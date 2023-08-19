import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { Table } from "antd";
import { ReactComponent as DBS } from "assets/missions/DBS1.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DBSMissions = () => {
    const BeerusSagaDataSource = [
        {
          key: '1',
          level: 'R-300',
          mission: 'Talk with Kaito.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: 'R-300',
            mission: 'Defeat Beerus.',
            exp: '900.000',
            reward: '15x senzu',
          },
      ];

      const GoldenFreezaSagaDataSource = [
        {
          key: '1',
          level: 'R-300',
          mission: 'Go to Beerus Planet and talk with Whis.',
          exp: '---',
          reward: '---'
        },
        {
            key: '2',
            level: '300',
            mission: 'Train with Vegeta in special place.',
            exp: '2.000.000',
            reward: '15x senzu',
          },
          {
            key: '3',
            level: 'R-300',
            mission: 'Talk with Whis.',
            exp: '---',
            reward: '---',
          },
          {
            key: '4',
            level: 'R-300',
            mission: 'Talk with Goku and use shunkaido.',
            exp: '---',
            reward: '---',
          },
          {
            key: '5',
            level: 'R-300',
            mission: 'Defeat Golden Frieza.',
            exp: '4.000.000',
            reward: '15x senzu',
          },
      ];
      
      const TournamentSagaDataSource = [
        {
          key: '1',
          level: 'R-300',
          mission: 'Go to Beerus Planet and Talk with Champa.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: 'R-300',
            mission: 'Meet Whis in Bulma place and start the tournament.',
            exp: '5.000.000',
            reward: '50x senzu',
          },
          {
            key: '3',
            level: 'R-300',
            mission: 'Talk with Zeno Sama.',
            exp: '---',
            reward: '---',
          },
      ];

      const BlackGokuSagaDataSource = [
        {
          key: '1',
          level: 'R-300',
          mission: 'Talk with Future Trunks in Bulma place.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: 'R-300',
            mission: 'Defeat Black Goku.',
            exp: '8.000.000',
            reward: '50x senzu',
          },
          {
            key: '3',
            level: 'R-300',
            mission: 'Help Trunks and go to the Future.',
            exp: '---',
            reward: '---',
          },
          {
            key: '4',
            level: 'R-300',
            mission: 'Defeat Black Goku and Zamasu.',
            exp: '12.000.000',
            reward: '50x senzu',
          },
          {
            key: '5',
            level: 'R-300',
            mission: 'Defeat Fused Zamasu',
            exp: '20.000.000',
            reward: '100x senzu',
          },
          {
            key: '6',
            level: 'R-300',
            mission: 'Talk with Trunks.',
            exp: '---',
            reward: '---',
          },
          {
            key: '7',
            level: 'R-300',
            mission: 'Talk with Whis',
            exp: '---',
            reward: 'exp boost, +10k health and ki',
          },
      ];

      const SurvivalSagaDataSource = [
        {
          key: '1',
          level: 'R-400',
          mission: 'Talk to Beerus in Kaioshin place about new universe tournament.',
          exp: '---',
          reward: '---',
        },
        {
            key: '2',
            level: 'R-400',
            mission: 'Talk to Whis in Kaioshin place to go to the tournament and start the royal battle tournament.',
            exp: '---',
            reward: '---',
          },
          {
            key: '3',
            level: 'R-400',
            mission: 'Talk to Zeno Sama about universe tournament.',
            exp: '120.000.000',
            reward: '100x enchanted senzu, event loss box, +10k health',
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
      <DBS />
        <Table dataSource={BeerusSagaDataSource} columns={columns} pagination={false} caption={'Beerus Saga'}/>
        <Table dataSource={GoldenFreezaSagaDataSource} columns={columns} pagination={false} caption={'Golden Freeza Saga'}/>
        <Table dataSource={TournamentSagaDataSource} columns={columns} pagination={false} caption={'Tournament Saga'}/>
        <Table dataSource={BlackGokuSagaDataSource} columns={columns} pagination={false} caption={'Black Goku Saga'}/>
        <Table dataSource={SurvivalSagaDataSource} columns={columns} pagination={false} caption={'Survival Saga'}/>

    </MainMenu>
  );
};
