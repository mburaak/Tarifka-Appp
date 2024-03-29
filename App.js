import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Categories from "./src/pages/Categories"
import Meal from "./src/pages/Meal"
import Detail from './src/pages/Detail';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Categories" component={Categories} />
        <Stack.Screen name='Meal' component={Meal}/>
        <Stack.Screen name='Detail' component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});


//Navigation import edildi.
//Axios