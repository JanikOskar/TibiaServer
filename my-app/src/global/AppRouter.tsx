import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/MainMenu/Home/Home";
import { Register } from "../pages/MainMenu/Register/Register";
import { Team } from "../pages/MainMenu/Team/Team";
import { Download } from "../pages/MainMenu/Download/Download";
import { Rules } from "../pages/MainMenu/Rules/Rules";
import { ShopOffer } from "../pages/MainMenu/ShopOffers/ShopOffer";
import { BanList } from "../pages/Library/BanList/BanList";
import { Items } from "pages/GamePlay/Items/Items";
import { Techniques } from "pages/GamePlay/Techniques/Techniques";
import { Monsters } from "pages/GamePlay/Monsters/Monsters";
import { Missions } from "pages/GamePlay/Missions/Missions";
import { Highscore } from "pages/Library/Highscore/Highscore";
import { Enchants } from "pages/System/Enchants/Enchants";
import { DragonBalls } from "pages/System/DragonBalls/DragonBalls";
import { AutoLoot } from "pages/System/AutoLoot/AutoLoot";
import { Login } from "components/Login/Login";

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
          <Route path="/download" element={<Download />} />
          <Route path="/highscore/:highscoreName" element={<Highscore />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/shop" element={<ShopOffer />} />
          <Route path="/banlist" element={<BanList />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/items" element={<Items />} />
          <Route path="/monsters" element={<Monsters />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/missions/:missionName" element={<Missions />} />
          <Route path="/enchants" element={<Enchants />} />
          <Route path="/dragonball" element={<DragonBalls />} />
          <Route path="/autoloot" element={<AutoLoot />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
