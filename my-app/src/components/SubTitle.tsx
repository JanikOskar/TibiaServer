import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const Main = styled.div`
  text-align: center;
  margin: 10px 0;
  font-family: "Catamaran", sans-serif;
  font-size: 22px;
  color: #f09b00;
  background: -webkit-linear-gradient(#FFFFFF, #FFDD00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const BackgroundOfMain = styled.div`
  width: 100%;
`;

export const SubTitle: FC<Props> = ({ title }) => {
  return (
    <BackgroundOfMain style={{ backgroundColor: "#9384A2" }}>
      <Main>{title}</Main>
    </BackgroundOfMain>
  );
};
