import React from 'react'
import {
  View, TextInput,
  Text, TouchableOpacity, Image, Alert,
  Button, KeyboardAvoidingView, 
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';


//import store from '../store.js';
const OPACITY_ENABLED = 1.0;
const OPACITY_DISABLED = 0.2;

const mapStateToProps = store => ({
  messages: store.messages.messages,
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (input) => dispatch(actions.sendMessage(input)),
})
class Screen2 extends React.Component {
  constructor(props) {
    super(props);
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
    this.props.sendMessage(this.state.input);
    //axios call to post to database
    console.log('state from button press', this.props.messages);

    axios.post('http://192.168.0.135:19000/postMessages', this.props.messages[0]).then(res => {
      console.log('axios response in guest', res);
    }).catch(err => console.log('Guest axios post err', err));
  }
  
  componentDidMount() {
    //axios.get('path to /messages').then(data => {
      //console.log('componentdidmountdata', data);
      //reset the chat history to 0 and load all database messages into initial state in reducer
    //})
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
      [<View style={styles.container} key='0'>
        <Text>Guest</Text>
        {/* <Button
          onPress={() => this.props.navigation.navigate('StartCam')}
          title="Take Picture"
        /> */}
        <Button
          onPress={() => this.props.navigation.navigate('LoadPhoto')}
          title="Load Photo"
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back"
        />
        <Text>{'user input: ' + this.state.input}</Text>
      </View>,
      <View style={styles.footer} key='1'>
        <KeyboardAvoidingView
          style={{position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection: 'row'}}
          behavior="padding"
        >
          <TextInput 
            style={styles.textInput}
            placeholder='Message'
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
        </KeyboardAvoidingView>
      </View>]
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
    flexDirection: 'column',
    minWidth: '100%',
    backgroundColor: '#eeeeee',
    borderTopColor: '#cccccc',
    borderTopWidth: 1
  },
  textInput: {
    
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 40,
    width: '80%',
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
  },
  footer: {
    height: 40,
    marginTop: 450,
    alignItems: 'flex-end',
    flexDirection: 'column'
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Screen2);