
import React from 'react';
import { ButtonProps } from '../../../types/models';
import './index.scss';

export const Button: React.FC<ButtonProps> = ({ onClick, text, version='primary', isActive=true }) => {
  return (
    <button disabled={!isActive} className={`button button--${version} button--${!isActive?'disabled': 'active'}`} onClick={onClick}>{text}</button>
  );
}

export default Button;
