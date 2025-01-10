import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Crud from "./pages/Crud";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
