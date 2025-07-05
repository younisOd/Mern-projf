import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teas from "./pages/Teas";
import Extras from "./pages/Extras";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teas" element={<Teas />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
