function AppointmentsCallButton({ onClick, children, specialty, value }) {
  return (
    <button
      value={value}
      style={{
        '--color-btn': `${
          value === specialty ? 'rgb(255, 110, 134)' : 'white'
        }`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AppointmentsCallButton;
