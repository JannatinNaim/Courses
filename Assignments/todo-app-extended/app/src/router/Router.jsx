import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../components";
import Todo from "../components/Todo";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
