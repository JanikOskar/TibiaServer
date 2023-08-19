import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { Table } from "antd";
import { ReactComponent as Daily } from "assets/missions/Daily1.svg";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DailyMissions = () => {
    const dataSource = [
        {
          key: '1',
          level: '1-49',
          mission: 'Collect 20 Mummy Bandages',
          exp: '80.000',
          reward: '5 event points, 75',
        },
        {
            key: '2',
            level: '1-49',
            mission: 'Collect 20 Skeleton Heads',
            exp: '80.000',
            reward: '5 event points, 75$',
          },
          {
            key: '3',
            level: '1-49',
            mission: 'Collect 25 Wolf Skins',
            exp: '80.000',
            reward: '5 event points, 75$',
          },
          {
            key: '4',
            level: '50-99',
            mission: 'Collect 30 Saibaman Skins',
            exp: '450.000',
            reward: '5 event points, 1 gold',
          },
          {
            key: '5',
            level: '50-99',
            mission: 'Collect 30 Saibaman Eyes',
            exp: '450.000',
            reward: '5 event points, 1 gold',
          },
          {
            key: '6',
            level: '50-99',
            mission: 'Collect 30 Saibamen Clavs',
            exp: '450.000',
            reward: '5 event points, 1 gold',
          },
          {
            key: '7',
            level: '100-149',
            mission: 'Collect 40 Scews',
            exp: '1.100.000',
            reward: '6 event points, 1.5 gold',
          },
          {
            key: '8',
            level: '100-149',
            mission: 'Collect 10 Senzu Leaves',
            exp: '1.100.000',
            reward: '6 event points, 1.5 gold',
          },
          {
            key: '9',
            level: '100-149',
            mission: 'Kill 100 Heaven Soldiers',
            exp: '1.100.000',
            reward: '6 event points, 1.5 gold',
          },
          {
            key: '10',
            level: '150-199',
            mission: 'Collect 50 Namekjin Fillergs',
            exp: '2.150.000',
            reward: '7 event points, 2.5 golds',
          },
          {
            key: '11',
            level: '150-199',
            mission: 'Kill 100 Janemba.',
            exp: '2.150.000',
            reward: '7 event points, 2.5 golds',
          },
          {
            key: '12',
            level: '150-199',
            mission: 'Collect 25 Senzu Roots.',
            exp: '2.150.000',
            reward: '7 event points, 2.5 golds',
          },
          {
            key: '13',
            level: '200-249',
            mission: 'Collect 50 Oozaru Tails',
            exp: '3.100.000',
            reward: '7 event points, 2.5 golds',
          },
          {
            key: '14',
            level: '200-249',
            mission: 'Collect 50 Small Sapphire',
            exp: '3.100.000',
            reward: '7 event points, 2.5 golds',
          },
          {
            key: '15',
            level: '200-249',
            mission: 'Kill 100 Oozaru',
            exp: '3.100.000',
            reward: '7 event points, 2.5 golds',
          },
          {
            key: '16',
            level: '250-299',
            mission: 'Kill 100 Majins',
            exp: '4.400.000',
            reward: '8 event points, 5.5 golds',
          },
          {
            key: '17',
            level: '250-299',
            mission: 'Kill 100 Shenrons',
            exp: '4.400.000',
            reward: '8 event points, 5.5 golds',
          },
          {
            key: '18',
            level: '250-299',
            mission: 'Collect 25 Senzu',
            exp: '4.400.000',
            reward: '8 event points, 5.5 golds',
          },
          {
            key: '19',
            level: '300-349',
            mission: 'Collect 5 Enchanted Senzu',
            exp: '6.300.000',
            reward: '8 event points, 7 golds',
          },
          {
            key: '20',
            level: '300-349',
            mission: 'Kill 50 Future Namekjins',
            exp: '6.300.000',
            reward: '8 event points, 7 golds',
          },
          {
            key: '21',
            level: '300-349',
            mission: 'Kill 50 Future Saiyans',
            exp: '6.300.000',
            reward: '8 event points, 7 golds',
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
        <Daily />
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </MainMenu>
  );
};
