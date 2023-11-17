import { generateUniqueKey } from "../../helpers";
import { ListItemProps } from "../../types/models";
import { Check } from "../icons";
import "./index.scss";

export const ListItem: React.FC<ListItemProps> = ({options}) => {
  return (
    <div className="list-item">
      {options.map((option) => {
        return <div className="list-item__option" key={generateUniqueKey()}>
            <Check className="checked" />
            <span className="list-item__option__text">{option}</span>
        </div>;
      })}
    </div>
  );
};
