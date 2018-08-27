import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'; 

//navigation screens
import Guest from './screens/Guest.js';
import LoginScreen from './screens/LoginScreen.js';
import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js';
import StartCam from './screens/StartCam.js';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Guest: Guest,
  SignIn: SignIn,
  SignUp: SignUp,
  StartCam: StartCam
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


