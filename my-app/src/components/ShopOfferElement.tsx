import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  svg: any;
  info:string
};

const TdStyleForOffers = styled.td`
  border: 1px solid black;
  padding: 4px;
  margin-bottom:4px;
  display: flex;
  align-items: center;
`;

const TrStyleForOffers = styled.tr`
  width: 100%;
`;

const ItemsOffer = styled.div`
  width: 100%;
  margin-left: 4px;
  display: flex;
  align-items:center;
  justify-content:space-between;
`;

const TextStyle = styled.div`
margin-left: 4px;
display: flex;
flex-direction: column;
`;

export const ShopOfferElement: FC<Props> = ({title,svg,info}) => {
  return (
        <TrStyleForOffers>
          <TdStyleForOffers>
            {svg}
            <ItemsOffer>
              <TextStyle>
              <div>{title}</div>
              <div>{info}</div>
              </TextStyle>
              <div>
                <a href="/register">Login to buy</a>
              </div>
            </ItemsOffer>
          </TdStyleForOffers>
        </TrStyleForOffers>
  );
};
