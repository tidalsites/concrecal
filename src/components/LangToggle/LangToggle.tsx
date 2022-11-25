import { FC, useState, useEffect, useContext } from "react";
import { LangContext } from "../../state/context/Lang";
import "./LangToggle.scss";

// Icons
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

interface ILangToggleProps {
  alt: boolean;
}

export const LangToggle: FC<ILangToggleProps> = ({ alt }) => {
  const [checked, setChecked] = useState<boolean>(true);
  const { dispatchLang } = useContext(LangContext);

  useEffect(() => {
    checked ? dispatchLang("es") : dispatchLang("en");
  }, [checked]);

  return (
    <div
      className={
        alt ? "language-toggle language-toggle-alt" : "language-toggle"
      }
    >
      <span>English</span>
      <button
        className="language-toggle__btn"
        onClick={() => setChecked(!checked)}
        aria-label="Language Toggle"
      >
        {checked ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </button>
      <span>Español</span>
    </div>
  );
};
