import React from 'react';
import {StyleSheet, Image} from 'react-native';

const HomeIcon = () => {
  return (
    <Image
      resizeMode="contain"
      style={styles.container}
      source={require('../../assets/images/homeicon.png')}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
  },
});

export default HomeIcon;
