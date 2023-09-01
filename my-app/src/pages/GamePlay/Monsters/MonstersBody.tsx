import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { MonstersList } from "./MonstersList";
import { MonstersTableElements } from "./MonstersTableElements";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TdStyleForOffers = styled.td`
  border: 1px solid black;
  padding: 4px;
  margin-bottom:4px;
`;

const Table = styled.table`
width:80%;
border-collapse: collapse;
margin-top: 12px;
margin-bottom: 12px;
`;

const TrStyleForOffers = styled.tr`
`;

export const MonstersBody = () => {

  return (
    <MainMenu>
      <SubTitle title="Monsters" />
       <Table>
        <TrStyleForOffers>
          <TdStyleForOffers>
            Look
          </TdStyleForOffers>
          <TdStyleForOffers>
            Name
          </TdStyleForOffers>
          <TdStyleForOffers>
            Level
          </TdStyleForOffers>
        </TrStyleForOffers>
        <MonstersList />
        </Table>
    </MainMenu>
  );
};
