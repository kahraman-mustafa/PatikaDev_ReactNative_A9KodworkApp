// components/LoadingAnimation.js

import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const LoadingAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/launch_rocket.json')} // Replace with your animation JSON file
        autoPlay
        loop
      />
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
