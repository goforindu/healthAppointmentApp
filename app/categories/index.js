import React from 'react';
import Categories from '../../components/Categories';
import { LinearGradient } from 'expo-linear-gradient';

function AllCategories(props) {
    return (
        <LinearGradient colors={['#D4D4F2','#D78FD1']} locations={[0.2,0.8]} style={{flex:1}}>
       <Categories/>
       </LinearGradient>
    );
}

export default AllCategories;