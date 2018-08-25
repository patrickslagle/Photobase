import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
// import Autoshoot from './Autoshoot.js'

import { Camera, Permissions } from 'expo';


//insert SERVER URL
const SERVER_URL = '';


class Autoshoot extends React.Component {
  state = {
    photo: null
  }
  takePicture = ()=> {
    this.camera.takePictureAsync({
      quality: 0.1,
      base64: true,
      exif: false
    }).then(photo => {
      this.setState({photo});
    })
  }

  uploadPicture = () => {
    return fetch(SERVER_URL, {
      body: JSON.stringify({
        image: this.state.photo.base64
      }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
      })
      .then(response => response.json())
  }
  render() {
     const {photo} = this.state;

    return (
      <View style={{ flex: 1, width: '100%' }}>
      {photo ? (
        <ImageBackground style={{flex:1}} source={{uri:photo.uri}}/>):
      (
        <Camera 
          style = {{flex: 1}}
          type={Camera.Constants.Type.back}
          ref={cam => this.camera = cam}>
          <TouchableOpacity style={{flex:1}} onPress={this.takePicture}/>
        </Camera>  
      )} 
      </View>
    );
  }
}


export default class App extends React.Component {
  //initialize state
  state = {
    cameraPermission: null
  };

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA)
      .then(({ status }) =>
        this.setState({
          cameraPermission: status === 'granted'
          // photo: null
        })
      );
  }

  render() {
    const { cameraPermission } = this.state;

    //Render one of 3 things depending on permissions
    return (
      <View style={styles.container}>
        {cameraPermission === null ? (<Text>Waiting for permission...</Text>) : cameraPermission === false}
        {cameraPermission === false ? (<Text>Permission denied</Text>) : (<Autoshoot/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


