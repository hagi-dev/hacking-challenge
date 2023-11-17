import "./index.scss";
import personTank from "../../../assets/images/personTank.png";
import personTankMobile from "../../../assets/images/personTankMobile.png";
import useUser from "../../../hooks/useUser";
import { Button } from "../../../components/form";
import { Page } from "../../../components/container";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ThankYou = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    if (user.id === 0) {
        navigate("/login");
      }
  }, []);
  return (
    <Page isHeader={true}>
      <section className="tank-you">
        <div className="tank-you__banner">
          <img
            className="tank-you__banner__image-desktop"
            src={personTank}
            alt="gracias"
          />
          <img
            className="tank-you__banner__image-mobile"
            src={personTankMobile}
            alt="gracias"
          />
        </div>
        <div className="tank-you__content">
          <div className="tank-you__content__container">
            <h1 className="tank-you__content__title">
              <span className="tank-you__content__title--primary">
                ¡Te damos la bienvenida!
              </span>
              <span className="tank-you__content__title--secondary">
                Cuenta con nosotros para proteger tu vehículo
              </span>
            </h1>
            <p className="tank-you__content__description">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking
              a tu correo:
            </p>
            <h2 className="tank-you__content__email">{user.email}</h2>
            <div className="tank-you__content__button">
              <Button text="cómo usar mi seguro" onClick={() => {}} />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};
