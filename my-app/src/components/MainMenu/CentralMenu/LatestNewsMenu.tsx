import React from "react";
import styled from "styled-components";
import { NewsMenuHeadline } from "./NewsMenuHeadeline";
import { SubTitle } from "../../SubTitle";

const LatestNews = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const BoxContent = styled.div`
  width: 100%;
`;

export const LatestNewsMenu = () => (
  <LatestNews className="latest-news">
    <SubTitle title="Latest News" />
    <BoxContent className="BoxContent">
      <NewsMenuHeadline
        date={`2023.09.12`}
        title={`RWD Header`}
        text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`}
      />
      <NewsMenuHeadline
        date={`2023.08.28`}
        title={`Added Systems pages`}
        text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`}
      />
      <NewsMenuHeadline
        date={`2023.08.24`}
        title={`Added Game Play pages`}
        text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`}
      />
      <NewsMenuHeadline
        date={`2023.08.20`}
        title={`Added Main Menu pages`}
        text={`Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`}
      />
    </BoxContent>
  </LatestNews>
);
