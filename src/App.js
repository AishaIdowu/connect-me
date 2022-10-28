import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="About" element={<About />} />
        <Route path="Users" element={<Users />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<h1>404 error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
