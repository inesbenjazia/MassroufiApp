import React, { useEffect,useState } from 'react';
import { View, Text,SafeAreaView, TextInput, TouchableOpacity,ImageBackground,ScrollView,Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  Pie  from 'react-native-pie';

export default function CustomPieChart(){
    const navigation = useNavigation();
  

    
     
    return(

      <View style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          width: 350,
          justifyContent: 'space-between',
        }}
      >
        <Pie
          radius={80}
          innerRadius={50}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          dividerSize= {4}
          strokeCap={'round'}
        />
        </View>
        </View>
      
    
    )
}

const styles = StyleSheet.create({
    

})