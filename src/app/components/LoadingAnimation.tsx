// components/LoadingAnimation.js

import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const LoadingAnimation = ({message}: {message: string}) => {
  return (
    <View style={styles.container}>
      {/* <LottieView
        source={require('../../assets/db_loading.json')} // Replace with your animation JSON file
        autoPlay
        loop
      /> */}
      <ActivityIndicator size="large" color="red" />
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingAnimation;
