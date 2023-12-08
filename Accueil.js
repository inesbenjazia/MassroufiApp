import React, {useEffect, useState } from 'react';
import { View, Text,SafeAreaView, TextInput, TouchableOpacity,ImageBackground,ScrollView,Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {user, api} from './api'
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Transactions from './Transactions';

import UserProfil from './UserProfil';

import CustomPieChart from './CustomPieChart';


export default function Accueil(){
    const navigation = useNavigation();
    const [connectedUser, setConnectedUser] = useState({})
    const checkIfUserAlreadyLogged = async()=>{
        const isLogged = await AsyncStorage.getItem("yourAuthTokenKey")
        (!isLogged)&& navigation.navigate("Login")
        console.log(isLogged)

      }
    const fetchProfile = async() => {
        checkIfUserAlreadyLogged()
        const {data} = await user.profile();
        setConnectedUser(data)
    }
    useEffect(()=>{
        
        fetchProfile();

        // isLogged &&   navigation.navigate("Login")
    }, [])
    return(

    
       <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection:"row",}}>
                <View style={styles.imageContainer} >
                    <UserProfil/> 
                </View>
                <View style={styles.nameContainer}>
                    <Text  style={styles.welcome}> Welcome </Text>
                    <Text  style={styles.name}> {connectedUser?.username}</Text>
                </View>
        </View>

                <TouchableOpacity onPress={()=> navigation.navigate('Menu')}  style={{marginLeft:"38%",}} >
                <Feather name="settings" size={24} color="black" />
                </TouchableOpacity>

                <View>
                 
                </View>
                
            </View>
            <View style={styles.transactionHeader}>
                <Text style={styles.transactions}>
                   Transactions
                </Text>
                <TouchableOpacity style={styles.press} onPress={() => alert("View All pressed")}>
                    <Text style={styles.viewAll}>
                        View All
                    </Text>
                </TouchableOpacity>
                

            </View>
            <View>
            <Transactions/>
            
            </View>

            </ScrollView>
    
    )
}

const styles = StyleSheet.create({
  
  transactionHeader:
  { 
      flexDirection: 'row',
  justifyContent: 'space-between',  // Cela va pousser les éléments à chaque extrémité
  padding: 16, 
      
  },
  transactions:
  { 
      
      flex: 1,
      alignItems:"flex-start",
      flexDirection:"row",
      color: '#464646',
     // fontFamily: 'Inter',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '800',
      lineHeight: 21,

  },
  press:
  {
      marginRight:"5%",
  },
  viewAll:
  {

      color: "#858484",
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: 21,
  },
    
  name: {
        
    color: '#646464',
    
    textShadowRadius: 0.5, 
    fontSize: 15,
    fontWeight: "800",
    
},
welcome: {
    
    color: "#858484",
    //fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    
},

container:{
    alignItems :"center",
    backgroundColor : "#EEF0F3",
    height:900,
    width:400,
    paddingTop:50,
},
image: {
    marginTop:"auto",
    margin:"6%",
    height:400,
    width:370,
    resizeMode:"contain",
    
},
headerContainer:{
    alignContent : "space-around" ,
    flexDirection:"row",
    paddingLeft:"5%",
    width:"93%"
   
},

imageContainer:{
    
    alignItems :"center",
   
},
nameContainer:{
    
    alignItems :"center",
    margin:"3%",
    
  
},

})