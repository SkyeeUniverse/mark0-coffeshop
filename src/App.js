import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/HeroSection";
import About from "./components/About";
import Menu from "./components/menuSection";
import Contact from "./components/contactSection";
import Footer from "./components/footer";
import "./css/style.css";

function App() {
  return (
    <div>
      <div className="nav-bg">
        <NavigationBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
