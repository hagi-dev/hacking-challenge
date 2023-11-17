import { useState } from "react";
import {
  TYPE_ACTION_BUTTON_ICON,
} from "../../../types/constants";
import { Plus, Subtract } from "../../icons";
import { ButtonIcon } from "../ButtonIcon";
import "./index.scss";
import { formatCurrency } from "../../../helpers";
import { SelectQuantityProps } from "../../../types/models";

export const SelectQuantity: React.FC<SelectQuantityProps> = ({
  value,
  onClick,
  maxQuantity,
  minQuantity,
  variantQuantity = 10,
}) => {
  const [quantity, setQuantity] = useState(value);
  const handlerClickAdd = (action: TYPE_ACTION_BUTTON_ICON) => {
    if (TYPE_ACTION_BUTTON_ICON.ADD === action) {
      if(quantity < maxQuantity){
        setQuantity((prev) => {
          const result = prev + variantQuantity;
          onClick(result);
          return result;
        });
      }
    } else if (TYPE_ACTION_BUTTON_ICON.SUBTRACT === action && quantity > 20) {
      if(quantity > minQuantity){
        setQuantity((prev) => {
          const result = prev - variantQuantity;
          onClick(result);
          return result;
        });
      }
    }
  };
  return (
    <div className="select-quantity">
      <div className="select-quantity__wrapper">
        <div className="select-quantity__wrapper__substract">
          <ButtonIcon
            name={TYPE_ACTION_BUTTON_ICON.SUBTRACT}
            onClick={handlerClickAdd}
            text=""
            version="tertiary"
            symbol={<Subtract className="base" />}
          />
        </div>
        <div className="select-quantity__wrapper__number">
          {formatCurrency(quantity)}
        </div>
        <div className="select-quantity__wrapper__plus">
          <ButtonIcon
            name={TYPE_ACTION_BUTTON_ICON.ADD}
            onClick={handlerClickAdd}
            text=""
            version="tertiary"
            symbol={<Plus className="base" />}
          />
        </div>
      </div>
    </div>
  );
};
