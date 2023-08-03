import doctorsList from '../../data/doctorslist.json';

function fetchDoctors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating fetching data from a JSON file
        const doctorsData = doctorsList.doctors;
        if (doctorsData) {
            resolve(doctorsData);
          } else {
            reject('Failed to fetch doctors data.');
          }
      }, 1000); // Simulating a 1-second delay
    });
  }

  export const getDoctorsList=async()=>{
       const result=await fetchDoctors();
      console.log(result);
       return result ;
  }
  export const getDoctorsListByCategory=async(specialty)=>{
    const doctorsListData=await fetchDoctors();
    const result=doctorsListData.filter(doctor=>doctor.specialty.toLowerCase() === specialty);
     console.log(result);
    return result;
  }
    export const getDoctorsById=async(id)=>{
        const doctorsListData=await fetchDoctors();
        const result=doctorsListData.filter(doctor=>doctor.id === id);
         console.log(result);
        return result;
}