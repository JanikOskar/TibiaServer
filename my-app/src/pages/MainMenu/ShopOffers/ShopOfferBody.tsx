import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { ReactComponent as Gold } from "assets/shopItems/Gold.svg";
import { ReactComponent as Bol } from "assets/shopItems/Bol.svg";
import { ReactComponent as FR } from "assets/shopItems/FR.svg";
import { ReactComponent as Senzu } from "assets/shopItems/Senzu.svg";
import { ReactComponent as RedSenzu } from "assets/shopItems/RedSenzu.svg";
import { ReactComponent as BoostExp } from "assets/shopSpecial/BoostExp.svg";
import { ReactComponent as BoostHP } from "assets/shopSpecial/BoostHP.svg";
import { ReactComponent as BoostMP } from "assets/shopSpecial/BoostMP.svg";
import { ReactComponent as DropBoost } from "assets/shopSpecial/DropBoost.svg";
import { ReactComponent as DBBag } from "assets/shopItems/DBBag.svg";
import { ReactComponent as FirstOut } from "assets/shopOutfits/FirstOut.svg";
import { ReactComponent as PP1K } from "assets/shopSpecial/PP1K.svg";
import { ReactComponent as PP3K } from "assets/shopSpecial/PP3K.svg";
import { ReactComponent as Prem10 } from "assets/Prem10.svg";
import { ReactComponent as Prem30 } from "assets/Prem30.svg";
import { ReactComponent as SecOut } from "assets/shopOutfits/SecOut.svg";

import { ShopOfferElement } from "components/ShopOfferElement";
import { useState } from "react";

const MainMenu = styled.div`
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
  cursor: pointer;
  margin: 8px 0;
`;

const Tr = styled.tr`
  padding: 4px;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 8px;
  background-color: #786c85;
  border-color: #bea6d8;
  color: #dfcd00;
`;

const TableStyleForOffers = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const ShopOfferBody = () => {
  const [whichTable, setWhichTable] = useState("items");

  const whichTableVisible = (whichTable: string) => {
    switch (whichTable) {
      case "items":
        return (
          <>
            <ShopOfferElement title="Gold" info="100 Gold" svg={<Gold />} />
            <ShopOfferElement title="Senzu" info="100 Senzu" svg={<Senzu />} />
            <ShopOfferElement
              title="Red Senzu"
              info="100 Red Senzu"
              svg={<RedSenzu />}
            />
            <ShopOfferElement
              title="Band Of Loss"
              info="With this item you wont lose eq when you die"
              svg={<Bol />}
            />
            <ShopOfferElement
              title="Frag Remover"
              info="This item will remove all your frags and skulls."
              svg={<FR />}
            />
            <ShopOfferElement
              title="Dragon Ball Bag"
              info="Bag with 36 slots"
              svg={<DBBag />}
            />
          </>
        );
      case "premium":
        return (
          <>
            <ShopOfferElement
              title="
10 Days Of Premium"
              info="You will receive 10 days of premium in your account"
              svg={<Prem10 />}
            />
            <ShopOfferElement
              title="
30 Days Of Premium"
              info="You will receive 30 days of premium in your account"
              svg={<Prem30 />}
            />
          </>
        );
      case "outfits":
        return (
          <>
            <ShopOfferElement
              title="First Special Outfit Scroll"
              info="You will receive first special outfit to your character"
              svg={<FirstOut />}
            />
            <ShopOfferElement
              title="
Second Special Outfit Scroll"
              info="You will receive first special outfit to your character"
              svg={<SecOut />}
            />
          </>
        );
      case "special":
        return (
          <>
            <ShopOfferElement
              title="
10 Days Premium Card"
              info="You will receive card with 10 premium days (tradable)"
              svg={<Prem10 />}
            />
            <ShopOfferElement
              title="
30 Days Premium Card"
              info="You will receive card with 30 premium days (tradable)"
              svg={<Prem30 />}
            />
            <ShopOfferElement
              title="
1000 Premium Points Scroll"
              info="You will receive scroll with 1000 premium points (tradable)"
              svg={<PP1K />}
            />
            <ShopOfferElement
              title="
3000 Premium Points Scroll"
              info="You will receive scroll with 3000 premium points  (tradable)"
              svg={<PP3K />}
            />
            <ShopOfferElement
              title="Boost Exp"
              info="
20% higher exp rate for 2 hours."
              svg={<BoostExp />}
            />
            <ShopOfferElement
              title="Boost HP"
              info="
25% more health for 2 hours."
              svg={<BoostHP />}
            />
            <ShopOfferElement
              title="Boost Ki"
              info="25% more ki for 2 hours."
              svg={<BoostMP />}
            />
            <ShopOfferElement
              title="Boost Drop"
              info="
2x higher loot drop for 2 hours"
              svg={<DropBoost />}
            />
          </>
        );
    }
  };

  return (
    <MainMenu>
      <SubTitle title="Shop Offer" />
      <Table>
        <Tr>
          <Td
            onClick={() => {
              setWhichTable("items");
            }}
          >
            ITEMS
          </Td>
          <Td
            onClick={() => {
              setWhichTable("premium");
            }}
          >
            PREMIUM
          </Td>
          <Td
            onClick={() => {
              setWhichTable("outfits");
            }}
          >
            OUTFITS
          </Td>
          <Td
            onClick={() => {
              setWhichTable("special");
            }}
          >
            SPECIAL
          </Td>
        </Tr>
      </Table>
      <TableStyleForOffers>{whichTableVisible(whichTable)}</TableStyleForOffers>
    </MainMenu>
  );
};
