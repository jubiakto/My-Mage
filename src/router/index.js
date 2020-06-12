import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, GetStarted, Register, Login} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
