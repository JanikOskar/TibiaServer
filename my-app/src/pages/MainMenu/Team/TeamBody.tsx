import { FC } from "react";
import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";

const MainBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items:center;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  width: 90%;
  border: 1px solid black;
  padding: 4px;
  margin: 8px;
  border-color: #BEA6D8;
`;

const Tr = styled.tr`
  padding: 4px;
  background-color: #3D3942;
  color: #DFCD00;
  border-color: #BEA6D8;
`;

const Td = styled.td`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding: 4px;
  border-color: #BEA6D8;
`;

const Thead = styled.thead`
  border: 1px solid black;
  padding: 4px;
  border-color: #BEA6D8;
`;

export const TeamBody: FC = () => (
  <MainBody>
    <SubTitle title="Admins/Team" />
      <Table>
        <Thead>
          <Tr>
            <Td >
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
            <span>Ertasek</span>
          </Td>
          <Td>
            <center>Owner</center>
          </Td>
          <Td>
            <center>01.09.2023 18:33</center>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <span>Kebabo</span>
          </Td>
          <Td>
            <center>Admin</center>
          </Td>
          <Td>
            <center>25.08.2023 16:09</center>
          </Td>
        </Tr>
      </Table>
  </MainBody>
);
