import React from 'react';
import Home from './Components/Home';
import List from './Components/List';
import Dashboard from './Components/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Navigator>
       <Screen name="Home" component={Home} />
       <Screen name="List" component={List} />
       <Screen name="Dashboard" component={Dashboard} />
     </Navigator>
   </NavigationContainer>
  );
}