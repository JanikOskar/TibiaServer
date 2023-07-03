import { FC } from "react";
import styled from "styled-components";

const MainBody = styled.div`
width:100%
`;

const Table = styled.table`
  border: 1px solid black;
  width:100%
`;

const Tr = styled.tr`
  border: 1px solid black;
  width:100%;
`;

const Th = styled.th``;

const Td = styled.td`
border: 1px solid black;
width:100%
`;

const Thead = styled.thead`
  border: 1px solid black;
  width:100%;

`;

const Tbody = styled.tbody`
  border: 1px solid black;
  width:100%;

`;

export const HighscoreBody: FC = () => (
  <MainBody>
    <h2>Highscores</h2>
    <div>
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
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <center>
                <h2>Ranking for Level</h2>
              </center>
              <table></table>
              <table>
                <Tbody>
                  <Tr>
                    <Td>
                      <b>Rank</b>
                    </Td>
                    <Td>
                      <b>Name</b>
                    </Td>
                    <Td>
                      <div>
                        <b>Level</b>
                      </div>
                    </Td>
                    <Td>
                      <div>
                        <b>Points</b>
                      </div>
                    </Td>
                  </Tr>
                  <Tr></Tr>
                  <Tr>
                    <Td>1.</Td>
                    <Td>
                      <a>
                        <span>Shinobu Kocho</span>
                      </a>
                    </Td>
                    <Td>
                      <center>708</center>
                    </Td>
                    <Td>
                      <center>5,885,648,338</center>
                    </Td>
                  </Tr>
                </Tbody>
              </table>

              <table>
                <Tbody>
                  <Tr>
                    <Td>
                      <a>Next Page</a>
                    </Td>
                  </Tr>
                </Tbody>
              </table>
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>{" "}
    </div>
  </MainBody>
);
