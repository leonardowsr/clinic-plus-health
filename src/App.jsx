import Header from './components/Header/Header';
import Appointments from './components/Appointments/Appointments';
import './App.css';
import AppointmentsContextProvider from './components/context/AppointmentsContext';

function App() {
  return (
    <AppointmentsContextProvider>
      <div className="appBody">
        <Header />
        <Appointments />
      </div>
    </AppointmentsContextProvider>
  );
}

export default App;
