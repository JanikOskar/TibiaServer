import { FC } from "react";
import styled from "styled-components";
import { HighscoreTableLevel } from "./HighscoreTable";
import { SubTitle } from "../../../components/SubTitle";

const MainBody = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Table = styled.table`
  display: flex;
  justify-content: center;
  border-collapse: collapse;
  border-spacing: 0px;
  width:80%;

`;

const Tr = styled.tr`
  border-bottom: 1px solid black;
  padding: 4px;
`;

const Th = styled.th``;

const Td = styled.td`
  border: 1px solid black;
  padding: 4px;
  text-align:center;
`;

const Tbody = styled.tbody``;

export const HighscoreBody: FC = () => (
  <MainBody>
    <SubTitle title='Highscore' />
      <Table>
        <Tbody>
          <Tr>
            <Td>
                <a href="/highscore/level">Level</a>
            </Td>
            <Td>
                <a href="/highscore/kiLevel">Ki Level</a>
            </Td>
            <Td>
              <div>
                <a href="/highscore/speed">Speed</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/atkSpeed">Atk. Speed</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/critical">Critical</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/strength">Strength</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/kiBlast">Ki Blast</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/defense">Defense</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/energy">Energy</a>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <HighscoreTableLevel />
  </MainBody>
);
