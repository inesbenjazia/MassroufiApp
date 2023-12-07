import { View, Text , StyleSheet, SafeAreaView, TextInput,TouchableOpacity, FlatList} from "react-native";
import React, {useState} from 'react';
import axios from 'axios';
import config from "./config";
import { Image } from "react-native";

import {Ionicons} from '@expo/vector-icons'

const PALM_API_KEY = config.PALM_API_KEY;



export default function ChatBot () {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [showImage, setShowImage] = useState(true);

    const generateText = async () => {
        if (inputText.trim() === '') {
            return;
        }
    
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText`;
    
        const requestData = {
            "prompt": {
                "text": inputText,
            },
        };
    
        const headers = {
            'Content-Type': 'application/json',
        };
    
        try {
            const response = await axios.post(`${apiUrl}?key=${PALM_API_KEY}`, requestData, {
                headers,
            });
    
            console.log('API Response', response.data);
    
            if (response.status === 200) {
                if (response.data && response.data.candidates && response.data.candidates.length > 0) {
                    const botResponse = response.data.candidates[0].output;
    
                    // Add the user's input to the message array
                    const newUserMessage = {
                        id: messages.length + 1,
                        text: inputText,
                        sender: 'user',
                        timestamp: new Date().getTime(),
                    };
    
                    // Add the bot's message to the message array
                    const newBotMessage = {
                        id: messages.length + 2,
                        text: botResponse,
                        sender: 'bot',
                        timestamp: new Date().getTime(),
                    };
    
                    setMessages([...messages, newUserMessage, newBotMessage]);
                    setInputText('');
                } else {
                    console.error('Response structure is not as expected!!');
                }
            } else {
                console.error('Google Cloud API response failed with status:', response.status);
            }
        } catch (error) {
            console.error('An error occurred while making the Google Cloud API request:', error);
        }
        setShowImage(false);
    };
    
    return(
       <SafeAreaView style={styles.container}>
       <View>
       {showImage && (
        <Image
        source={require("./assets/Logo.jpeg")}
        style={styles.logo}
        /> )}
        </View>

        <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>(
            <View 
            style= {{
                alignSelf: item.sender === 'user'? 'flex-end': 'flex-start',
                marginBottom: 12,
            }}
            >
                <View 
                style={{
                    backgroundColor: item.sender === 'user' ? '#D9E3FF': '#FFD5EE',
                    padding: 10,
                    borderRadius: 40,
                }}
                >
                    <Text
                    style={{
                        color: item.sender === 'user'? 'black' : 'black'
                    }}
                    > 
                      {item.sender === 'user' ? item.text: item.text}
                    </Text>
                    <Text style={{
                        color: item.sender === 'user' ? 'black' : 'black',
                        fontSize : 12,
                        marginTop: 4,
                    }}>
                      {new Date(item.timestamp).toLocaleTimeString()}
                    </Text>

                </View>

            </View>
        )}
        />
        <View style={styles.inputContainer}>
          <TextInput 
          placeholder="Hi! I’m a chat bot. How can I help you?"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={styles.input}
          />
          <TouchableOpacity onPress={generateText} style={styles.sendButton}>
            <Ionicons name='send' size={28} color='#0A1ED3'  //#0A1ED3 //#EFF4FF
            />
          </TouchableOpacity>
        </View>
       </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 24
    },
    inputContainer: {
      backgroundColor: '#D9E3FF', // Add hash symbol (#) here
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      borderRadius: 50,
      marginTop: 20,
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    input: {
      fontSize: 16,
      flex: 1, 
      color: '#333',
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: '#EFF4FF', // Add hash symbol (#) here
      borderRadius: 50,
      //marginTop: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 3
    },
    sendButton: {
      padding: 10,
      borderRadius: 10,
      //backgroundColor: '#007AFF' // Add hash symbol (#) here
    },
    logo: {
        flex: 1,
    //marginBottom: 20,
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
      },
  });
  