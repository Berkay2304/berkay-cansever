// src/App.jsx
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css";
import Intro from './components/Intro/Intro';
import "./components/Intro/intro.css"
import AboutMe from './components/AboutMe/AboutMe';
import "./components/AboutMe/aboutme.css"
import Skills from './components/Skills/Skills';
import './components/Skills/skills.css';
import Portfolio from './components/Portfolio/Portfolio';
import './components/Portfolio/portfolio.css';
import Contact from './components/Contact/Contact';
import './components/Contact/contact.css';
import Footer from './components/Footer/Footer';
import './components/Footer/footer.css';

function App() {
  return (
    <>
      {/* Sabit üst menü */}
      <Navbar />

      {/* Sayfa bölümleri */}
      <Intro />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

