import { FC } from "react";
import styled from "styled-components";
import { HighscoreTableLevel } from "./HighscoreTable";
import { SubTitle } from "../../../components/SubTitle";

const MainBody = styled.div`
  padding: 4px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  display: flex;
  justify-content: center;
  border-collapse: collapse;
  border-spacing: 0px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid black;
  padding: 4px;
`;

const Th = styled.th``;

const Td = styled.td`
  border: 1px solid black;
  padding: 4px;
`;

const Tbody = styled.tbody``;

export const HighscoreBody: FC = () => (
  <MainBody>
    <div style={{ width: "80%" }}>
    <SubTitle title='Highscore' />
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <div>
                <a href="/highscore/level">Level</a>
              </div>
            </Td>
            <Td>
              <div>
                <a href="/highscore/kiLevel">Ki Level</a>
              </div>
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
      <div>
        <a>Next page</a>
      </div>
    </div>
  </MainBody>
);
