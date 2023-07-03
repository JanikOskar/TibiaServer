import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/MainMenu/Home/Home";
import { Register } from "../pages/MainMenu/Register/Register";
import { Team } from "../pages/MainMenu/Team/Team";
import { Highscore } from "../pages/System/Highscore/Highscore";
import { Download } from "../pages/MainMenu/Download/Download";
import { Rules } from "../pages/MainMenu/Rules/Rules";
import { ShopOffer } from "../pages/MainMenu/ShopOffers/ShopOffer";

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
          <Route path="/download" element={<Download />} />
          <Route path="/highscore" element={<Highscore />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/shop" element={<ShopOffer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
