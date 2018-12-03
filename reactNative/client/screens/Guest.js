import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Guest = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Guest Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('StartCam')}
      title="Take Picture"
    />
    <Button
      onPress={() => navigation.navigate('LoadPhoto')}
      title="Load Photo"
    />
    <Button
      onPress={() => navigation.goBack()}
      title="Go Back"
    />
  </View>
);

export default Guest;
