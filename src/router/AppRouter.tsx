import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { GameDetail } from "../page/GameDetail";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:slug" element={<GameDetail />} />
      </Routes>
    </>
  );
};
