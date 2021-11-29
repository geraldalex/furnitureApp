
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, ItemDetail} from "./src/screens/"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createNativeStackNavigator()

const App = () => {
  return(
<NavigationContainer theme={theme}>
<Stack.Navigator
screenOptions={{
  headerShown: false
}}
initialRouteName={'Home'}
>
<Stack.Screen  name="Home" component={Home}/>
<Stack.Screen  name="ItemDetail" component={ItemDetail}/>
</Stack.Navigator>
</NavigationContainer>
  )
}

export default () => {
  return <App />
}