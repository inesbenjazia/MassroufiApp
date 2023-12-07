import React, { useState, useEffect } from 'react';
import { View, Image, Text ,StyleSheet} from 'react-native';

export default function UserProfil ({ gender }){
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    // Choix de l'avatar en fonction du genre
    const chooseAvatar = () => {
      if (gender === 'homme') {
        setAvatar(require('./assets/man.png'));
      } else if (gender === 'femme') {
        setAvatar(require('./assets/woman.png'));
      } else {
        // Cas par défaut ou si le genre n'est pas spécifié
        setAvatar(require('./assets/man.png'));
      }
    };

    // Appeler la fonction pour choisir l'avatar
    chooseAvatar();
  }, []); // Effectuer l'appel initial uniquement lorsque la propriété gender change

  return (
    <View>
      <Image source={avatar} style={styles.avatar} />
    </View>
  );
};



const styles = StyleSheet.create({


    avatar:{
        
        height:50,
        width:50,
        
    },
   

})
