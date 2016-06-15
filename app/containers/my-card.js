import React from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MyCardContainer = () => {
  return (
    <View>
      <Text> My Card </Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default connect()(MyCardContainer);
