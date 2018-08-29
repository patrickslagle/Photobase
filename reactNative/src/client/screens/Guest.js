import React from 'react'
import {
  View, TextInput,
  Text, TouchableOpacity, Image, Alert,
  Button,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const OPACITY_ENABLED = 1.0;
const OPACITY_DISABLED = 0.2;
export default class Screen2 extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }
  
  handleMessageChange (input) {
    //this.props.updateMessage(message);
    this.setState({input});
  }

  handleButtonPress () {
    //this.props.sendMessage(this.props.message);
  }
  
  componentDidUpdate(prevProps) {
    if (!prevProps.sendingError && this.props.sendingError) {
      Alert.alert('error', this.props.sendingError)
    }
  }
  render() {
    const sending = this.props.sending
    const isButtonDisabled = sending || this.state.input.trim().length == 0
    const opacity = isButtonDisabled ? OPACITY_DISABLED : OPACITY_ENABLED
    return (
      <View style={styles.container}>
        <Text>Guest</Text>
        {/* <Button
          onPress={() => this.props.navigation.navigate('StartCam')}
          title="Take Picture"
        /> */}
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back"
        />
        <TextInput
        style={styles.textInput}
        // placeholder={translations.t('message')}
        returnKeyType='send'
        onChangeText={this.handleMessageChange}
        value={this.props.message}
        underlineColorAndroid={'transparent'}
        editable={!sending} 
        />
        <TouchableOpacity
            style={styles.button}
            onPress={this.handleButtonPress}
            // disabled={isButtonDisabled}
            >

            <Image
              source={require('../images/ic_send.png')}
              style={{opacity: opacity}} />

        </TouchableOpacity>
        
        <Text>{'user input: ' + this.state.input}</Text>

      </View>
    )
  }
}

// Screen2.propTypes = {
//   sending: PropTypes.bool.isRequired,
//   sendMessage: PropTypes.func.isRequired,
//   updateMessage: PropTypes.func.isRequired,
//   message: PropTypes.string.isRequired,
//   sendingError: PropTypes.string
// }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '100%',
    backgroundColor: '#eeeeee',
    borderTopColor: '#cccccc',
    borderTopWidth: 1
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3
  },
  button: {
    flexShrink: 0,
    width: 40,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center'
  }
})
