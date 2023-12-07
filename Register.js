import React, { useState } from 'react';
import { View, Text,SafeAreaView, TextInput, TouchableOpacity,ImageBackground, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

export default function Register(){
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
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
        <Text style={styles.title}>Welcome</Text>
        
    </View>
    

   
    <Text style={styles.label}>Username:</Text>
    <View style={styles.inputWrapper}>
    <MaterialCommunityIcons 
         name="face-man-profile"
         size={20}
         color="#83829A"
         style={styles.iconStyle}
    />
    <TextInput 
        placeholder="Enter user"
        onFocus={() =>{}}
        onBlur={() =>{}}
        onChangeText={(username) => setUsername(username)}
        autoCorrect={false}
        autoCapitalize="none"
        value={username}
        style={{flex: 1}}
    />
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
    <TouchableOpacity  onPress={() =>navigation.navigate("Login")}>
    <ImageBackground
              source={require("./assets/yosrBg.png")}  
              style={styles.addButtonBackground}
            >
        <Text style={styles.registerBtn}>R E G I S T E R</Text>
    </ImageBackground>
    </TouchableOpacity>
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
        marginLeft: 90

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

})