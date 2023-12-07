import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,ImageBackground, StyleSheet, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation=useNavigation();
    return(
        <SafeAreaView style={{marginTop: 50}}>
          <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#000', alignContent:"center"}}>
                <Text style={{ color:'#FFF'}} onPress={()=>navigation.navigate("ChatBot")}>ChatBot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#000', alignContent:"center", marginTop: 10}}>
                <Text style={{ color:'#FFF'}} onPress={()=>navigation.navigate("ExpenseForm")}>ExpenceForm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#000', alignContent:"center", marginTop: 10}}>
                <Text style={{ color:'#FFF'}} onPress={()=>navigation.navigate("IncomeForm")}>IncomeForm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#000', alignContent:"center", marginTop: 10}}>
                <Text style={{ color:'#FFF'}} onPress={()=>navigation.navigate("Menu")}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#000', alignContent:"center", marginTop: 10}}>
                <Text style={{ color:'#FFF'}} onPress={()=>navigation.navigate("Accueil")}>Accueil</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})