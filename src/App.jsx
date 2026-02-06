import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LifeAtCompany from "./pages/About/LifeAtCompany";
import Values from "./pages/About/Values";
// Import pages (we'll create these later)
const HomePage = () => <div className="page-container">Home Page</div>;
const AboutPage = () => <div className="page-container">About Us Page</div>;
const ContactPage = () => <div className="page-container">Contact Page</div>;
const GalleryPage = () => <div className="page-container">Gallery Page</div>;
const ServicesPage = () => (
  <div className="page-container">What We Offer Page</div>
);

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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/life" element={<LifeAtCompany />} />
              <Route path="/values" element={<Values />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
