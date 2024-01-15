import React, {useState} from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';

const HeartIcon2 = () => {
  const [selectedImage, setSelectedImage] = useState('heart');
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    setSelectedImage(prevState => {
      if (prevState === 'heart') {
        setCounter(prevCounter => prevCounter + 1);
      } else if (prevState === 'hearticonred') {
        setCounter(prevCounter => Math.max(prevCounter - 1, 0));
      }
      return prevState === 'heart' ? 'hearticonred' : 'heart';
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.viewStyle}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            resizeMode="contain"
            style={styles.container}
            source={
              selectedImage === 'heart'
                ? require('../../assets/images/hearticon.png')
                : require('../../assets/images/hearticonred.png')
            }
          />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.container}
          source={require('../../assets/images/commentIcon.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.container}
          source={require('../../assets/images/shareicon.png')}
        />
      </TouchableOpacity>
      <View style={styles.counterStyle}>
        <Text>{counter} likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    marginTop: 10,
    marginLeft: 15,
  },
  viewStyle: {
    flexDirection: 'row',
  },
  counterStyle: {
    marginTop: 5,
    marginLeft: 10,
    padding: 10,
    alignItems: 'flex-start',
  },
});

export default HeartIcon2;
