import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Statistices extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
});
