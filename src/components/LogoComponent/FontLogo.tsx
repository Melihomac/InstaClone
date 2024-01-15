import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      style={styles.container}
      source={require('../../assets/images/logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 68,
    width: 244,
  },
});

export default Logo;
