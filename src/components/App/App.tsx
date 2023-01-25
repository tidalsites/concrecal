import { useReducer, FC } from "react";
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
import { PackageModalContent } from "../PackageModalContent/PackageModalContent";

// State
import { LangContext } from "../../state/context/Lang";
import { LangReducer } from "../../state/reducer/Lang";
import { ModalReducer } from "../../state/reducer/Modal";
import { ModalContext } from "../../state/context/Modal";

// Types
import { defaultModalState } from "../../state/context/Modal";
// import { Apartamentos } from "../Apartamentos/Apartamentos";

function App() {
  const [lang, dispatchLang] = useReducer(LangReducer, "es");
  const [modal, dispatchModal] = useReducer(ModalReducer, defaultModalState);

  return (
    <LangContext.Provider value={{ lang: lang, dispatchLang }}>
      <ModalContext.Provider value={{ modal: modal, dispatchModal }}>
        <div className="App">
          <Navbar />
          <Hero />
          <Nosotros />
          <Models />
          <Packages />
          {/* <Apartamentos /> */}
          <Gallery />
          <Footer />
          {modal.type !== "none" ? <PackageModal /> : ""}
        </div>
      </ModalContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
