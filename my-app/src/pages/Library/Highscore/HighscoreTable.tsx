import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  width: 80%;
  border: 1px solid black;
  padding: 4px;
  margin: 8px;
  border-color: #bea6d8;
`;

const Tr = styled.tr`
  background-color: #3d3942;
  color: #bea6d8;
  border-color: #bea6d8;
  padding: 4px;
`;

const Td = styled.td`
  border-left: 1px solid #bea6d8;
  border-bottom: 1px solid #bea6d8;
  padding: 4px;
  border-color: #bea6d8;
`;

const Thead = styled.thead`
  border: 1px solid #bea6d8;
  padding: 4px;
`;

const RankColumn = styled.td`
  border-bottom: 1px solid #bea6d8;
  color: #dfcd00;
  padding: 8px 0;
  background-color: #786c85;
`;

const NameColumn = styled.td`
  border-left: 1px solid #bea6d8;
  border-bottom: 1px solid #bea6d8;
  padding: 8px 0;
  text-align: center;
  color: #dfcd00;
  background-color: #786c85;
`;

const ProfessionColumn = styled.td`
  border-left: 1px solid #bea6d8;
  border-bottom: 1px solid #bea6d8;
  padding: 8px 0;
  text-align: center;
  color: #dfcd00;
  background-color: #786c85;
`;

const LevelColumn = styled.td`
  border-left: 1px solid #bea6d8;
  border-bottom: 1px solid #bea6d8;
  padding: 8px 0;
  text-align: center;
  color: #dfcd00;
  background-color: #786c85;
`;

const NameOfRow = styled.span`
  margin: 0px 4px;
`;

const RankingNameStyle = styled.h2`
  color: #dfcd00;
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
        return <RankingNameStyle>Ranking for Ki Level</RankingNameStyle>;
      case "speed":
        return <RankingNameStyle>Ranking for Speed</RankingNameStyle>;
      case "atkSpeed":
        return <RankingNameStyle>Ranking for Attack Speed</RankingNameStyle>;
      case "critical":
        return <RankingNameStyle>Ranking for Critical</RankingNameStyle>;
      case "strength":
        return <RankingNameStyle>Ranking for Strength</RankingNameStyle>;
      case "kiBlast":
        return <RankingNameStyle>Ranking for Ki Blast</RankingNameStyle>;
      case "defense":
        return <RankingNameStyle>Ranking for Defense</RankingNameStyle>;
      case "energy":
        return <RankingNameStyle>Ranking for Energy</RankingNameStyle>;
      default:
        return <RankingNameStyle>Ranking for Level</RankingNameStyle>;
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
