import { useRouter } from 'expo-router';
import {View, Text,Pressable} from 'react-native';
import { useQuery } from 'react-query';
import { getAppointmentById } from '../lib/api/appointment';
import { LinearGradient } from 'expo-linear-gradient';
import { useState,useContext } from 'react';
import { AppointmentContext } from '../contexts/AppointmentContext';
const ConfirmAppointment=()=> {
    
  const { appointment } = useContext(AppointmentContext);
  const router=useRouter();
//   const params = useSearchParams();
//   const { appointmentId } = params;
//   console.log("ConfirmAppointment id is ",appointmentId);
//  // const [appointment,setAppointment]=useState([]);
//        //getAppointment with id using usequery
//         const {data, isLoading, error, isError}=useQuery({
//           queryKey:['appointment',appointmentId], 
//           queryFn:async()=>{
//             await getAppointmentById(appointmentId);
//            // setAppointment(data);
           
//           },
//         });
//         console.log("Confirm page data",data);
//         if (isLoading) {
//           return <ActivityIndicator size="large" color="blue" />
//         }
      
//         if (isError) {
//           return <Text>Error: {error.message}</Text>
//         }
      
    return (
      <LinearGradient colors={['#D4D4F2','#D78FD1']} locations={[0.2,0.8]} style={{flex:1}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={{margin:20,padding:50,backgroundColor:"#F5E8E0", borderRadius:15}}>
      <Text>{appointment.patientName} Appointment is confirmed with doctor {appointment.doctorName} on {appointment.appointmentDate} at {appointment.appointmentTime} at Dular Hospital</Text>
      <Pressable onPress={()=> router.push({ pathname: "/" })} style={{backgroundColor:'#6083F9',padding:15,marginVertical:30,borderRadius:20}}><Text style={{color:'#eee',fontWeight:'500',textAlign:'center'}}>OK</Text></Pressable>
      </View>
    </View>
    </LinearGradient>
      );  
}

export default ConfirmAppointment;