import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const CardCollectionContainer = () => {
  return (
    <View style={styles.container}>
      <Text> Card Collection </Text>
      <TouchableHighlight onPress={Actions.myCard}> 
        <Text>go2mycard</Text>
      </TouchableHighlight>
    </View>
  );
}

export default connect()(CardCollectionContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  }
});
