import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  svg: any;
  info: string;
};

const TdStyleForOffers = styled.td`
  border: 1px solid black;
  padding: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  background-color: #3d3942;
  border-color: #bea6d8;
`;

const TrStyleForOffers = styled.tr`
  width: 100%;
`;

const ItemsOffer = styled.div`
  width: 100%;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextStyle = styled.div`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-right: 4px;
  color: #bea6d8;
`;

const LinkStyle = styled.a`
  color: #dfcd00;
  text-decoration: none;
`;

export const ShopOfferElement: FC<Props> = ({ title, svg, info }) => {
  return (
    <TrStyleForOffers>
      <TdStyleForOffers>
        {svg}
        <ItemsOffer>
          <TextStyle>
            <div style={{ color: "gold" }}>{title}</div>
            <div>{info}</div>
          </TextStyle>
          <div style={{ textAlign: "center", color: "#dfcd00" }}>
            <LinkStyle href="/login">Login to buy</LinkStyle>
          </div>
        </ItemsOffer>
      </TdStyleForOffers>
    </TrStyleForOffers>
  );
};
