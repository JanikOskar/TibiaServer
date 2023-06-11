import React, { FC } from 'react';
import styled from 'styled-components';

type LeftMenuLiProps = {
  children: React.ReactNode;
  title: string;
  page: string;
};

const MenuLi = styled.li`
  text-align: left;
  list-style: none;
`;

export const LeftMenuLi: FC<LeftMenuLiProps> = ({ title, page }) => (
  <MenuLi>
    <a href={page}>{title}</a>
  </MenuLi>
);
