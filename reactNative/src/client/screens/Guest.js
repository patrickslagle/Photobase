import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

export default class Screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Guest Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('StartCam')}
          title="Take Picture"
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})