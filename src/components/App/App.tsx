import { useReducer } from "react";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import { Nosotros } from "../Nosotros/Nosotros";
import { Proyectos } from "../Proyectos/Proyectos";
import { Footer } from "../Footer/Footer";

// State
import { LangContext } from "../../state/context/Lang";
import { LangReducer } from "../../state/reducer/Lang";

function App() {
  const [lang, dispatchLang] = useReducer(LangReducer, "es");

  return (
    <LangContext.Provider value={{ lang: lang, dispatchLang }}>
      <div className="App">
        <Navbar />
        <Hero />
        <Nosotros />
        <Proyectos />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
