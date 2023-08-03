import {useState, useEffect} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput,TouchableOpacity,Pressable, ActivityIndicator } from "react-native";
import SearchBar from "../components/searchBar";
import doctorslist from '../data/doctorslist.json';
import DoctorListItem from "../components/doctorListItem";
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import {Link} from 'expo-router';
import { useQuery } from 'react-query';
import { getDoctorsList } from '../lib/api/doctors';
export default function Page({navigation}) {
  
  const[searchTerm,setSearchTerm]=useState('');
  const[filteredDoctor,setFilteredDoctor]=useState([]);
  const {data, isLoading, error, isError}=useQuery({
    queryKey:['doctors'], 
    queryFn:async()=>{
      const result=await getDoctorsList();
      setFilteredDoctor(result);
      return result;
    },
  });
   
  if (isLoading) {
    return <ActivityIndicator size="large" color="blue" />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  const showFilteredData=()=>{
    setFilteredDoctor(data.filter((doctor)=>

    doctor.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    ||
    doctor.specialty.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  ))
  }

 
  return (
    <LinearGradient colors={['#D4D4F2','#D78FD1']} locations={[0.2,0.8]} style={{flex:1}}>
    <View style={styles.container}>
      
      <View style={styles.main}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Pressable onPress={() => navigation.openDrawer()}><FontAwesome name="bars" size={24} color="black" /></Pressable>
        <FontAwesome name="user-circle" size={24} color="black" />
        </View>
        <Text style={{fontSize:32, fontWeight:'500',marginVertical:20}}>Find Your Desired Specialist</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
      <TextInput
        style={{ flex: 1,outlineStyle: "none", height: 50, borderColor: '#ffffff',backgroundColor:'#ffffff', borderWidth: 2 , padding: 10 , borderRadius:20}}
        placeholder="   Search for doctor"
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      />
      <TouchableOpacity  style={{ marginLeft: -50 }} onPress={showFilteredData}>
        <Icon name="search" size={20} color="white" style={{backgroundColor:"#627AE4",paddingHorizontal:15,paddingVertical:10,borderRadius:15}} />
      </TouchableOpacity>
    </View>
         <View>
          <Text style={{fontSize:24, fontWeight:'500',marginVertical:20}}>Category</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:30}}>
          <Link href='/categories/cardiology' asChild>
          <FontAwesome name="heartbeat" 
          size={32}
           color="#F94D72"
          style={{backgroundColor:'#FEEFEF',padding:20,borderRadius:10,shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  }}/>
        </Link>
        <Link href='/categories/dentist' asChild>
          <MaterialCommunityIcons name="tooth" size={32} color="#6083F9" style={{backgroundColor:'#E5F1FB',padding:20,borderRadius:10}} />
          </Link>
          <Link href='/categories/neurology' asChild>
          <FontAwesome5 name="brain" size={32} color="#F58458" style={{backgroundColor:'#F5E8E0',padding:20,borderRadius:10,shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  }} />
        </Link>
         <Link href='/categories' asChild>
          <MaterialCommunityIcons name="view-grid" size={32} color="#D78FD1"  style={{backgroundColor:'#FFF1FA',padding:20,borderRadius:10,shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  }}/>
        </Link>
          </View>
          
         </View>
         <FlatList horizontal
         style={{marginBottom:50}}
         data={filteredDoctor} 
         renderItem={({item,index})=><DoctorListItem doctor={item} id={item.id} />}
         showsHorizontalScrollIndicator={false}
         />
       
      </View>
      </View>
      </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop:40
    //backgroundColor: '#E0E6F9', /* For browsers that do not support gradients */
   // backgroundImage: 'linear-gradient('to bottom right', '#E0E6F9', '#D78FD1')'
  },
  main: {
    flex: 1,
   width:'100%',

  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
