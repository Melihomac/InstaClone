import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

const HeartIcon = () => {
  return (
    <View>
      <TouchableOpacity style={styles.viewStyle}>
        <Image
          resizeMode="contain"
          style={styles.container}
          source={require('../../assets/images/hearticon.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.container}
          source={require('../../assets/images/dmicon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    marginRight: 24,
  },
  viewStyle: {
    flexDirection: 'row',
  },
});

export default HeartIcon;
