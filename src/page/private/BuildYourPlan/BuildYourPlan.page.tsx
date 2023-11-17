import {
  Accordion,
  Button,
  ButtonIcon,
  SelectQuantity,
} from "../../../components/form";
import { ArrowLeft, Ellipsi } from "../../../components/icons";
import client from "../../../assets/images/client.svg";
import "./index.scss";
import { ContextList, Page } from "../../../components/container";
import { useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import {
  listSkuData,
  findSkuByProductId,
  getTitles,
  listProductData,
  parseProductList,
  reducer,
  initialState,
} from "./buildYourPlan.helper";
import {
  MAX_QUANTITY,
  MIN_MAX_SUM_ASSURES_REMOVE_SKU_ID,
  MIN_QUANTITY,
  TYPE_ACTION_BUTTON_ICON,
  VALUE_INITIAL_SUM_ASSURED,
  VALUE_QUANTITY_ADD,
} from "../../../types/constants";
import { formatCurrency, generateUniqueKey } from "../../../helpers";
import { ListItem } from "../../../components/ListItem";
import useUser from "../../../hooks/useUser";
import { SkuList } from "../../../types/models";
import { useScroll } from "../../../hooks";

export const BuildYourPlan = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const { user } = useUser();
  const isScrolling = useScroll(window);
  const onClickRedirectBack = () => {
    navigate("/login");
  };
  const getCostVariant = (value: number) => {
    dispatch({
      type: "SET_COST",
      payload: { ...state.cost, sumAssured: value },
    });
    verficationSumAssured(value);
  };

  const verficationSumAssured = (value: number) => {
    const isInSkuIdsList = state.skuIdsSelected.includes(
      state.skuIdsVariant.value
    );
    const labelOld = state.skuIdsVariant.label;
    let label = "";
    if (MIN_MAX_SUM_ASSURES_REMOVE_SKU_ID < value) {
      label = "mayor";
      dispatchLabelVariant(label);
      if (labelOld !== label) {
        getdispatchProductCurrent([
          ...state.productCurrent.filter(
            (item) => item.skuId !== state.skuIdsVariant.value
          ),
        ])
        isInSkuIdsList &&
          dispatch({
            type: "SET_COST",
            payload: {
              ...state.cost,
              totalAmount: state.cost.totalAmount - state.skuIdsVariant.price,
            },
          });
      }
    } else if (value < MIN_MAX_SUM_ASSURES_REMOVE_SKU_ID) {
      label = "minor";
      dispatchLabelVariant(label);
      if (labelOld !== label) {
        getdispatchProductCurrent([
          ...listSkuData.filter(
            (item) => item.productId === state.productIdCurrent
          ),
        ]);
        isInSkuIdsList &&
          dispatch({
            type: "SET_COST",
            payload: {
              ...state.cost,
              totalAmount: state.cost.totalAmount + state.skuIdsVariant.price,
            },
          });
      }
    }
  };

  const dispatchLabelVariant = (label: string) => {
    dispatch({
      type: "SET_SKU_IDS_VARIANT",
      payload: { ...state.skuIdsVariant, label },
    });
  };

  const getdispatchProductCurrent = (skuList: SkuList[]) => {
    dispatch({
      type: "SET_PRODUCT_CURRENT",
      payload: skuList,
    });
  };

  const handlerClickSku = (
    name: TYPE_ACTION_BUTTON_ICON,
    id: number | string
  ) => {
    const idFormat = Number(id);
    if (TYPE_ACTION_BUTTON_ICON.ADD === name) {
      dispatch({
        type: "SET_SKU_IDS_SELECTED",
        payload: [...state.skuIdsSelected, idFormat],
      });
      getAmount(idFormat, name);
    } else if (
      TYPE_ACTION_BUTTON_ICON.REMOVE === name &&
      state.skuIdsSelected.includes(idFormat)
    ) {
      dispatch({
        type: "SET_SKU_IDS_SELECTED",
        payload: [...state.skuIdsSelected.filter((item) => item !== idFormat)],
      });
      getAmount(idFormat, name);
    }
  };

  const getAmount = (id: number, name: TYPE_ACTION_BUTTON_ICON) => {
    const sku = findSkuByProductId(id, listSkuData);
    const price = sku?.price ?? 0;
    let amount = 0;
    if (name === TYPE_ACTION_BUTTON_ICON.ADD) {
      amount = price + state.cost.totalAmount;
    } else if (name === TYPE_ACTION_BUTTON_ICON.REMOVE) {
      amount = state.cost.totalAmount - price;
    }
    dispatch({
      type: "SET_COST",
      payload: { ...state.cost, totalAmount: amount },
    });
  };

  const clickProductSelected = (productId: number | string) => {
    const productIdFormat = Number(productId);
    dispatch({ type: "SET_PRODUCT_ID_CURRENT", payload: productIdFormat });
  };
  const getDataProductsFilter = (productId: number) => {
    const data = listSkuData.filter((item) => item.productId === productId);
    dispatch({ type: "SET_PRODUCT_CURRENT", payload: data });
  };
  if (!user.id  || user.id === 0) {
    navigate("/login");
  }
  useEffect(() => {
    getDataProductsFilter(state.productIdCurrent);
  }, [state.productIdCurrent]);
  return (
    <Page isHeader={true}>
      <div className="build-your-plan">
        <div className="build-your-plan__progress">
          <div className="build-your-plan__progress__container">
            <ButtonIcon
              onClick={onClickRedirectBack}
              text="Datos"
              version="secondary"
              symbol={1}
              color="inverse"
            />
            <div className="build-your-plan__progress__container__path">
              <Ellipsi />
            </div>
            <ButtonIcon
              onClick={() => {}}
              text="Arma tu plan"
              version="primary"
              isActive={false}
              symbol={2}
              color="inverse"
            />
          </div>
          <div className="build-your-plan__progress__mobile">
            <ButtonIcon
              onClick={onClickRedirectBack}
              text="Paso 2 de 2"
              version="secondary"
              symbol={<ArrowLeft className="inverse" />}
              color="inverse"
            />
            <div className="build-your-plan__progress__mobile__bar"></div>
          </div>
        </div>
        <div className="build-your-plan__content">
          <div className="build-your-plan__content__back">
            <ButtonIcon
              onClick={onClickRedirectBack}
              text="Regresar"
              version="secondary"
              symbol={<ArrowLeft className="base" />}
              color="base"
            />
          </div>
          <div className="build-your-plan__content__text">
            <h1 className="build-your-plan__content__text__title">
              ¡Hola,
              <span className="build-your-plan__content__text__title--secondary">
                {" "}
                {user.name}!
              </span>
            </h1>
            <p className="build-your-plan__content__text__pharagraph">
              Conoce las coberturas para tu plan
            </p>
          </div>
          <div className="build-your-plan__content__card">
            <div className="build-your-plan__content__card__container">
              <div className="build-your-plan__content__card__body">
                <p className="build-your-plan__content__card__body__plate">
                  Placa: {user.plate}
                </p>
                <h2 className="build-your-plan__content__card__body__model">
                  Wolkswagen 2019 Golf
                </h2>
              </div>
              <div className="build-your-plan__content__card__image">
                <img src={client} alt="client" />
              </div>
            </div>
          </div>
          <section className="build-your-plan__content__sum-assured">
            <div className="build-your-plan__content__sum-assured__container">
              <div className="build-your-plan__content__sum-assured__description">
                <h2 className="build-your-plan__content__sum-assured__title">
                  Indica la suma asegurada
                </h2>
                <p className="build-your-plan__content__sum-assured__pharagraph">
                  <span>MIN $12,500 </span> | <span> MAX $16,500</span>
                </p>
              </div>
              <SelectQuantity
                value={VALUE_INITIAL_SUM_ASSURED}
                onClick={getCostVariant}
                maxQuantity={MAX_QUANTITY}
                minQuantity={MIN_QUANTITY}
                variantQuantity={VALUE_QUANTITY_ADD}
              />
            </div>
          </section>
          <section className="build-your-plan__content__products">
            <div className="build-your-plan__content__products__container">
              <h1 className="build-your-plan__content__products__title">
                Agrega o quita coberturas
              </h1>
              <ContextList
                options={parseProductList(listProductData)}
                value={state.productIdCurrent}
                onclick={clickProductSelected}
              />
              <div className="build-your-plan__content__products__skus">
                {state.productCurrent.map((sku, index) => (
                  <div
                    key={generateUniqueKey()}
                    className="build-your-plan__content__products__skus__item"
                  >
                    <Accordion
                      title={sku.title}
                      isOpenDefault={index === 0}
                      onClickAction={handlerClickSku}
                      isAdded={state.skuIdsSelected.includes(sku.skuId)}
                      id={sku.skuId}
                      key={generateUniqueKey()}
                      urlImage={sku.urlImage}
                    >
                      {sku.description}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="build-your-plan__summary">
          <div className={`build-your-plan__summary__container build-your-plan__summary__container--${isScrolling && 'active'}`}>
            <div className="build-your-plan__summary__importPay">
              <h3 className="build-your-plan__summary__importPay__title">
                Monto
              </h3>
              <h1 className="build-your-plan__summary__importPay__amount">
                {formatCurrency(state.cost.totalAmount)}
              </h1>
              <h2 className="build-your-plan__summary__importPay__frequency">
                mensuales
              </h2>
            </div>
            <div className="build-your-plan__summary__selected-list-sku">
              <ListItem
                options={getTitles(listSkuData, state.skuIdsSelected)}
              ></ListItem>
            </div>
            <div className="build-your-plan__summary__button-pay">
              <Button text={"LO QUIERO"} onClick={() => navigate("/gracias")} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
