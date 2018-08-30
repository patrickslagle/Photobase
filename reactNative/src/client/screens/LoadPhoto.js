import React from 'react'
import { Icon } from 'native-base'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { Permissions, ImagePicker } from 'expo';


// const SERVER_URL = 'http://192.168.0.161:8080/image-upload' //type hostname -I in CL to find your IP
const SERVER_URL = 'http://192.168.0.135:19000/image-upload';

class LoadPhoto extends React.Component {
  state = {
    image: null
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let images
    if (this.state.image) {
      images = (
      <Image source={{uri: this.state.image}}
      style={{width: 400, height: 400}} />
      )
    }
    return(
      <View style={{ flex: 1, width: '100%' }}>
        <Text onPress={this.pickImage}>Upload Photo</Text>
        <View>
          <Icon name="ios-images" onPress={this.pickImage} style={{ color: 'black', fontSize: 100 }} />
          {images}
        </View>
      </View>

    )
  }
}



export default class StartImagePicker extends React.Component {
  //initialize state
  state = {
    cameraRollPermission: null
  };

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
    .then(({ status }) =>
      this.setState({
        cameraRollPermission: status === 'granted'
        // photo: null
      })
    );
  }

  render() {
    const { cameraRollPermission } = this.state;

    //Render one of 3 things depending on permissions
    return (
      <View style={styles.container}>
        {cameraRollPermission === null ? (<Text>Waiting for permission...</Text>) : cameraRollPermission === false}
        {cameraRollPermission === false ? (<Text>Permission denied</Text>) : (<LoadPhoto/>)}
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
