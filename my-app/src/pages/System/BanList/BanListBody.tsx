import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";

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

const MainBody = styled.div`
  width: 80%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
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

export const BanListBody: FC = () => {

  const generateRandomDates = () => {
    const startDate = new Date(); // Początkowa data - dzisiaj
    const endDate = new Date('2024-01-01'); // Koniec daty - 1 stycznia 2024 roku
  
    const randomDates = [];
    for (let i = 0; i < 1; i++) {
      const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
      const randomDate = new Date(randomTime);
      randomDates.push(randomDate.toDateString());
    }
  
    return randomDates;
  };

  const [users, setUsers] = useState<
    { name: string; expiredDate: any; comment:any; addedBy: any }[]
  >([]);

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };
  
  
  const generateRandomName = () => {
    const names = ['John', 'Emma', 'Michael', 'Sophia', 'Oliver', 'Isabella', 'William', 'Mia', 'James', 'Charlotte'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };
  
  const getRandomLevel = () => {
    return Math.floor(Math.random() * 99999) + 1;
  };

  const generateUsers = () => {
    const generatedUsers = [];
    for (let i = 0; i < 4; i++) {
      const user = {
        name: getRandomName(),
        expiredDate: generateRandomDates(),
        comment: getRandomLevel(),
        addedBy: generateRandomName()
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
    <MainBody>
      <Table>
        <Thead>
          <Tr>
            <RankColumn>
              <NameOfRow>
                <b>Name</b>
              </NameOfRow>
            </RankColumn>
            <NameColumn>
              <NameOfRow>
                <b>Expires</b>
              </NameOfRow>
            </NameColumn>
            <ProfessionColumn>
              <NameOfRow>
                <b>Comment</b>
              </NameOfRow>
            </ProfessionColumn>
            <LevelColumn>
              <NameOfRow>
                <b>Added By</b>
              </NameOfRow>
            </LevelColumn>
          </Tr>
          {users.map((element, index) => (
            <Tr key={index}>
              <Td>
                <NameOfRow>
                  <span>{element.name}</span>
                </NameOfRow>
              </Td>
              <Td>
                <NameOfRow>
                  <center>{element.expiredDate}</center>
                </NameOfRow>
              </Td>
              <Td>
                <NameOfRow>
                  <center>{element.comment}</center>
                </NameOfRow>
              </Td>
              <Td>
                <NameOfRow>
                  <center>{element.addedBy}</center>
                </NameOfRow>
              </Td>
            </Tr>
          ))}
        </Thead>
      </Table>
      </MainBody>
  );
};
