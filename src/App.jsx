import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
