// AppointmentContext.js

import React, { createContext, useState } from 'react';

const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const [appointment, setAppointment] = useState(null);

  const saveAppointment = (appointmentData) => {
    setAppointment(appointmentData);
  };

  return (
    <AppointmentContext.Provider value={{ appointment, saveAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export { AppointmentContext, AppointmentProvider };
