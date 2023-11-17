import React from "react";

export interface CheckboxProps {
    children: React.ReactNode;
    onChange: (value: boolean) => void;
    checked?: boolean;
};