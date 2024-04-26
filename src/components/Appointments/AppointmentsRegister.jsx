import React from 'react';
import styles from './AppointmentsRegister.module.css';
import AddPatientModal from '../AddPatientModal/AddPatientModal';
import { AppointmentsContext } from '../context/AppointmentsContext';
import Button from '../Button/Button';

function AppointmentsRegister() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { inConsultation } = React.useContext(AppointmentsContext);
  const { orthopedist, cardiology, psychiatrist } = inConsultation;
  function handleModal() {
    if (modalVisible) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }
  return (
    <div className={styles.AppointmentMenu}>
      <p className={styles.patientsCall}>
        Pacientes em atendimento:
        <span> Ortopedia: </span>
        {orthopedist.name ? orthopedist.name : 'nenhum'}
        {' | '}
        <span>Cardiologia: </span>
        {cardiology.name ? cardiology.name : 'nenhum'}
        {' | '}
        <span>Psiquiatria: </span>
        {psychiatrist.name ? psychiatrist.name : 'nenhum'}
      </p>
      <div className={styles.buttonContainer}>
        <Button onClick={handleModal}>Agendar consulta</Button>
      
      </div>
      {modalVisible && <AddPatientModal handleModal={handleModal} />}
    </div>
  );
}

export default AppointmentsRegister;
