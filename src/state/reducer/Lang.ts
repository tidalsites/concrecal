type Lang = "en" | "es";

export const LangReducer = (state: Lang, action: Lang): Lang => {
  if (action !== state) {
    return action;
  }
  return state;
};
