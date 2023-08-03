import React, { useState, useContext, useEffect } from 'react';
import { AppointmentContext } from '../../contexts/AppointmentContext';
import {useSearchParams,useRouter} from 'expo-router';
import doctorslist from '../../data/doctorslist.json';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {View, Alert , Text, Image, Pressable,StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import doctorImg from '../../assets/images/doctor.png';
import MonthYearDropDown from '../../components/MonthYearDropDown';
import TimeSlots from '../../components/TimeSlots';
import DateList from '../../components/DateList';
import { useMutation, useQuery } from 'react-query';
import { getDoctorsById } from '../../lib/api/doctors';
import { Link } from 'expo-router';
import { createDoctorsAppointment } from '../../lib/api/appointment';
import ConfirmationPopup from '../../components/confirmation';
function DoctorDetails() {
//getting save appointment context
const { saveAppointment } = useContext(AppointmentContext);
const{id}=useSearchParams();
const[doctor,setDoctor]=useState([]);
const [appointmentDate,setAppointmentDate]=useState('');
const[appointmentTime, setAppointmentTime]=useState('');
const[appointmentDay,setAppointmentDay]=useState('');

const mutation=useMutation(createDoctorsAppointment);
const router = useRouter();
  
    console.log(`id is ${id}`);
   // const doctor=doctorslist.doctors[index];
   const[appointment,setAppointment]=useState('');
    const profileText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.";
    const {data, isLoading, error, isError}=useQuery({
      queryKey:['doctor',id], 
      queryFn:async()=>{
        const result=await getDoctorsById(id);
        
          setDoctor(result);
        return result;
      },
    });
    if (isLoading) {
      return <ActivityIndicator size="large" color="blue" />
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
     console.log("data",data);
     
     const handleSelectedDate=(selectedDate,selectedDay)=>{
      setAppointmentDate(selectedDate);
      setAppointmentDay(selectedDay);
    } 
    const handleSelectedTime=(time)=>{
      setAppointmentTime(time);
    }
     const createAppointment=()=>{
      console.log("create appointmnet click");
      
     
      const appointmentId='123'
      const patientName="Ritika Chaturvedi";
      const doctorName=doctor[0].name;
       const result={appointmentId:appointmentId,patientName:patientName,doctorName:doctorName,appointmentDate:appointmentDate,appointmentTime:appointmentTime};
      mutation.mutate(result);
      setAppointment(result);
      saveAppointment(result);
      router.push({ pathname: "/confirm" });
       
    }

     const confirmAppointment=()=>{
      console.log("confirm clicked");
      createAppointment();
     
     }
     
    return (
      <ScrollView>
        <LinearGradient colors={['#E9E1F3','#E7EEFE']} locations={[0.2,0.8]} style={{flex:1,padding:10}}>
       <View>
         {doctor.length==0?<Text></Text>: <Pressable>
           <View style={{flexDirection:'row'}}>
           <LinearGradient  style={styles.container} colors={['#9490DE','#D095C5']} locations={[0.2,0.8]}>
            <View  >
           
            <Image source={{ uri:doctor[0].image_url}} resizeMode='contain' style={{ width:270, height:300, marginTop:-70,marginBottom:'auto'
       }} />
      
            </View>
            </LinearGradient>
            
          
           <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',marginVertical:60}}>
                <View>
                <Text style={{fontSize:32,fontWeight:700, flexShrink: 1}}>{doctor[0].name}</Text>
                <Text style={{fontSize:20,fontWeight:500,color:'gray'}} >{doctor[0].specialty}</Text>
                </View>
               
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <FontAwesome name="phone" 
          size={24}
           color="#eee"
          style={{backgroundColor:'#6083F9',padding:10,borderRadius:50,shadowOffset: {width: -2, height: 4},  
        shadowColor: '#6083F9',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  }}/>
          <MaterialCommunityIcons name="video" size={24} color="#eee" style={{backgroundColor:'#6083F9',padding:10,borderRadius:50,shadowOffset: {width: -2, height: 4},  
        shadowColor: '#6083F9',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  }} />
          <FontAwesome name="envelope" size={24} color="#eee" style={{backgroundColor:'#6083F9',padding:10,borderRadius:50,shadowOffset: {width: -2, height: 4},  
        shadowColor: '#6083F9',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  }} />
          </View>
            </View>     
               
            </View>
            <Text style={{fontSize:18,fontWeight:'400',flexWrap:'wrap'}}>{profileText}</Text>
        </Pressable>  }
        
       </View>
         <MonthYearDropDown/>
          <DateList handleSelectedDate={handleSelectedDate}/>
         <TimeSlots handleSelectedTime={handleSelectedTime}/>
         <Pressable onPress={()=>confirmAppointment()} style={{backgroundColor:'#6083F9',padding:15,marginVertical:30,borderRadius:20}}><Text style={{color:'#eee',fontWeight:'500',textAlign:'center'}}>Book Appointment</Text></Pressable>
         {mutation.isError && <Text>Error: {mutation.error.message}</Text>}
         {mutation.isSuccess && <View><Text></Text></View>}
        </LinearGradient>
        </ScrollView>

    );
}
const styles=StyleSheet.create({
    container:{
        paddingTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#EBE4F2',
        marginHorizontal:10,
        marginVertical:40,
        borderBottomColor:'gray', 
        borderRadius:15,
        
    }
    
   })
export default DoctorDetails;