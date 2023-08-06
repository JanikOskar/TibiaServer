import { FC } from "react";
import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";

const MainBody = styled.div`
  width: 80%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width:100%;
  border-spacing: 0px;
  border: 1px solid black;
`;

const Tr = styled.tr`
  padding: 4px;
`;

const Td = styled.td`
border-left: 1px solid black;
border-bottom: 1px solid black;
padding: 4px;
`;

const Thead = styled.thead`
  border: 1px solid black;
  padding: 4px;
`;

export const TeamBody: FC = () => (
  <MainBody>
    <SubTitle title='Admins/Team' />

    <div>
      <Table>
          <Thead>
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
            </Thead>
            <Tr>
              <Td>
                  <span>Shinobu Kocho</span>
              </Td>
              <Td>
                <center>708</center>
              </Td>
              <Td>
                <center>5,885,648,338</center>
              </Td>
            </Tr>
      </Table>
    </div>
  </MainBody>
);
