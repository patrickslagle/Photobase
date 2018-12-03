import React from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Login"
      onPress={() => navigation.navigate('SignIn')}
    />
    <Button title="Create Account"
      onPress={() => navigation.navigate('SignUp')}
    />
    <Button
      title='Guest Access'
      onPress={() => navigation.navigate('Guest')} 
    />
  </View>
);

export default LoginScreen;
