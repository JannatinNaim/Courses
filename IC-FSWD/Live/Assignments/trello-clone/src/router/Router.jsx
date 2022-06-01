import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBoards from "../pages/AllBoards";
import Board from "../pages/Board";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBoards />} />
        <Route path="/:boardID" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
