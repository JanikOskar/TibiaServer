import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { SubTitle } from "../../../components/SubTitle";
import React from "react";

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  width: 80%;
  border-spacing: 0px;
  margin:0 auto;
  text-align:center;
`;

const Tr = styled.tr`
  border-bottom: 1px solid black;
  padding: 4px;
`;

const Td = styled.td`
  border-left: 1px solid black;
  padding: 4px;
`;

const Thead = styled.thead``;

const NameColumn = styled.td``;

const ExpiresColumn = styled.td`
  border-left: 1px solid black;
  padding: 4px;
`;

const CommentColumn = styled.td`
  border-left: 1px solid black;
  padding: 4px;
`;

const AddedByColumn = styled.td`
  border-left: 1px solid black;
  padding: 4px;
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
    const endDate = new Date("2024-01-01"); // Koniec daty - 1 stycznia 2024 roku

    const randomDates = [];
    for (let i = 0; i < 1; i++) {
      const randomTime =
        startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime());
      const randomDate = new Date(randomTime);
      randomDates.push(randomDate.toDateString());
    }

    return randomDates;
  };

  const [users, setUsers] = useState<
    { name: string; expiredDate: any; comment: any; addedBy: any }[]
  >([]);

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };

  const generateRandomComment = () => {
    const banExamples = [
      "Używanie oszustw w celu uzyskania nieuczciwej przewagi nad innymi graczami.",
      "Wykazywanie toksycznego zachowania i obrażanie innych graczy.",
      "Hacking i wykorzystywanie błędów w celu zmiany stanu gry.",
      "Handel przedmiotami lub walutą gry za prawdziwe pieniądze poza oficjalnymi kanałami dewelopera.",
    ];
    const randomIndex = Math.floor(Math.random() * banExamples.length);
    return banExamples[randomIndex];
  };

  const generateRandomName = () => {
    const names = [
      "John",
      "Emma",
      "Michael",
      "Sophia",
      "Oliver",
      "Isabella",
      "William",
      "Mia",
      "James",
      "Charlotte",
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const generateUsers = () => {
    const generatedUsers = [];
    for (let i = 0; i < 4; i++) {
      const user = {
        name: getRandomName(),
        expiredDate: generateRandomDates(),
        comment: generateRandomComment(),
        addedBy: generateRandomName(),
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
    <div style={{width:'100%'}}>
              <SubTitle title='Ban List' />
          <Table>
            <Thead>
              <Tr>
                <NameColumn>
                  <NameOfRow>
                    <b>Name</b>
                  </NameOfRow>
                </NameColumn>
                <ExpiresColumn>
                  <NameOfRow>
                    <b>Expires</b>
                  </NameOfRow>
                </ExpiresColumn>
                <CommentColumn>
                  <NameOfRow>
                    <b>Comment</b>
                  </NameOfRow>
                </CommentColumn>
                <AddedByColumn>
                  <NameOfRow>
                    <b>Added By</b>
                  </NameOfRow>
                </AddedByColumn>
              </Tr>
            </Thead>
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
          </Table>
    </div>
  );
};
