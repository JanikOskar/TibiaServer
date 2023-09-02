import { FC } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  svg: any;
  arm: string;
  attack: string;
  def: string;
  atributes: string;
  level: string;
};

const TdStyleForOffers = styled.td`
  border: 1px solid black;
  padding: 4px;
  margin-bottom: 4px;
  text-align: center;
  border-color: #bea6d8;
`;

const TrStyleForOffers = styled.tr`
  width: 100%;
`;

export const ItemsElement: FC<Props> = ({
  name,
  svg,
  arm,
  attack,
  def,
  atributes,
  level,
}) => {
  return (
    <TrStyleForOffers>
      <TdStyleForOffers>{svg}</TdStyleForOffers>
      <TdStyleForOffers>{name}</TdStyleForOffers>
      <TdStyleForOffers>{arm}</TdStyleForOffers>
      <TdStyleForOffers>{attack}</TdStyleForOffers>
      <TdStyleForOffers>{def}</TdStyleForOffers>
      <TdStyleForOffers>{atributes}</TdStyleForOffers>
      <TdStyleForOffers>{level}</TdStyleForOffers>
    </TrStyleForOffers>
  );
};
