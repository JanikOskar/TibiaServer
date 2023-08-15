import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/MainMenu/Home/Home";
import { Register } from "../pages/MainMenu/Register/Register";
import { Team } from "../pages/MainMenu/Team/Team";
import { Download } from "../pages/MainMenu/Download/Download";
import { Rules } from "../pages/MainMenu/Rules/Rules";
import { ShopOffer } from "../pages/MainMenu/ShopOffers/ShopOffer";
import { Highscore } from "../pages/System/Highscore/Highscore";
import { BanList } from "../pages/System/BanList/BanList";
import { Items } from "pages/GamePlay/Items/Items";
import { Techniques } from "pages/GamePlay/Techniques/Techniques";
import { Monsters } from "pages/GamePlay/Monsters/Monsters";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};
