import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";

const Table = styled.table`
  border-collapse: collapse;
  width:80%;
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

const RankColumn = styled.td`
  border-bottom: 1px solid black;
`;

const NameColumn = styled.td`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding: 4px;
`;

const ProfessionColumn = styled.td`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding: 4px;
`;

const LevelColumn = styled.td`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
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
  const { highscoreName } = useParams();

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
    return Math.floor(Math.random() * 99999) + 1;
  };

  const generateUsers = () => {
    const generatedUsers = [];
    for (let i = 0; i < 40; i++) {
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

  const changeHighscoreName = (name: any) => {
    switch (name) {
      case "kiLevel":
        return <h2>Ranking for Ki Level</h2>;
      case "speed":
        return <h2>Ranking for Speed</h2>;
      case "atkSpeed":
        return <h2>Ranking for Attack Speed</h2>;
      case "critical":
        return <h2>Ranking for Critical</h2>;
      case "strength":
        return <h2>Ranking for Strength</h2>;
      case "kiBlast":
        return <h2>Ranking for Ki Blast</h2>;
      case "defense":
        return <h2>Ranking for Defense</h2>;
      case "energy":
        return <h2>Ranking for Energy</h2>;
      default:
        return <h2>Ranking for Level</h2>;
    }
  };

  return (
    <>
      <center>{changeHighscoreName(highscoreName)}</center>
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
        </Thead>
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
      </Table>
    </>
  );
};
