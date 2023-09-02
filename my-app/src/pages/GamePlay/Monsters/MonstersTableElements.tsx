import { FC } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  svg: any;
  level: string;
};

const TdStyleForOffers = styled.td`
  border: 1px solid black;
  padding: 4px;
  margin-bottom: 4px;
  text-align: center;
  border-color: #bea6d8;
  color: #bea6d8;
`;

const TrStyleForOffers = styled.tr`
  width: 100%;
`;

export const MonstersTableElements: FC<Props> = ({ name, svg, level }) => {
  return (
    <TrStyleForOffers>
      <TdStyleForOffers>{svg}</TdStyleForOffers>
      <TdStyleForOffers>{name}</TdStyleForOffers>
      <TdStyleForOffers>{level}</TdStyleForOffers>
    </TrStyleForOffers>
  );
};
