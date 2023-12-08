import React, { useState, useEffect } from 'react';
import { View, Text,SafeAreaView, TextInput, TouchableOpacity,ImageBackground, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {user, api} from './api'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login(){
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [cb, setcb] = useState(true)
  const [password, setPassword] = useState('');
  const handleLogin = async() => {
    try {
        const login = await user.login(email, password)
        navigation.navigate("Home")
    } catch (error) {
        alert("login problem")
    }
   
    alert(login)
    alert("heyy")
  }
  const checkIfUserAlreadyLogged = async()=>{
    const isLogged = await AsyncStorage.getItem("yourAuthTokenKey")
    if(isLogged){
        navigation.navigate("Accueil")
    }  
  }
  useEffect(()=>{
    checkIfUserAlreadyLogged()
  },[])
    return(
        //"#F8F8F8"
       
    <ImageBackground
      source={require("./assets/cnxBg.jpg")}
      style={styles.backgroundImage}
    >
<SafeAreaView style={{marginBottom: 40,marginTop: 40,marginLeft:30,marginRight:30, backgroundColor:"#FFF"}}>    
        {/*<View style={{marginTop: 210,marginLeft:20,marginRight:20,borderRadius:30, backgroundColor:"#FFF"}}>*/}
    <View style={styles.wrapper}>
        <View>
        <Text style={styles.title}>Login</Text>
        
    </View>

    </View>

    <View style={styles.wrapper}>
    <Text style={styles.label}>Email :</Text>
    <View style={styles.inputWrapper}>
    <MaterialCommunityIcons 
         name="email-outline"
         size={20}
         color="#83829A"
         style={styles.iconStyle}
    />
    <TextInput 
        placeholder="Enter email"
        onFocus={() =>{}}
        onBlur={() =>{}}
        onChangeText={(email) => setEmail(email)}
        autoCorrect={false}
        value={email}
        autoCapitalize="none"
        style={{flex: 1}}
    />

    
    </View>

    </View>

    <View style={styles.wrapper}>
    <Text style={styles.label}>Password :</Text>
    <View style={styles.inputWrapper}>
    <MaterialCommunityIcons 
         name="lock-outline"
         size={20}
         color="#83829A"
         style={styles.iconStyle}
    />
    <TextInput 
        placeholder="Password"
        onFocus={() =>{}}
        onBlur={() =>{}}
        onChangeText={(password) => setPassword(password)}
        autoCorrect={false}
        secureTextEntry={true}
        autoCapitalize="none"
        value={password}
        style={{flex: 1}}
    />
    </View>

    </View>

    <View style={{marginLeft: 100, marginRight: 100,marginTop: 30,marginBottom: 40}}>
    <TouchableOpacity  onPress={() =>handleLogin()}>
    <ImageBackground
              source={require("./assets/yosrBg.png")}  
              style={styles.addButtonBackground}
            >
        <Text style={styles.registerBtn}>L O G I N </Text>
    </ImageBackground>
    </TouchableOpacity>
    </View>
     
    <View style={{marginTop: 20,marginBottom: 40}}>
       <Text style={styles.registration} onPress={() =>navigation.navigate("Register")}>Register</Text>
    </View>

        </SafeAreaView>
        </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
        justifyContent: 'center',
    },
    title:{
        fontFamily: "bold",
        fontSize: 30,
        color: "#000",
        alignContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 55,
        marginLeft: 120

    },
  
    wrapper:{
        marginBottom: 10,
        
       // marginHorizontal: 20
    },
    label:{ 
        fontFamily: "regular",
        fontSize: 16,
        marginBottom: 0,
        marginEnd: 5,
        marginLeft: 20,
        textAlign: 'left'
    },
    inputWrapper:{
        borderColor:"#83829A",
        backgroundColor: "#FAFAFC",
        borderWidth: 1,
        height: 55,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        margin:10
    },
    iconStyle:{
        marginRight: 10
    },
    registerBtn:{
        fontFamily: "bold",
        color: "#FFF",
        padding: 10, // Add padding to the button 
        textAlign: "center"  , // Add border radius to the button
        
    },
    addButtonBackground: {
        
        justifyContent: 'center',
        alignItems: 'center',
        overflow: "hidden", // Assurez-vous que l'image ne dépasse pas la bordure arrondie
      },
      registration:{
        fontFamily: "bold",
        
        marginBottom: 30,
        textAlign: "center"
      },

})