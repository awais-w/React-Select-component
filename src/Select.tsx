import { useState } from 'react';
import styles from './select.module.css';

type SelectOption = {
  label: string;
  value: string | number;
};
type SelectProps = {
  onChange: (value?: SelectOption) => void;
  options: SelectOption[];
  value?: SelectOption;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const clearOptions = () => {
    onChange(undefined);
  };
  const isOptionSelected = (option: SelectOption) => option === value;
  return (
    <div
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={e => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles['clear-btn']}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map(option => {
          return (
            <li
              key={option.label}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ''
              }`}
              onClick={e => {
                e.stopPropagation();
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
