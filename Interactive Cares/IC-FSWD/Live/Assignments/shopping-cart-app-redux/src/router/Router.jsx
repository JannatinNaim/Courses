import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "../pages/Catalogue";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogue />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
