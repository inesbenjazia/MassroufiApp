import React, { useState } from 'react';
import { View, Text,SafeAreaView, TextInput, TouchableOpacity,ImageBackground,ScrollView,Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Menu(){
    const navigation = useNavigation();

    return(

        <SafeAreaView>
        <ScrollView>
        <View style={{}}>
        <Image
        source={require("./assets/tax.png")}
        style={{width:390,height:300, borderRadius: 40, marginTop:-20, marginLeft:0,marginRight:0 }}
        />

        
     

   <TouchableOpacity onPress={()=> navigation.navigate('IncomeForm')} style={styles.addBtn} >
   <FontAwesome5 name="money-bill-alt" size={24} color="black"  style={{margin:"5%"}} /> 
     
        <Text style={{marginTop: 1, fontSize: 25}}>
             Add Income
        </Text>
        
    
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('ExpenseForm')} style={styles.addBtn} >
     

     <Fontisto name="wallet" size={24} color="black" style={{margin:"5%"}}/>
     
     <Text style={{marginTop: 1, fontSize: 25 }}>
          Add Expense
     </Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.addBtn} >
 <MaterialIcons name="logout" size={24} color="black" style={{margin:"5%"}}/>
     
     <Text style={{marginTop: 1, fontSize: 25 }}>
          Logout
     </Text>
 
 </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: "medium",
        fontSize: 25,
        color: "#464646",
        alignContent: "center",
        alignItems: "center",
        marginTop: 65,
        marginLeft: 103

    },
    input: {
        height: '11%',
        borderColor: 'gray',
        borderWidth: 0.4,
        marginLeft: 90,
        borderRadius:30,
        backgroundColor: "#FFF",
        width: '50%',
        paddingHorizontal: 10,
        marginTop: 30
      },
      addBtn:{
        borderRadius: "9",
        height:60,
        width:340,
        marginLeft: 25,
        backgroundColor:"#FFF",
        marginTop: 40,
        alignContent: "center",
        alignItems:"center",
        overflow: "hidden",
        flexDirection: 'row',
        
     },
     addButtonBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35, // La moitié de la hauteur ou de la largeur pour obtenir un cercle
        overflow: "hidden", // Assurez-vous que l'image ne dépasse pas la bordure arrondie
      },
})