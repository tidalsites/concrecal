import { FC } from "react";
import "./PackageModalContent.scss";

interface IPackageModalContentProps {
  title: string;
  lists: string[];
}

export const PackageModalContent: FC<IPackageModalContentProps> = ({
  title,
  lists,
}) => {
  return (
    <div className="PackageModalContent">
      <p className="PackageModalContent__title">{title}</p>
      <ul>
        {(() => {
          return lists.map((list) => <li>{list}</li>);
        })()}
      </ul>
      <p>
        <span></span>
      </p>
    </div>
  );
};
