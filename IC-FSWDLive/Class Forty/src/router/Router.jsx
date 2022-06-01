import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "../components/RootPage";
import PathA from "../components/PathA";
import NotFound from "../components/NotFound";
import TodoDetails from "../components/TodoDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />

        <Route path="/a" element={<PathA />} />

        <Route path="/b" element={<h2>Heyo! How's it going? B</h2>} />

        <Route path="/todo/:id" element={<TodoDetails />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
