import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

const HomeLogo = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity style={styles.viewStyle}>
        <Image
          resizeMode="contain"
          style={styles.container}
          source={require('../../assets/images/logo.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.downIconStyle}
          source={require('../../assets/images/Iconsdown.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 104,
  },
  viewStyle: {
    flexDirection: 'row',
  },
  downIconStyle: {
    height: 16,
    width: 16,
  },
});

export default HomeLogo;
