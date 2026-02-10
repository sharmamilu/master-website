import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LifeAtCompany from "./pages/About/LifeAtCompany";
import Values from "./pages/About/Values";
import Leadership from "./pages/About/LeaderShip";
import Service from "./pages/WhatWeOffer/Service";
import Solution from "./pages/WhatWeOffer/Solution";
import Industry from "./pages/WhatWeOffer/Industry";
// Import pages (we'll create these later)
const HomePage = () => <div className="page-container">Home Page</div>;
const AboutPage = () => <div className="page-container">About Us Page</div>;
const ContactPage = () => <div className="page-container">Contact Page</div>;
const GalleryPage = () => <div className="page-container">Gallery Page</div>;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/life" element={<LifeAtCompany />} />
              <Route path="/values" element={<Values />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/services" element={<Service />} />
              <Route path="/solutions" element={<Solution />} />
              <Route path="/industries" element={<Industry />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
