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
  width: 80%;
  margin: 12px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid black;
  padding: 4px;
`;

const Th = styled.th``;

const Td = styled.td`
  text-align: center;
  border: 1px solid #bea6d8;
  color: #dfcd00;
  background-color: #786c85;
  padding: 8px;
`;

const Tbody = styled.tbody``;

const LinkStyle = styled.a`
  text-decoration: none;
  color: #dfcd00;
  background-color: #786c85;
`;

export const HighscoreBody: FC = () => (
  <MainBody>
    <SubTitle title="Highscore" />
    <Table>
      <Tbody>
        <Tr>
          <Td>
            <LinkStyle href="/highscore/level">Level</LinkStyle>
          </Td>
          <Td>
            <LinkStyle href="/highscore/kiLevel">Ki Level</LinkStyle>
          </Td>
          <Td>
            <div>
              <LinkStyle href="/highscore/speed">Speed</LinkStyle>
            </div>
          </Td>
          <Td>
            <div>
              <LinkStyle href="/highscore/atkSpeed">Atk. Speed</LinkStyle>
            </div>
          </Td>
          <Td>
            <div>
              <LinkStyle href="/highscore/critical">Critical</LinkStyle>
            </div>
          </Td>
          <Td>
            <div>
              <LinkStyle href="/highscore/strength">Strength</LinkStyle>
            </div>
          </Td>
          <Td>
            <div>
              <LinkStyle href="/highscore/kiBlast">Ki Blast</LinkStyle>
            </div>
          </Td>
          <Td>
            <LinkStyle href="/highscore/defense">Defense</LinkStyle>
          </Td>
          <Td>
            <div>
              <LinkStyle href="/highscore/energy">Energy</LinkStyle>
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
    <HighscoreTableLevel />
  </MainBody>
);
