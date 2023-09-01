import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  date: string;
  text: string;
};

const NewsHeadline = styled.div`
  background-color: #786C85;
  color: #E1D5EE;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 100%;
`;

const NewsHeadlineDate = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 12px 6px;
  color: #DFCD00;
`;

const NewsHeadlineText = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
`;

const NewsTable = styled.table`
  color: #DFCD00;
  background-color: #1B191D;
  width: 100%;
  padding: 12px 0px;
`;

const TitleStyle = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 12px 6px;
  background-color: #3D3942;
  color: #DFCD00;
`;

const InfoAboutChanges = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 12px 6px;
  color: #DFCD00;
`;

const TbodyStyle = styled.tbody``;

const TrStyle = styled.tr``;

export const NewsMenuHeadline: FC<Props> = ({ date, title, text }) => (
  <>
    <NewsHeadline>
      <NewsHeadlineDate>{date}</NewsHeadlineDate>
      <NewsHeadlineText>
        <TitleStyle>{title}</TitleStyle>
      </NewsHeadlineText>
    </NewsHeadline>
    <NewsTable>
      <TbodyStyle>
        <TrStyle>
          <InfoAboutChanges>{text}</InfoAboutChanges>
        </TrStyle>
      </TbodyStyle>
    </NewsTable>
  </>
);
