// src/App.jsx
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css";
import Intro from './components/Intro/Intro';
import "./components/Intro/intro.css"
// import AboutMe from './components/AboutMe';
// import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Sabit üst menü */}
      <Navbar />

      {/* Sayfa bölümleri */}
      <Intro />
      {/* <AboutMe /> */}
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

