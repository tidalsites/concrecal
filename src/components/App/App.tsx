import { useReducer, useState } from "react";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import { Nosotros } from "../Nosotros/Nosotros";
import { Packages } from "../Packages/Packages";
import { Footer } from "../Footer/Footer";
import { Models } from "../Models/Models";
import { Gallery } from "../Gallery/Gallery";
import { PackageModal } from "../PackageModal/PackageModal";

// State
import { LangContext } from "../../state/context/Lang";
import { LangReducer } from "../../state/reducer/Lang";

// Types
import { PackageName } from "../PackageModal/PackageModal";

function App() {
  const [lang, dispatchLang] = useReducer(LangReducer, "es");
  const [modal, setModal] = useState<PackageName>("none");

  return (
    <LangContext.Provider value={{ lang: lang, dispatchLang }}>
      <div className="App">
        <Navbar />
        <Hero />
        <Nosotros />
        <Models />
        <Packages setModal={setModal} />
        <Gallery />
        <Footer />
        {modal !== "none" ? (
          <PackageModal setModal={setModal} package_name={modal} />
        ) : (
          ""
        )}
      </div>
    </LangContext.Provider>
  );
}

export default App;
