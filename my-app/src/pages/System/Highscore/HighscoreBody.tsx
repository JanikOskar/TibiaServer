import { FC } from "react";
import styled from "styled-components";
import { HighscoreTableLevel } from "./HighscoreTable";

const MainBody = styled.div`
width:100%;
padding: 4px;
 display: flex;
  justify-content: center;
  align-items:center;
  `;

const Table = styled.table`
border-collapse: collapse;
  border: 1px solid black;
  width:100%
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

const Tbody = styled.tbody`
`;

export const HighscoreBody: FC = () => (
  <MainBody>
    <div>
      <center>
    <h2>Highscores</h2>
    </center>
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <div>
                <a>Level</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Ki Level</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Speed</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Atk. Speed</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Critical</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Strength</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Ki Blast</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Defense</a>
              </div>
            </Td>
            <Td>
              <div>
                <a>Energy</a>
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
