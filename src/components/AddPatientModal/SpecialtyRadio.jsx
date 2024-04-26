import React from 'react';
import styles from './SpecialtyRadio.module.css';

function SpecialtyRadio({ children, value, checked, onChange }) {
  const id = React.useId();
  return (
    <div className={styles.radioContainer}>
      <input
        id={id}
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

export default SpecialtyRadio;
