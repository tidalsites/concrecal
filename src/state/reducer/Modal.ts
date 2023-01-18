import { PackageName } from "../../components/PackageModal/PackageModal";

interface PackageList {
  en: string[];
  es: string[];
}

export interface ModalState {
  type: PackageName;
  package_title_en: string;
  package_title_es: string;
  package_list: PackageList;
  materials_included: boolean;
}

// Formaleta Lists
const formaletaListEs = [
  "Alquiler de formaletas",
  "Mano de obra acero",
  "Mano de obra instalación de moldes",
  "Mano de obra electricidad",
  "Mano de obra plomería",
];

const formaletaListEn = [
  "Formaleta rental",
  "Steel labor",
  "Mold installation labor",
  "Electrical labor",
  "Plumbing labor",
];

// Obra Gris Lists
const grisListEs = [
  "Todo en formaleta",
  "Terminaciones interiores",
  "Exteriores en estuco",
  "Finos de techos",
];

const grisListEn = [
  "Everything in formaleta",
  "Interior finishes",
  "Stucco exteriors",
  "Roofing finishes",
];

// Todo Costo Lists
const todoListEs = [
  "Todo en obra gris",
  "Terminaciones de pisos",
  "Cocinas",
  "Baños",
  "Puertas",
  "Ventanas",
];

const todoListEn = [
  "Everything in obra gris",
  "Floor finishes",
  "Kitchens",
  "Bathrooms",
  "Doors",
  "Windows",
];

export const ModalReducer = (
  state: ModalState,
  action: PackageName
): ModalState => {
  switch (action) {
    case "formaleta":
      return {
        type: "formaleta",
        package_title_en: "Formaleta",
        package_title_es: "Formaleta",
        package_list: {
          en: formaletaListEn,
          es: formaletaListEs,
        },
        materials_included: false,
      };
    case "gris":
      return {
        type: "gris",
        package_title_en: "Gray Work",
        package_title_es: "Obra Gris",
        package_list: {
          en: grisListEn,
          es: grisListEs,
        },
        materials_included: true,
      };
    case "todo":
      return {
        type: "todo",
        package_title_en: "Full Cost",
        package_title_es: "Todo Costo",
        package_list: {
          en: todoListEn,
          es: todoListEs,
        },
        materials_included: true,
      };
    case "none":
      return {
        type: "none",
        package_title_en: "none",
        package_title_es: "none",
        package_list: {
          en: [],
          es: [],
        },
        materials_included: false,
      };
    default:
      return state;
  }
};
