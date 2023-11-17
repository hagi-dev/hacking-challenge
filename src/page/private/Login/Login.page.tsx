import React, { useCallback, useEffect } from "react";

import {
  Button,
  DropdownInput,
  Input,
  InputCheckbox,
} from "../../../components/form";
import { optionsTypeDocuments } from "./login.helper";
import "./index.scss";
import { BannerLogin } from "./BannerLogin";
import { Page } from "../../../components/container";
import { getUserById } from "../../../services/user.service";
import useUser from "../../../hooks/useUser";
import { catchError, map } from "rxjs";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../../../helpers/validation";
import { useCan } from "../../../hooks";

export const LoginPage = () => {
  let isValidform = false;
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [isAccept, setIsAccept] = React.useState<boolean>(false);
  const [error, setError] = React.useState({});
  const idDefault = "2";
  const filedsRequired = 3;
  const canSave = useCan(error, filedsRequired);
  
  const onchange = (value: string | number, name: string) => {
    setUser((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
    canLogin();
  };
  const validationForm = (value: boolean, name: string) => {
    setError((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };
  const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser((prevData) => {
      const newData = { ...prevData };
      return newData;
    });
    navigate("/arma-tu-plan");
  };
  const handleClickAccept = (value: boolean) => {
    setIsAccept(value);
    canLogin();
  };

  const canLogin = () => {
    isValidform = isAccept && canSave;
    return isValidform;
  };

  const getUserData = useCallback(() => {
    getUserById(idDefault)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw new Error("error al traer la data");
        }),
        map((response) => response.data)
      )
      .subscribe((response) => {
        setUser((prev) => {
          const newData = {
            ...prev,
            ...response,
            phone: "",
            plate: "",
            document: "",
            id: Number(idDefault),
          };
          return newData;
        });
      });
  }, [idDefault, setUser]);
  useEffect(() => {
    getUserData();
  }, [getUserData]);
  return (
    <Page isHeader={false}>
      <div className="login">
        <BannerLogin />
        <form className="login__form">
          <h1 className="form__title">Déjanos tus datos</h1>
          <DropdownInput
            names={{ label: "typeDocument", value: "document" }}
            className="dropdown-input-default"
            selected={{ label: user.typeDocument, value: user.document }}
            placeholder="Nro. de documento"
            options={optionsTypeDocuments}
            onChange={onchange}
            required={true}
            validation={validateInput}
            error={validationForm}
          />
          <Input
            name="phone"
            type="phone"
            placeholder="Celular"
            value={user.phone}
            onChange={onchange}
            validation={validateInput}
            required={true}
            error={validationForm}
          />
          <Input
            name="plate"
            type="plate"
            placeholder="Placa"
            value={user.plate}
            onChange={onchange}
            validation={validateInput}
            error={validationForm}
            required={true}
          />
          <InputCheckbox onChange={handleClickAccept}>
            <span>
              <span>Acepto la </span>
              <a className="link--secondary" href="google.com" target="_blank">
                Política de Protecciòn de Datos Personales
              </a>
              <span> y los </span>
              <a className="link--secondary" href="google.com" target="_blank">
                Términos y Condiciones.
              </a>
            </span>
          </InputCheckbox>
          <Button
            isActive={isValidform || canLogin()}
            onClick={handleClickSubmit}
            text={"COTÍZALO"}
          />
        </form>
      </div>
    </Page>
  );
};
