import { FC } from "react";
import "./SectionHeading.scss";

// Icons
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

interface ISectionHeadingProps {
  heading: string;
}

export const SectionHeading: FC<ISectionHeadingProps> = ({ heading }) => {
  return (
    <div className="SectionHeading">
      <h2>
        <div className="icon-group">
          <KeyboardDoubleArrowLeft fontSize="large" />
        </div>
        <span>{heading}</span>
        <div className="icon-group">
          <KeyboardDoubleArrowRight fontSize="large" />
        </div>
      </h2>
    </div>
  );
};
