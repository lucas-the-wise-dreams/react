import "./App.css"; //nuevo
import Menu from "./components/Menu";
import AddPage from "./components/AddPage";

// Importa los estilos CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importa los scripts de Bootstrap (incluye Popper)
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/add" element={<AddPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;