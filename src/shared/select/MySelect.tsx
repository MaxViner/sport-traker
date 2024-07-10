"use client";
import React, { useState } from "react";
import styles from "./Select.module.scss";

export interface IOption {
  value: string;
  label: string;
}

interface MySelectProps {
  options: IOption[];
  className: string;
  selectedOption?: any;
  setSelectedOption?: any;
  register?: any;
  placeholder: string;
  setValue?: any;
  fieldName?: string;
}

const MySelect: React.FC<MySelectProps> = ({
  options,
  className,
  selectedOption,
  setSelectedOption,
  placeholder,
  register,
  setValue,
  fieldName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: IOption) => {
    setSelectedOption && setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`${className} ${styles.select}`}>
      <div className={styles.selectedValue} onClick={handleToggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => {
                handleSelectOption(option);

                if (register) {
                  setValue && setValue(fieldName, option.value);
                }
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MySelect;
