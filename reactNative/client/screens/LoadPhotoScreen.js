import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Permissions } from 'expo';
import LoadPhoto from '../components/LoadPhoto.js'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class LoadPhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraRollPermission: null,
    };
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
      .then(({ status }) => this.setState({ cameraRollPermission: status === 'granted' }));
  }

  render() {
    const { cameraRollPermission } = this.state;

    //Render one of 3 things depending on permissions
    return (
      <View style={styles.container}>
        {cameraRollPermission === null ? (<Text>Waiting for permission...</Text>) : cameraRollPermission === false}
        {cameraRollPermission === false ? (<Text>Permission denied</Text>) : (<LoadPhoto />)}
      </View>
    );
  }
}