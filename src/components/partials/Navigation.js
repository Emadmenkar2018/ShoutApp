import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@pages/Home"; 

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => { 
  return (

    < HomeStack.Navigator testID = "nav" mode = "modal" initialRouteName = "Home" >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      /> 
    </HomeStack.Navigator > 

  );
}


export default HomeStackNavigator;
 
