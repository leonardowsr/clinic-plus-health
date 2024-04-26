import React from 'react';

export const AppointmentsContext = React.createContext();

function AppointmentsContextProvider({ children }) {
  const [specialtyAppointments, setSpecialtyAppointments] = React.useState({
    orthopedist: [],
    cardiology: [],
    psychiatrist: [],
  });
  const [inConsultation, setInConsultation] = React.useState({
    orthopedist: '',
    cardiology: '',
    psychiatrist: '',
  });

  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem('appointments'));
    if (local) {
      setSpecialtyAppointments(local);
    }
  }, []);

  function updateLocalStorage(ojb, specialty, updatedList) {
    const objStringfied = JSON.stringify({
      ...ojb,
      [specialty]: updatedList,
    });
    window.localStorage.setItem('appointments', objStringfied);
  }

  function newAppointment({ name, specialty }) {
    const newPacient = {
      name: name,
      specialty: specialty,
      uniqueId: Math.random(),
    };
    const updatedList = [...specialtyAppointments[specialty], newPacient];
    updateLocalStorage(specialtyAppointments, specialty, updatedList);
    setSpecialtyAppointments({
      ...specialtyAppointments,
      [specialty]: updatedList,
    });
  }

  function callAppointment(specialty) {
    if (specialty === '') {
      console.log('Selecione uma especialidade medica.');
      return;
    }

    if (specialtyAppointments[specialty].length > 0) {
      const updateQueue = specialtyAppointments[specialty];
      const inConsultationName = updateQueue.shift();
      setInConsultation({ ...inConsultation, [specialty]: inConsultationName });
      updateLocalStorage(specialtyAppointments, specialty, updateQueue);
      setSpecialtyAppointments({
        ...specialtyAppointments,
        [specialty]: updateQueue,
      });
    }
  }

  return (
    <AppointmentsContext.Provider
      value={{
        specialtyAppointments,
        newAppointment,
        callAppointment,
        inConsultation,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsContextProvider;