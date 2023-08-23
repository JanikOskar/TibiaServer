import styled from "styled-components";
import { SubTitle } from "components/SubTitle";
import { ReactComponent as BlueEnchant } from "assets/items/Enchants/WeaponEnchant.svg";
import { ReactComponent as GoldEnchant } from "assets/items/Enchants/EquipementEnchant.svg";
import { ReactComponent as SuperEnchant } from "assets/items/Enchants/EqSuperEnchant.svg";
import { ReactComponent as SuperWeaEnchant } from "assets/items/Enchants/WeaponSuperEnchant.svg";
import { Table } from "antd";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const columns = [
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'Success',
    dataIndex: 'success',
    key: 'success',
  },
  {
    title: 'Fail',
    dataIndex: 'fail',
    key: 'fail',
  },
  {
      title: 'Downgrade',
      dataIndex: 'downgrade',
      key: 'downgrade',
    },
    {
      title: 'Item Break',
      dataIndex: 'itemBreak',
      key: 'itemBreak',
    },
];

const columns1 = [
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'Success',
    dataIndex: 'success',
    key: 'success',
  },
  {
    title: 'Fail',
    dataIndex: 'fail',
    key: 'fail',
  },
  {
      title: 'Downgrade',
      dataIndex: 'downgrade',
      key: 'downgrade',
    },
];

const dataSource1 = [
  {
    key: '1',
    level: '+1',
    success: '69%',
    fail: '14%',
    downgrade: '14%',
    itemBreak: '3%'
  },
  {
      key: '2',
      level: '+2',
      success: '65%',
      fail: '16%',
      downgrade: '16%',
      itemBreak: '3%'
    },
    {
      key: '3',
      level: '+3',
      success: '61%',
      fail: '18%',
      downgrade: '18%',
      itemBreak: '3%'
    },
    {
      key: '4',
      level: '+4',
      success: '57%',
      fail: '20%',
      downgrade: '20%',
      itemBreak: '3%'
    },
    {
      key: '5',
      level: '+5',
    success: '53%',
    fail: '22%',
    downgrade: '22%',
    itemBreak: '3%'
    },
    {
      key: '6',
      level: '+6',
      success: '49%',
      fail: '24%',
      downgrade: '24%',
      itemBreak: '3%'
    },
    {
      key: '7',
      level: '+7',
      success: '45%',
      fail: '26%',
      downgrade: '26%',
      itemBreak: '3%'
    },
    {
      key: '8',
      level: '+8',
      success: '41%',
      fail: '28%',
      downgrade: '28%',
      itemBreak: '3%'
    },
    {
      key: '9',
      level: '+9',
      success: '37%',
      fail: '30%',
      downgrade: '30%',
      itemBreak: '3%'
    },
    {
      key: '10',
      level: '+10',
      success: '33%',
      fail: '32%',
      downgrade: '32%',
      itemBreak: '3%'
    },
];

const dataSource2 = [
  {
    key: '1',
    level: '+1',
    success: '80%',
    fail: '10%',
    downgrade: '10%',
  },
  {
      key: '2',
      level: '+2',
      success: '75%',
      fail: '12.5%',
      downgrade: '12.5%',
    },
    {
      key: '3',
      level: '+3',
      success: '70%',
      fail: '15%',
      downgrade: '15%',
    },
    {
      key: '4',
      level: '+4',
      success: '66%',
      fail: '17%',
      downgrade: '17%',
    },
    {
      key: '5',
      level: '+5',
    success: '62%',
    fail: '19%',
    downgrade: '19%',
    },
    {
      key: '6',
      level: '+6',
      success: '58%',
      fail: '21%',
      downgrade: '21%',
    },
    {
      key: '7',
      level: '+7',
      success: '54%',
      fail: '23%',
      downgrade: '23%',
    },
    {
      key: '8',
      level: '+8',
      success: '50%',
      fail: '25%',
      downgrade: '25%',
    },
    {
      key: '9',
      level: '+9',
      success: '46%',
      fail: '27%',
      downgrade: '27%',
    },
    {
      key: '10',
      level: '+10',
      success: '42%',
      fail: '29%',
      downgrade: '29%',
    },
];

export const EnchantsBody = () => {

  return (
    <MainMenu>
      <SubTitle title="Echants" />
   <h2><center>Normal Enchant Items</center></h2>
   <BlueEnchant /><GoldEnchant />
   <span>You can use these enchants on armors, legs, helmets, boots, and weapons.
Every item can be enchanted from +1 to +10, with specific chances for success, fail, downgrade, or item break.</span>
   <Table dataSource={dataSource1} columns={columns} pagination={false}/>

   <center><h2>Super Enchant Items</h2></center>
   <SuperEnchant /><SuperWeaEnchant />
   <span>You can use these enchants on armors, legs, helmets, boots, and weapons.
Every item can be enchanted from +1 to +10, with specific chances for success, fail, or downgrade. There is no chance of losing your item with this enchantment.</span>
<Table dataSource={dataSource2} columns={columns1} pagination={false}/>
    </MainMenu>
  );
};
