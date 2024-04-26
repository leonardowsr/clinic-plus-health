import React from 'react';
import styles from './AppointmentsCall.module.css';
import AppointmentsCallButton from './AppointmentsCallButton';
import { AppointmentsContext } from '../context/AppointmentsContext';
import Button from '../Button/Button';

function AppointmentsCall() {
  const [selectedSpecialty, setSelectedSpecialty] =
    React.useState('orthopedist');
  const { callAppointment } = React.useContext(AppointmentsContext);

  function handleCall() {
    callAppointment(selectedSpecialty);
  }
  function onClick(e) {
    setSelectedSpecialty(e.target.value);
  }
  return (
    <div className={styles.categoryContainer}>
      <p>Chamar próximo paciente na fila de:</p>
      <div className={styles.specialtyList}>
        <AppointmentsCallButton
          specialty={selectedSpecialty}
          onClick={onClick}
          value="orthopedist"
        >
          Ortopedia
        </AppointmentsCallButton>
        <AppointmentsCallButton
          specialty={selectedSpecialty}
          onClick={onClick}
          value="cardiology"
        >
          Cardiologia
        </AppointmentsCallButton>
        <AppointmentsCallButton
          specialty={selectedSpecialty}
          onClick={onClick}
          value="psychiatrist"
        >
          Psiquiatria
        </AppointmentsCallButton>
      </div>
      <div className={styles.hidden}></div>
      <Button onClick={handleCall} specialty={selectedSpecialty}>
        Chamar paciente
      </Button>
    </div>
  );
}

export default AppointmentsCall;
