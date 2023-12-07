import React, { useState } from 'react';
import { View, Text, Image,TextInput, TouchableOpacity,ImageBackground, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper'; 

export default function ExpenceForm(){
    const [amount, setAmount] = useState('');
    const [type, setType] = useState(selectedCategory);
    const [selectedCategory, setSelectedCategory] = useState('loisir');
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        
        
    
        // Mettez en place la logique pour ajuster le montant en fonction de la catégorie choisie
        switch (category) {
          case 'nutrition':
            setAmount(/* Montant pour la catégorie 'nutrition' */);
            break;
          case 'éducation':
            setAmount(/* Montant pour la catégorie 'éducation' */);
            break;
          case 'loisir':
            setAmount(/* Montant pour la catégorie 'loisir' */);
            break;
          case 'loyer':
            setAmount(/* Montant pour la catégorie 'loyer' */);
            break;
            case 'Autre':
            setAmount(/* Montant pour la catégorie 'Autre' */);
          default:
            setAmount(0);
        }
      };
      console.log('Type:',  selectedCategory);

    return(
        <SafeAreaView >
            <ScrollView >
            <View style={{marginBottom: 200}} >
            <Image
            source={require("./assets/Expense.jpg")}
            style={{width:350,height:230, borderRadius: 40, marginTop:30, marginLeft:19,marginRight:140 }}
            />
         <View>
            <Text style={styles.title}>Add Expenses</Text>
         </View>
         <TextInput 
         style={styles.input}
         placeholder="0"
         keyboardType="numeric"
         value={amount}
         onChangeText={(text) => setAmount(text)}
         />

       <View style={styles.container}>
        <Text style={styles.catTgext}>{`Catégorie sélectionnée: ${selectedCategory}`}</Text>

        <RadioButton.Group onValueChange={handleCategoryChange} value={selectedCategory}>
          <View style={styles.radioButtonContainer}>
            <Text style={styles.catTgext}>Nutrition</Text>
            <RadioButton value="nutrition" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text style={styles.catTgext}>Éducation</Text>
            <RadioButton value="éducation" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text style={styles.catTgext}>Loisir</Text>
            <RadioButton value="loisir" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text style={styles.catTgext}>Loyer</Text>
            <RadioButton value="loyer" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text style={styles.catTgext}>Autre</Text>
            <RadioButton value="Autre" />
          </View>
        </RadioButton.Group>

        
      </View>
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

const styles= StyleSheet.create({
    title:{
        fontFamily: "medium",
        fontSize: 25,
        color: "#464646",
        alignContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 90

    },
    input: {
        height: '7%',
        borderColor: 'gray',
        borderWidth: 0.4,
        marginLeft: 110,
        borderRadius:30,
        backgroundColor: "#FFF",
        width: '40%',
        paddingHorizontal: 10,
        marginTop: 15
      },
      radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:1
      },
      container: {
        backgroundColor: "#FFF",
        borderColor: 'gray',
        borderWidth: 0.4,
        height: '33%',
        borderRadius:30,
        marginTop: 15,
       // flex:1,
       marginLeft:40,
       marginRight:40,
       padding:0,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop:50
        padding:10,
        
     },
     catTgext:{ 
        fontFamily: "medium",
     },
     addBtn:{
        borderRadius: "50%",
        height:70,
        width:70,
        marginLeft: 160,
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