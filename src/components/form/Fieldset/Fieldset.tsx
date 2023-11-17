import React from "react";
import { FieldsetProps } from "../../../types/models";

export const Fieldset: React.FC<FieldsetProps> = ({children, label, className}) => {
    return (
        <div className={`fieldset fieldset--${className}`}>
            <label className="fieldset__label">{label}</label>
            <div className="fieldset__container-children">
                {children}
            </div>
        </div>
    );
};