import React from 'react';
import styles from './AddPatientModal.module.css';
import SpecialtyRadio from './SpecialtyRadio';
import { AppointmentsContext } from '../context/AppointmentsContext';

function AddPatientModal({ handleModal }) {
  const [name, setName] = React.useState('');
  const [specialty, setSpecialty] = React.useState('orthopedist');
  const { newAppointment } = React.useContext(AppointmentsContext);
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    newAppointment({ name, specialty });
    setName('');
  }

  const handleSpecialty = (e) => {
    setSpecialty(e.target.value);
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.modalBg}>
      <div className={styles.modalContainer}>
        <button className={styles.closeModalButton} onClick={handleModal}>
          X
        </button>

        <form onSubmit={handleSubmit} className={styles.formPatient}>
          <p>Dados do paciente:</p>
          <div className={styles.inputContainer}>
            <label>nome:</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              ref={inputRef}
              required
            />
          </div>

          <fieldset>
            <legend>especialidade medica:</legend>
            <div onChange={(e) => setSpecialty(e.target.value)}>
              <SpecialtyRadio
                value="orthopedist"
                onChange={handleSpecialty}
                checked={specialty === 'orthopedist'}
              >
                Ortopedia
              </SpecialtyRadio>
              <SpecialtyRadio
                value="cardiology"
                onChange={handleSpecialty}
                checked={specialty === 'cardiology'}
              >
                Cardiologia
              </SpecialtyRadio>
              <SpecialtyRadio
                value="psychiatrist"
                onChange={handleSpecialty}
                checked={specialty === 'psychiatrist'}
              >
                Psiquiatria
              </SpecialtyRadio>
            </div>
          </fieldset>
          <button className={styles.addPatientButton}>
            finalizar agendamento
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPatientModal;
