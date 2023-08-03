import React, { useEffect, useState } from 'react';
import DoctorListItem from '../../components/doctorListItem';
import doctorList from '../../data/doctorslist.json';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, FlatList, Text,View } from 'react-native';
import { useSearchParams } from 'expo-router';
import { getDoctorsListByCategory } from '../../lib/api/doctors';
import { useQuery } from 'react-query';
function DoctorsListByCategory() {
    const[filteredDoctor,setFilteredDoctor]=useState([]);
    const {type}=useSearchParams();
    console.log(type);

    const {data, isLoading, error, isError}=useQuery({
        queryKey:['doctors',type], 
        queryFn:async()=>{
          const result=await getDoctorsListByCategory(type);
            setFilteredDoctor(result);
          return result;
        },
      });
    
      if (isLoading) {
        return <ActivityIndicator size="large" color="blue" />
      }
    
      if (isError) {
        return <Text>Error: {error.message}</Text>
      }
    
  
    return (
      <LinearGradient colors={['#D4D4F2','#D78FD1']} locations={[0.2,0.8]} style={{flex:1}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {filteredDoctor.length==0 ?<Text>"No doctors Found"</Text>:<FlatList 
        style={{marginBottom:50}}
        data={filteredDoctor} 
        renderItem={({item,index})=><DoctorListItem doctor={item} id={item.id}
       
        />}
        showsVerticalScrollIndicator={false}
        />}
        {filteredDoctor=="undefined" && <Text></Text>}
        </View>
        </LinearGradient>
    );
}

export default DoctorsListByCategory;