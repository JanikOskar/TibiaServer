import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    title: string;
    date: string;
    text: string;
  };

const NewsHeadline = styled.div`
background-color: greenyellow;
width:100%
`;

const NewsHeadlineDate = styled.div``;

const NewsHeadlineText = styled.div``;

const NewsTable = styled.table``;

export const NewsMenuHeadline: FC<Props> = ({date, title, text}) => (
  <>
      <NewsHeadline className="NewsHeadline">
        <div>
          <NewsHeadlineDate className="NewsHeadlineDate">{date} </NewsHeadlineDate>
        </div>
        <NewsHeadlineText className="NewsHeadlineText">
          <p>{title}</p>
        </NewsHeadlineText>
      </NewsHeadline>
      <NewsTable className="NewsTable" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <p>
             {text}
            </p>
          </tr>
        </tbody>
      </NewsTable>
    <br />
  </>
);
