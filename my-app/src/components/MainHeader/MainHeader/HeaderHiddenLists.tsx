import React, { FC } from 'react';
import styled from 'styled-components';

type HiddenLiProps = {
  title: string;
  page: string;
};

const HiddenLi = styled.li`
  margin: 5px 0px 5px 0;
  list-style: none;
`;

export const HeaderHiddenLists: FC<HiddenLiProps> = ({ page, title }) => (
  <HiddenLi className="hidden-li">
    <a href={page}>{title}</a>
  </HiddenLi>
);
