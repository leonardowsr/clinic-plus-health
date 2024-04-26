function AppointmentsCallButton({ onClick, children, specialty, value }) {
  return (
    <button
      value={value}
      style={{
        '--color-btn': `${value === specialty ? 'pink' : 'white'}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AppointmentsCallButton;
