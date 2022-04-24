import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../components/Index";
import Student from "../components/Student";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/student/:id" element={<Student />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
