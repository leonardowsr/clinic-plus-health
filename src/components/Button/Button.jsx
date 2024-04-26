import styles from './Button.module.css';

function Button({ children, onClick, specialty, value }) {
  if (!value) specialty = 'true';
  return (
    <button
      value={value}
      className={styles.button}
      onClick={onClick}
      disabled={!specialty ? true : ''}
      style={{
        '--color-btn': `${
          value === specialty ? 'rgb(255, 110, 134)' : 'white'
        }`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
