import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  date: string;
  text: string;
};

const NewsHeadline = styled.div`
  background-color: #786c85;
  color: #e1d5ee;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 100%;
`;

const NewsHeadlineDate = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 12px 6px;
  color: #dfcd00;
`;

const NewsHeadlineText = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
`;

const NewsTable = styled.table`
  color: #dfcd00;
  background-color: #1b191d;
  width: 100%;
  padding: 12px 0px;
`;

const TitleStyle = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 12px 6px;
  background-color: #3d3942;
  color: #dfcd00;
`;

const InfoAboutChanges = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 12px 6px;
  color: #dfcd00;
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
          <td>
          <InfoAboutChanges>{text}</InfoAboutChanges>
          </td>
        </TrStyle>
      </TbodyStyle>
    </NewsTable>
  </>
);
