import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shows from "./pages/Shows";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
