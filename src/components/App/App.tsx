import { useReducer } from "react";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import { Nosotros } from "../Nosotros/Nosotros";
import { Packages } from "../Packages/Packages";
import { Footer } from "../Footer/Footer";
import { Models } from "../Models/Models";

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
        <Packages />
        <Models />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
