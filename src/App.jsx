import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Hiring from "./components/pages/Hiring";
import Estimate from "./components/pages/Estimate";
import Review from "./components/pages/Review";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
