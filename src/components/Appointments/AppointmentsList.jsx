import React from 'react';
import styles from './AppointmentsList.module.css';
import AppointmentsSpecialty from './AppointmentsSpecialty';
import { AppointmentsContext } from '../context/AppointmentsContext';

function AppointmentsList() {
  const { specialtyAppointments } = React.useContext(AppointmentsContext);
  return (
    <div className={styles.AppointmentsListContainer}>
      <section className={styles.colSection}>
        <AppointmentsSpecialty
          specialtyAppointments={specialtyAppointments}
          specialty="orthopedist"
          name="Ortopedia"
        />
        <AppointmentsSpecialty
          specialtyAppointments={specialtyAppointments}
          specialty="cardiology"
          name="Cardiologia"
        />
        <AppointmentsSpecialty
          specialtyAppointments={specialtyAppointments}
          specialty="psychiatrist"
          name="Psiquiatria"
        />
      </section>
    </div>
  );
}

export default AppointmentsList;
