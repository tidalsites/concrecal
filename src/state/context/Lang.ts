import { createContext, Dispatch } from "react";
type Lang = "en" | "es";

export const LangContext = createContext<{
  lang: Lang;
  dispatchLang: Dispatch<Lang>;
}>({ lang: "es", dispatchLang: () => {} });
