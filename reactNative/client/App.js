import React from 'react';
import { createStackNavigator } from 'react-navigation'; 

// navigation screens
import Guest from './screens/Guest.js';
import Login from './screens/LoginScreen.js';
import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js';
import StartCam from './screens/StartCam.js';
import LoadPhoto from './screens/LoadPhotoScreen.js';


const App = () => <AppStackNavigator />;

const AppStackNavigator = createStackNavigator({
  Login,
  Guest,
  SignIn,
  SignUp,
  StartCam,
  LoadPhoto,
});

export default App;
