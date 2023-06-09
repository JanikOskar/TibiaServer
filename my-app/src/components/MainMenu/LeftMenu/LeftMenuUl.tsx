import React, { FC } from 'react';
import styled from 'styled-components';
import { LeftMenuLi } from './LeftMenuLi';

type LeftMenuUlProps = {
  title: string;
  numberOfElements: number;
  elementsData: any;
};

const LeftUl = styled.ul`
  display: block;
  text-align: center;
  padding-left: 0;
`;

const Title = styled.h2``;

export const LeftMenuUl: FC<LeftMenuUlProps> = ({ title, numberOfElements, elementsData }) => {
  const elements = [];
  for (let i = 0; i < numberOfElements; i++) {
    const { nameOfTitle, link } = elementsData[i];
    elements.push(
      <LeftMenuLi key={i} page={link} title={nameOfTitle}>
        Element {i + 1}
      </LeftMenuLi>
    );
  }

  return (
    <LeftUl>
      <Title>{title}</Title>
      {elements}
    </LeftUl>
  );
};
