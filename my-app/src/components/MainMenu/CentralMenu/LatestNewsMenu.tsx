import React from 'react';
import styled from 'styled-components';
import { NewsMenuHeadline } from './NewsMenuHeadeline';

const LatestNews = styled.section`
  display: flex;
  justify-content: space-between;
  width:100%
`;

const BoxContent = styled.div`
  width:100%
`;

export const LatestNewsMenu = () => (
  <LatestNews className="latest-news">
    <BoxContent className="BoxContent">
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
    </BoxContent>
  </LatestNews>
);
