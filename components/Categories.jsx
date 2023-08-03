import {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import {Link} from 'expo-router';
import AvailableCategories from '../data/availableCategories.json';

function Categories() {
  
    const doctorSpecialties = AvailableCategories;

      const CustomIcon=({item})=>{
        console.log("link",item.name);
        return (
          <Link href={`/categories/${item.name}`} asChild>
            
          <View  style={styles.container}>
            <View style={styles.icon}><MaterialCommunityIcons name={item.icon.name} size={42} color="#eeeeee" backgroundColor={item.icon.backgroundColor} /></View>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          
            
           </Link>
        )
      }
    return (
        
         
        
        <View style={{flex:1,flexDirection:'column', justifyContent:'center',flexWrap:'wrap'}}>
        
        <FlatList  numColumns={3} showsHorizontalScrollIndicator={false} data={doctorSpecialties} renderItem={({item})=><CustomIcon item={item}/>}/>
       
        
       </View>
      
    );
}

const styles=StyleSheet.create({
  container:{
    
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    textAlign:'center'
  },
  icon:{
    backgroundColor:"#627AE4",
    padding:20,
    borderRadius:10,
    margin:40, 
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title:{
    fontSize:24, 
    fontWeight:'500',
    marginVertical:20
  },
  text:{
    color:"#000000",
    fontWeight:'500',
    fontSize:18
  }
})

export default Categories;