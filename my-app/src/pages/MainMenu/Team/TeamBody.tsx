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

export const TeamBody: FC = () => (
  <MainBody>
    <div>
      <Table>
              <table>
                <Tbody>
                  <Tr>
                    <Td>
                      <b>Name</b>
                    </Td>
                    <Td>
                      <div>
                        <b>Status</b>
                      </div>
                    </Td>
                    <Td>
                      <div>
                        <b>Last Login</b>
                      </div>
                    </Td>
                  </Tr>
                  <Tr>
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
      </Table>
    </div>
  </MainBody>
);
