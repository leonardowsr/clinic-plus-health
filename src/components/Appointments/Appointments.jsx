import styles from './Appointments.module.css';
import AppointmentsMenu from './AppointmentsRegister';
import AppointmentsList from './AppointmentsList';
import AppointmentsCall from './AppointmentsCall';

function AppointmentsCont() {
  return (
    <main className={styles.mainContainer}>
      <AppointmentsMenu />
      <AppointmentsCall />
      <AppointmentsList />
    </main>
  );
}

export default AppointmentsCont;
