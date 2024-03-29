import styled from "styled-components";
import { FC } from "react";
import { ItemsList } from "./ItemsList";

type Props = {
  typeOfItems: string;
};

const TdStyleForOffers = styled.td`
  border: 1px solid black;
  padding: 4px;
  margin-bottom: 4px;
  color: #dfcd00;
  border-color: #bea6d8;
  background-color: #786c85;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 12px;
  color: #bea6d8;
  background-color: #3d3942;
`;

const TrStyleForOffers = styled.tr``;

export const ItemsTable: FC<Props> = (typeOfItems: any) => {
  {
    console.log("items table", typeOfItems.typeOfItems);
  }

  return (
    <Table>
      <TrStyleForOffers>
        <TdStyleForOffers>Look</TdStyleForOffers>
        <TdStyleForOffers>Name</TdStyleForOffers>
        <TdStyleForOffers>Arm</TdStyleForOffers>
        <TdStyleForOffers>Attack</TdStyleForOffers>
        <TdStyleForOffers>Def</TdStyleForOffers>
        <TdStyleForOffers>Attributes</TdStyleForOffers>
        <TdStyleForOffers>Level</TdStyleForOffers>
      </TrStyleForOffers>
      <ItemsList whichType={typeOfItems.typeOfItems} />
    </Table>
  );
};
