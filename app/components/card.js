import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export const Card = () => {
  return (
    <View style={styles.cardWrap}>
    
     <View style={styles.avatarWrap}>
      <Image style={styles.avatar}
        source={{uri: 'http://placehold.it/200x200' }}
      />
     </View>
     
     <View style={styles.contentWrap}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Adam Rafeek
        </Text>
        <Text style={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          
        </Text>
      </View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
});
