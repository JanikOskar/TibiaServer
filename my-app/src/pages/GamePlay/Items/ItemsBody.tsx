import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { ReactComponent as Amulet } from "assets/items/Amulet/amulet.svg";
import { ReactComponent as Body } from "assets/items/Body/body.svg";
import { ReactComponent as Boots } from "assets/items/Boots/boots.svg";
import { ReactComponent as Dist } from "assets/items/Dist/dist.svg";
import { ReactComponent as Melee } from "assets/items/Melee/Melee.svg";
import { ReactComponent as Helmet } from "assets/items/Helmet/Helmet.svg";
import { ReactComponent as Legs } from "assets/items/Legs/Legs.svg";
import { ReactComponent as Enchants } from "assets/items/Enchants/Enchants.svg";
import { ReactComponent as Special } from "assets/items/Special/Special.svg";
import { ReactComponent as Potions } from "assets/items/Potions/Potions.svg";
import { useState } from "react";
import { ItemsTable } from "./ItemsTable";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const TypeOfItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemsBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whichOfItem, setWhichItems] = useState("");
  console.log(`whichItems itemsbody`, whichOfItem);
  return (
    <Main>
      <SubTitle title="Items" />
      <ItemsStyle>
        <TypeOfItemsStyle>
          <Helmet
            onClick={() => {
              setIsOpen(true);
              setWhichItems("helmet");
            }}
          />
          <span>Helmet</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Body
            onClick={() => {
              setIsOpen(true);
              setWhichItems("body");
            }}
          />
          <span>Body</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Boots
            onClick={() => {
              setIsOpen(true);
              setWhichItems("boots");
            }}
          />

          <span>Boots</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Legs
            onClick={() => {
              setIsOpen(true);
              setWhichItems("legs");
            }}
          />
          <span>Legs</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Dist
            onClick={() => {
              setIsOpen(true);
              setWhichItems("distance");
            }}
          />
          <span>Distance</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Melee
            onClick={() => {
              setIsOpen(true);
              setWhichItems("melee");
            }}
          />
          <span>Melee</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Amulet
            onClick={() => {
              setIsOpen(true);
              setWhichItems("amulet");
            }}
          />
          <span>Amulet</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Enchants
            onClick={() => {
              setIsOpen(true);
              setWhichItems("enchants");
            }}
          />
          <span>Enchants</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Special
            onClick={() => {
              setIsOpen(true);
              setWhichItems("special");
            }}
          />
          <span>Special</span>
        </TypeOfItemsStyle>
        <TypeOfItemsStyle>
          <Potions
            onClick={() => {
              setIsOpen(true);
              setWhichItems("potion");
            }}
          />
          <span>Potions</span>
        </TypeOfItemsStyle>
      </ItemsStyle>
      {isOpen ? <ItemsTable typeOfItems={whichOfItem} /> : null}
    </Main>
  );
};
