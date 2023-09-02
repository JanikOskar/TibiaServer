import styled from "styled-components";
import { SubTitle } from "components/SubTitle";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bea6d8;
`;

const CommandName = styled.b`
color: #dfcd00;
`;

export const AutoLootBody = () => {

  return (
    <MainMenu>
      <SubTitle title="Auto Loot" />
    <center>
    <CommandName>Autoloot system is to make looting easier:</CommandName><br/>
Commands:<br/>
<CommandName>!autoloot</CommandName> - show auto loot list commands<br/>
<CommandName>!autoloot add, item_name</CommandName> - add item to autolooting<br/>
<CommandName>!autoloot remove, item_name</CommandName> - remove item from autolooting<br/>
<CommandName>!autoloot show</CommandName> - show the autoLoot list<br/>
<CommandName>!autoloot clear</CommandName> - clears the autoLoot list<br/>
    </center>
    </MainMenu>
  );
};
