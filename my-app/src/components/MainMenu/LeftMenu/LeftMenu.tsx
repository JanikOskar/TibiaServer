import styled from "styled-components";
import { LeftMenuUl } from "./LeftMenuUl";
import { useRWD } from "@appsomesolutions/rwd-utils";

const LeftMainMenu = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #1e2128;
  color: #BEA6D8;
`;

export const LeftMenu = () => {
  const elementsDataMainMenu = [
    { nameOfTitle: "News", link: "/" },
    { nameOfTitle: "Register", link: "/register" },
    { nameOfTitle: "Download", link: "/download" },
    { nameOfTitle: "Team", link: "/team" },
    { nameOfTitle: "Rules", link: "/rules" },
    { nameOfTitle: "Shop Offers", link: "/shop" },
  ];

  const elementsDataGamePlay = [
    { nameOfTitle: "Techniques", link: "/techniques" },
    { nameOfTitle: "Items", link: "/items" },
    { nameOfTitle: "Monsters", link: "/monsters" },
    { nameOfTitle: "Missions", link: "/missions" },
  ];

  const elementsDataSystem = [
    { nameOfTitle: "Enchants", link: "/enchants" },
    { nameOfTitle: "Dragon Ball", link: "/dragonball" },
    { nameOfTitle: "Autoloot", link: "/autoloot" },
  ];

  const elementsDataLibrary = [
    { nameOfTitle: "Ban list", link: "/banlist" },
    { nameOfTitle: "Highscores", link: "/highscore/level" },
  ];

  const WithMD = styled.div`
    display: none;
  `;

  const { less } = useRWD();

  return (
    <>
      {less.md ? (
        <WithMD />
      ) : (
        <LeftMainMenu>
          <LeftMenuUl
            title="Main Menu"
            numberOfElements={elementsDataMainMenu.length}
            elementsData={elementsDataMainMenu}
          />
          <LeftMenuUl
            title="Game Play"
            numberOfElements={elementsDataGamePlay.length}
            elementsData={elementsDataGamePlay}
          />
          <LeftMenuUl
            title="System"
            numberOfElements={elementsDataSystem.length}
            elementsData={elementsDataSystem}
          />
          <LeftMenuUl
            title="Library"
            numberOfElements={elementsDataLibrary.length}
            elementsData={elementsDataLibrary}
          />
        </LeftMainMenu>
      )}
    </>
  );
};
