import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/MainMenu/Home/Home";
import { Register } from "../pages/MainMenu/Register/Register";
import { Team } from "../pages/MainMenu/Team/Team";

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
