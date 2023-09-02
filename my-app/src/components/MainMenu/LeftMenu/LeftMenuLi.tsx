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

const Link = styled.a`
  text-decoration:none ;
  color: #BEA6D8;
`;

export const LeftMenuLi: FC<LeftMenuLiProps> = ({ title, page }) => (
  <MenuLi>
    <Link href={page}>{title}</Link>
  </MenuLi>
);
