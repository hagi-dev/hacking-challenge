import { HeaderProps } from "../../../types/models/layout/header";
import { Phone } from "../../icons";
import logoRimac from "../../../assets/images/logoRimac.svg";
import "./index.scss";
import { useScroll } from "../../../hooks";

export const Header: React.FC<HeaderProps> = ({ version = "primary" }) => {
  const isScroll = useScroll(window);
  return (
    <header className={`header header--${version} header--${isScroll && 'active'}`}>
      <div className="header__container-logo">
        <img className="header__logo" src={logoRimac} alt="Rimac-logo" />
      </div>
      <div className="header__contact">
        <h3 className="header__contact-text">¿Tienes alguna duda?</h3>
        <a href="tel:014116001" className="header__contact-number">
            <Phone className="primary" />
            <span className="header__number-text-mobile">Llámanos</span>
            <span className="header__number-text-desktop"> (01) 411 6001</span>
          </a>
      </div>
    </header>
  );
};
