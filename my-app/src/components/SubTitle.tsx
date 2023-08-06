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
background: -webkit-linear-gradient(#ffd91d, #e85050);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const SubTitle: FC<Props> = ({ title }) => {
 
  return (
    <Main>
       {title}
    </Main>
  );
};
