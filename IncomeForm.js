import React, { useState } from 'react';
import { View, Text, Image,TextInput, TouchableOpacity,ImageBackground, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';

export default function IncomeForm(){
    const [amount, setAmount] = useState('');
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={{marginBottom:350}}>
            <Image
            source={require("./assets/income.jpeg")}
            style={{width:350,height:280, borderRadius: 40, marginTop:30, marginLeft:19,marginRight:140 }}
            />

            <View>
            <Text style={styles.title}>Add Incomes</Text>
          </View>
          <TextInput 
         style={styles.input}
         placeholder="0"
         keyboardType="numeric"
         value={amount}
         onChangeText={(text) => setAmount(text)}
         />

       <TouchableOpacity  style={styles.addBtn} >
         <ImageBackground
              source={require("./assets/yosrBg.png")}  
              style={styles.addButtonBackground}
            >
            <Text style={{marginHorizontal: 20, fontSize: 30}}>
                 +
            </Text>
        </ImageBackground>
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
        borderRadius: "50%",
        height:70,
        width:70,
        marginLeft: 150,
        backgroundColor:"#FFF",
        marginTop: 40,
        alignContent: "center",
        alignItems:"center",
        overflow: "hidden",
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