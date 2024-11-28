import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
