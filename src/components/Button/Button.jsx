import styles from './Button.module.css';

function Button({ children, onClick, value }) {
  return (
    <button value={value} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
