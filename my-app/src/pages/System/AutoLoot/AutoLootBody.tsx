import styled from "styled-components";
import { SubTitle } from "components/SubTitle";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AutoLootBody = () => {

  return (
    <MainMenu>
      <SubTitle title="Auto Loot" />
    <center>
    Autoloot system is to make looting easier:<br/>

Commands:<br/>
<b>!autoloot</b> - show auto loot list commands<br/>
<b>!autoloot add, item_name</b> - add item to autolooting<br/>
<b>!autoloot remove, item_name</b> - remove item from autolooting<br/>
<b>!autoloot show</b> - show the autoLoot list<br/>
<b>!autoloot clear</b> - clears the autoLoot list<br/>
    </center>
    </MainMenu>
  );
};
