import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
import Login from './Login';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Home from './Home';
import ChatBot from './ChatBot'; 
import ExpenceForm from './ExpenseForm';
import IncomeForm from './IncomeForm';
import Menu from './Menu';
import Accueil from './Accueil';
import UserProfil from './UserProfil';
import CustomPieChart from './CustomPieChart';
import Transactions from './Transactions';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView =useCallback(async() => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded] );

  if(!fontsLoaded){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn" screenOptions={{headerShown:true}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="ChatBot" component={ChatBot} options={{headerShown:false}}/>
        <Stack.Screen name="ExpenseForm" component={ExpenceForm} options={{headerShown:false}}/>
        <Stack.Screen name="IncomeForm" component={IncomeForm} options={{headerShown:false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
        <Stack.Screen name="Accueil" component={Accueil} options={{headerShown:false}}/>
        <Stack.Screen name="UserProfil" component={UserProfil} options={{headerShown:false}}/>
        <Stack.Screen name="PieChart" component={CustomPieChart} options={{headerShown:false}}/>
        <Stack.Screen name="Transactions" component={Transactions} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
