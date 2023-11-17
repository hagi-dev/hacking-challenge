import { ButtonProps } from "../../../types/models";
import "./index.scss";

export const ButtonIcon: React.FC<ButtonProps> = ({
  name="",
  onClick,
  text="",
  version = "primary",
  isActive = true,
  symbol='',
  color = "base",
}) => {
  const handlerClick = () => {
    if(name){
      onClick(name);
    }else{
      onClick();
    }
  };
  return (
    <button
      disabled={!isActive}
      className={`button-icon button-icon--${version} button-icon--${!isActive ? 'disabled': 'active'}`}
      onClick={handlerClick}
    >
      <span className={`button-icon__symbol button-icon__symbol--${color}`}>
        {symbol}
      </span>
      <span className={`button-icon__text button-icon__text--${color}`}>
        {text}
      </span>
    </button>
  );
};
