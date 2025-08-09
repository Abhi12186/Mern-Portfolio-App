import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();

  return (
    <div id={theme}>
      <ToastContainer />
      <MobileNav />
      <Layout />

     
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <About />
              <Education />
              <Techstack />
              <Projects />
              <Contact />
            </div>
          } />
        </Routes>
      </Router>

      <div className="footer pb-3 ms-3">
        <h4 className="text-center">Made with ❤️ Abhishek Pathak &copy; 2025</h4>
      </div>

      <ScrollToTop 
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </div>
  );
}

export default App;
