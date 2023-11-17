import { useState } from "react";
import { ArrowDown, ArrowTop, Plus, Subtract } from "../../icons";
import { ButtonIcon } from "../ButtonIcon";
import { TYPE_ACTION_BUTTON_ICON } from "../../../types/constants";
import { AccordionProps } from "../../../types/models";

import "./index.scss";
import { Spinner } from "../Spinner";

export const Accordion: React.FC<AccordionProps> = ({
  id,
  children,
  onClickAction,
  isAdded = false,
  isOpenDefault = false,
  title,
  version = "primary",
  urlImage,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const handlerClick = (name: TYPE_ACTION_BUTTON_ICON) => {
    if (TYPE_ACTION_BUTTON_ICON.OPEN !== name) {
      onClickAction(name, id);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handlerClickHeader = () => {
    if (window.innerWidth > 576) setIsOpen(!isOpen);
  };

  const handlerClickSpinner = (value: boolean) => {
    if (value) {
      onClickAction(TYPE_ACTION_BUTTON_ICON.ADD, id);
    } else {
      onClickAction(TYPE_ACTION_BUTTON_ICON.REMOVE, id);
    }
  };

  return (
    <section className={`accordion accordion--${version}`}>
      <div className="accordion__header" onClick={handlerClickHeader}>
        <img
          className="accordion__header__image"
          src={urlImage}
          alt="accordion icon"
        />
        <div className="accordion__header__mediun">
          <h1 className="accordion__header__title">{title}</h1>
        </div>
        <div
          className={`accordion__header__icon-top accordion__header__icon-top--${
            isOpen ? "show" : "hide"
          }`}
        >
          <ArrowTop className="base" />
        </div>
        <div
          className={`accordion__header__icon-down accordion__header__icon-down--${
            !isOpen ? "show" : "hide"
          }`}
        >
          <ArrowDown className="base" />
        </div>
        <div className="accordion__header__spinner">
          <Spinner onChange={handlerClickSpinner} value={isAdded} />
        </div>
      </div>
      <div className="accordion__actions">
        <div className="accordion__actions__section_empy"></div>
        <div
          className={`accordion__actions__item-add accordion__actions__item-add--${
            !isAdded ? "show" : "hide"
          }`}
        >
          <ButtonIcon
            name={TYPE_ACTION_BUTTON_ICON.ADD}
            onClick={handlerClick}
            text="AGREGAR"
            version="secondary"
            symbol={<Plus className="inverse" />}
            color="inverse"
          />
        </div>
        <div
          className={`accordion__actions__item-remove accordion__actions__item-remove--${
            isAdded ? "show" : "hide"
          }`}
        >
          <ButtonIcon
            name={TYPE_ACTION_BUTTON_ICON.REMOVE}
            onClick={handlerClick}
            text="QUITAR"
            version="secondary"
            symbol={<Subtract className="inverse" />}
            color="inverse"
          />
        </div>
        <div className="accordion__actions__section_empy"></div>
      </div>
      <div className="accordion__body">
        <div className="accordion__body__section_empy"></div>
        <div className="accordion__body__content">
          <div
            className={`accordion__body__content__text accordion__body__content__text--${
              isOpen ? "show" : "hide"
            }`}
          >
            {children}
          </div>
          <div
            className={`accordion__body__content__button-icon accordion__body__content__button-icon--${
              isOpen ? "show" : "hide"
            }`}
          >
            <ButtonIcon
              name={TYPE_ACTION_BUTTON_ICON.OPEN}
              onClick={handlerClick}
              text={isOpen ? "Ver menos" : "Ver mas"}
              version="tertiary"
              symbol={
                !isOpen ? (
                  <ArrowDown className="inverse" />
                ) : (
                  <ArrowTop className="inverse" />
                )
              }
              color="inverse"
            />
          </div>
        </div>
        <div className="accordion__body__section_empy"></div>
      </div>
    </section>
  );
};
