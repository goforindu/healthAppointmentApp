
const Appointments=[];

export const createDoctorsAppointment=async(appointmentData)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Appointments.push(appointmentData);
            console.log("Inside create appointments",Appointments);
          if (Appointments) {
              resolve("Appointment created successfully");
            } else {
              reject('Failed to create appointment ');
            }
        }, 1000);
      });
    
}

export const getAppointmentById=async(appointmentId)=>{
  return new Promise((resolve, reject) => {
      setTimeout(() => {
         // Appointments.push(appointmentData);
          console.log("Inside getAppointmentById",Appointments);
        if (Appointments) {
            resolve(Appointments);
          } else {
            reject('Failed to create appointment ');
          }
      }, 1000);
    });
  
}