import React from 'react';
import styled from 'styled-components';
import { NewsMenuHeadline } from './NewsMenuHeadeline';
import { SubTitle } from '../../SubTitle';

const LatestNews = styled.section`
  display:flex;
  flex:1;
  flex-direction:column;
`;

const BoxContent = styled.div`
  width:100%
`;

export const LatestNewsMenu = () => (
  <LatestNews className="latest-news">
    <SubTitle title='Latest News' />
    <BoxContent className="BoxContent">
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
     <NewsMenuHeadline date={`2013`} title={`Łutyt`} text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`} />
    </BoxContent>
  </LatestNews>
);
