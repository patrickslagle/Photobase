import React, {Component} from 'react';
import{
  View,
  StyleSheet,
  Button,
  AppRegistry,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const remote = 'https://dzbc.org/wp-content/uploads/data/2018/2/22/house-stark-wallpaper-PIC-MCH073874.png';
class LoginScreen extends Component {
  render() {
    return (
       
      <View style={styles.container}>
        <View 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',}}>
            <Image style={{flex: 1}} source={{ uri: remote}}/>
        </View>
        <View style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          {/* <Button title="Login"
            onPress={() => this.props.navigation.navigate('SignIn')} style={styles.button}/>
          <Button title="Create Account"
            onPress={() => this.props.navigation.navigate('SignUp')} style={styles.button}/> */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Guest')} style={styles.button}>
            <Text>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: 'transparent',
    margin: 20,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
  }
})