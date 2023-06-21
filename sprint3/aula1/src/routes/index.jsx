import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Info } from "../pages/info";

export const RoutesMain = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/info" element={<Info />} />

    </Routes>
  );
};
