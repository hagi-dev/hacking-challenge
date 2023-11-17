import { generateUniqueKey } from "../../../helpers";
import { ContextListProps } from "../../../types/models";
import "./index.scss";

export const ContextList: React.FC<ContextListProps> = ({options, onclick, value}) => {

    return (
    <div className="context">
      <div className="context__container">
        {options.map((option, index) => (
          <h2
            className={`context__container__option context__container__option--${value === option.value && 'active'}`}
            onClick={() => onclick(option.value)}
            key={generateUniqueKey()}
          >
            {option.label}
          </h2>
        ))}
      </div>
    </div>
  );
};
