import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import { StyleSheet } from 'react-native';
import {Link} from 'expo-router';
import doctorImg from '../assets/images/doctor.png';
import doctorImg1 from '../assets/images/doctor1.png';
import doctorImg2 from '../assets/images/doctor2.png';
import doctorImg3 from '../assets/images/doctor3.png';

function DoctorListItem({doctor,id}) {
    const linkurl=`/doctor/${id}`;
    return (
        
        <Link href={linkurl} asChild>
        <Pressable style={styles.container}>
           <View style={{flexDirection:'row'}}>
                
                <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',marginVertical:10}}>
                <Text style={{fontSize:24,fontWeight:500}}>{doctor.name}</Text>
                <Text style={{fontSize:20,fontWeight:500,color:'gray'}} >{doctor.specialty}</Text>
                </View>
                <Image source={{ uri:doctor.image_url}} resizeMode='contain' style={{ width:250, height:300,marginTop:-40,  marginLeft:-40}}/>
            </View>
        </Pressable>
        </Link>
    );
}
   const styles=StyleSheet.create({
    container:{
        padding:15,
        flexDirection:'row',
        backgroundColor:'#EBE4F2',
        marginHorizontal:10,
        marginTop:40,
        borderBottomColor:'gray', 
        borderRadius:15,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    }
    
   })
export default DoctorListItem;