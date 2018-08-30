import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'; 
import store from './store.js';
import { Provider } from "react-redux";
//navigation screens
import Guest from './screens/Guest.js';
import LoginScreen from './screens/LoginScreen.js';
import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js';
import StartCam from './screens/StartCam.js';
import LoadPhoto from './screens/LoadPhoto.js';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Guest: Guest,
  SignIn: SignIn,
  SignUp: SignUp,
  StartCam: StartCam,
  LoadPhoto: LoadPhoto
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


