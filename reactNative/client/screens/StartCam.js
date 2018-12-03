import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Permissions } from 'expo';
import Autoshoot from '../components/Autoshoot';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class StartCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraPermission: null,
    };
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA)
      .then(({ status }) => this.setState({ cameraPermission: status === 'granted' }));
  }

  render() {
    const { cameraPermission } = this.state;

    // Render one of 3 things depending on permissions
    return (
      <View style={styles.container}>
        {cameraPermission === null ? (<Text>Waiting for permission...</Text>) : cameraPermission === false}
        {cameraPermission === false ? (<Text>Permission denied</Text>) : (<Autoshoot/>)}
      </View>
    );
  }
}