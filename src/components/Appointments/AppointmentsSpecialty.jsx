import styles from './AppointmentsSpecialty.module.css';

function AppointmentsSpecialty({ specialtyAppointments, name, specialty }) {
  const patientsList = specialtyAppointments[specialty];
  return (
    <div className={styles.col}>
      <p className={styles.rowTitle}>Fila para {name}:</p>
      <div className={styles.colTitleColumn}>
        <span>Nome</span>
        <span>Ordem na fila</span>
      </div>
      <ul className={styles.colUl}>
        {patientsList < 1 && (
          <p className={styles.msgNoPatient}>Sem pacientes na fila.</p>
        )}
        {patientsList.map((item, index) => (
          <li key={item.uniqueId}>
            <p>{item.name}</p>
            <p>{index + 1}&deg; lugar</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsSpecialty;
