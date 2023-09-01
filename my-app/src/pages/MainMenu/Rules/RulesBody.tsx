import { styled } from "styled-components";
import { SubTitle } from "../../../components/SubTitle";

const RulesBodyStyle = styled.section`
  display: flex;
  flex-direction: column;
  width:100%;
`;

export const RulesBody = () => {
  return (
    <RulesBodyStyle>
          <SubTitle title='Server Rules' />

      <div>
        <span>
          <b>ACCOUNTS</b>
          <br />
          1.Administration isn't responsible for lost items of hacked player.
          <br />
          2.Administration will never ask you for your login/pass unless it's to
          provide pacc or email/r-key change.
          <br />
          3.Remember, use different login/pass on other servers.
          <br />
          4.Selling character or items for real money or trading for something
          on other servers is prohibited.
          <br />
          <b>NICKNAME'S</b>
          <br />
          1.Nickname should have at least 3 letters.
          <br />
          2.Nickname can't be vulgar or misleading.
          <br />
          3.Nickname can't have random letters, for example: djhethssdf.
          <br />
          4.Nickname can't imitate or associate with the names of
          Administration.
          <br />
          5.Nicknames which may confuse others in our position, for example:
          Administrator Jacob.
          <br />
          6.Nickname must be readable and fir in Battle window.
          <br />
          7.Nickname can't have numbers.
          <br />
          8.Administrator may give namelock or delete character to a person who
          doesn't follow these rules.
          <br />
          <b>BOTS</b>
          1.Cavebot/Targeting is allowed but you have to watch your character
          (you can't be AFK).
          <br />
          2.Autolog is allowed if the character is training otherwise it'll be
          treated like full afk bot.
          <br />
          3.Multiclient is allowed but you can't use it to block respawns/sagas
          or interupt other players.
          <br />
          <b>CHAT'S</b>
          <br />
          1.Trade - chat only for the purchase / sale and exchange of items.
          <br />
          2.Game-chat - for free conversation with other players. You can't post
          trade offers or search for team here.
          <br />
          3.Saga and Quest - chat only for searching team on
          sags/quests/instance.
          <br />
          4.Help - chat only for questions about the game.
          <br />
          5.Advertising on chats is only associated with "delete" account.
          <br />
          6.Disregard these rules will be punished at the discretion of admin.
          <br />
          <b>BUGS</b>
          <br/>
          1.Admin reserves the right to revert game database at 24 hours in case
          of a serious bug used by players.
          <br />
          2.Using bugs or game weaknesses will be punished at the discretion of
          Admin.
          <br />
          3.Reporting important bug will be rewarded at the discretion of Admin.
          <br />
          4.Any interruptions in the game to other players such as blocking
          respawns or saga's under PVP level will be punished at the discretion
          of Admin.
          <br />
          5.The player has the right to report another player violating the
          rules by writing report using Ctrl+R shortkey in the game.
        </span>
      </div>
    </RulesBodyStyle>
  );
};
