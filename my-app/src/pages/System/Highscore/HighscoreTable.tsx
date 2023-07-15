import styled from "styled-components";
import { FC, useEffect, useState } from "react";

const Tr = styled.tr`
  border-bottom: 1px solid black;
  padding: 4px;
`;

const Td = styled.td`
border-left: 1px solid black;
border-right: 1px solid black
border-bottom: 1px solid black
padding: 4px;
`;

const Table = styled.table`
border-collapse: collapse;
  border: 1px solid black;
  width:100%
  border-spacing: 0px;
`;

const Thead = styled.thead`
  border: 1px solid black;
  padding: 4px;
`;

const RankColumn = styled.td`
border-left: 1px solid black;
border-right: 1px solid black
border-bottom: 1px solid black
width:5%;
`;

const NameColumn = styled.td`
border-left: 1px solid black;
border-right: 1px solid black
border-bottom: 1px solid black
padding: 4px;
`;
const ProfessionColumn = styled.td`
border-left: 1px solid black;
border-right: 1px solid black
border-bottom: 1px solid black
padding: 4px;
width:10%;
`;
const LevelColumn = styled.td`
border-left: 1px solid black;
border-right: 1px solid black
border-bottom: 1px solid black
padding: 4px;
width:10%;
`;

const NameOfRow = styled.span`
  margin: 0px 4px;
`;

const characters = [
  "Goku",
  "Vegeta",
  "Bardock",
  "Trunks",
  "Gohan",
  "Piccolo",
  "Krillin",
  "Frieza",
  "Cell",
  "Majin Buu",
  "Beerus",
  "Whis",
];

const professions = [
  "Warrior",
  "Saiyan",
  "Super Saiyan",
  "Super Saiyan God",
  "Super Saiyan Blue",
  "Super Saiyan Rose",
  "Super Saiyan 2",
  "Super Saiyan 3",
  "Super Saiyan 4",
  "Namekian",
  "Android",
  "Majin",
];

export const HighscoreTableLevel: FC = () => {
  const [users, setUsers] = useState<
    { name: string; profession: string; level: number }[]
  >([]);

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };

  const getRandomProfession = () => {
    const randomIndex = Math.floor(Math.random() * professions.length);
    return professions[randomIndex];
  };

  const getRandomLevel = () => {
    return Math.floor(Math.random() * 999) + 1;
  };

  const generateUsers = () => {
    const generatedUsers = [];
    for (let i = 0; i < 50; i++) {
      const user = {
        name: getRandomName(),
        profession: getRandomProfession(),
        level: getRandomLevel(),
      };
      generatedUsers.push(user);
    }
    return generatedUsers;
  };

  const handleGenerateUsers = () => {
    const generatedUsers = generateUsers();
    setUsers(generatedUsers);
  };

  useEffect(() => {
    handleGenerateUsers();
  }, []);

  return (
    <>
      <center>
        <h2>Ranking for Level</h2>
      </center>
      <Table>
        <Thead>
          <Tr>
            <RankColumn>
              <NameOfRow>
                <b>Rank</b>
              </NameOfRow>
            </RankColumn>
            <NameColumn>
              <NameOfRow>
                <b>Name</b>
              </NameOfRow>
            </NameColumn>
            <ProfessionColumn>
              <NameOfRow>
                <b>Proffesion</b>
              </NameOfRow>
            </ProfessionColumn>
            <LevelColumn>
              <NameOfRow>
                <b>Level</b>
              </NameOfRow>
            </LevelColumn>
          </Tr>
          {users.map((element, index) => (
            <Tr key={index}>
              <Td>
                <NameOfRow></NameOfRow>
                <span>{index}</span>
              </Td>
              <Td>
                <NameOfRow>
                  <span>{element.name}</span>
                </NameOfRow>
              </Td>
              <Td>
                <NameOfRow>
                  <center>{element.profession}</center>
                </NameOfRow>
              </Td>
              <Td>
                <NameOfRow>
                  <center>{element.level}</center>
                </NameOfRow>
              </Td>
            </Tr>
          ))}
        </Thead>
      </Table>
    </>
  );
};
