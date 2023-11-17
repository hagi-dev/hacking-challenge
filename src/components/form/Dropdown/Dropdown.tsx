import React, { useState } from 'react';
import { DropdownProps } from '../../../types/models';
import { ArrowDown } from '../../icons';
import './index.scss';
import { generateUniqueKey, getLabel, isEqualValue } from '../../../helpers';
import {useOutsideClick} from '../../../hooks';

export const Dropdown: React.FC<DropdownProps> = ({ name, options, onSelect, version ='primary', defaultValue }) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick(false);
  const [labelSelected, setLabelSelected] = useState<string>(getLabel(defaultValue??'', options));

  const handleSelect = (value: string | number) => {
    setLabelSelected(getLabel(value, options));
    setIsOpen(false);
    onSelect(value, name);
  };

  const isActiveItem = (label: string): string => {
    const equalValue = isEqualValue( label, labelSelected);
    return equalValue ? 'active' : '';
  };

  const handlerLabelSelected = () => {
    setIsOpen(!isOpen)
  };

  return (
    <section ref={ref} className={`dropdown`}>
      <div className={`dropdown__selected dropdown__selected--${version}`}  onClick={handlerLabelSelected}>
        { labelSelected ?? 'Selecciona...'}
        <ArrowDown className="top" color="#FF1C44" />
        <div className={`dropdown__options dropdown__options--${isOpen ? 'show': 'hide'}`}>
            {options.map(option => (
              <div 
                className={`dropdown__option-item dropdown__option-item--${isActiveItem(option.label)}`} 
                key={generateUniqueKey()} onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
