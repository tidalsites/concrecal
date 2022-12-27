import { createContext, Dispatch } from "react";
import { PackageName } from "../../components/PackageModal/PackageModal";
import { ModalState } from "../reducer/Modal";

export const defaultModalState: ModalState = {
  type: "none",
  package_title_en: "none",
  package_title_es: "none",
  package_list: {
    en: [],
    es: [],
  },
  materials_included: false,
};

export const ModalContext = createContext<{
  modal: ModalState;
  dispatchModal: Dispatch<PackageName>;
}>({ modal: defaultModalState, dispatchModal: () => {} });
