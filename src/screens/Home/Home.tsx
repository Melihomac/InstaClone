import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';
import Video, {VideoRef} from 'react-native-video';
import HeartIcon2 from '../../components/HeartIcon/HeartIcon2';

const Home = ({navigation}) => {
  const videoRef = useRef<VideoRef>(null);
  const [height, setHeight] = useState(0);
  const background = require('../../assets/videos/video.mp4');
  const stories = [
    {key: 'Melih', hasStory: true, src: 'https://i.pravatar.cc/150?img=8'},
    {
      key: 'ayşe',
      hasStory: true,
      src: 'https://i.pravatar.cc/150?img=9',
    },
    {key: 'fatma', hasStory: true, src: 'https://i.pravatar.cc/150?img=10'},
    {
      key: 'ahmet',
      hasStory: true,
      src: 'https://i.pravatar.cc/150?img=11',
    },
    {key: 'mehmet', hasStory: true, src: 'https://i.pravatar.cc/150?img=12'},
    {key: 'hüseyin', hasStory: true, src: 'https://i.pravatar.cc/150?img=13'},
    {
      key: 'ali',
      hasStory: true,
      src: 'https://i.pravatar.cc/150?img=14',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.storyItem}>
        <TouchableOpacity>
          <Image style={styles.storyImage} source={{uri: item.src}} />
          <Text style={styles.storyText}>{item?.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleLayout = event => {
    const {height} = event.nativeEvent.layout;
    setHeight(height);
    console.log(height);
  };

  useEffect(() => {
    const restartVideo = () => {
      if (videoRef.current) {
        videoRef.current.seek(0);
      }
    };
    restartVideo();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.storyStyle}>
          <FlatList
            data={stories}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.postStyle}>
          <View style={styles.postHeaderStyle}>
            <TouchableOpacity
              style={styles.postHeaderStyle}
              onPress={() => navigation.navigate('Profile')}>
              <Image
                style={styles.postImageStyle}
                src="https://i.pravatar.cc/150?img=8"
              />
              <Text style={styles.postUsername}>Melih</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postThreeDotStyle}>
              <Image source={require('../../assets/images/threebutton.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.postPhotoStyle}>
            <Video
              source={background}
              ref={videoRef}
              style={styles.backgroundVideo}
              onLayout={handleLayout}
            />
          </View>
          <View style={styles.postButtonStyle}>
            <HeartIcon2 />
          </View>
          <View style={styles.postDescriptionStyle}>
            <Text
              style={styles.postDescriptionTextStyle}
              onPress={() => navigation.navigate('Profile')}>
              Melih
            </Text>
            <Text>Ayı videosu.</Text>
          </View>
        </View>
        <View style={styles.postStyle}>
          <View style={styles.postHeaderStyle}>
            <TouchableOpacity
              style={styles.postHeaderStyle}
              onPress={() => navigation.navigate('Profile')}>
              <Image
                style={styles.postImageStyle}
                src="https://i.pravatar.cc/150?img=8"
              />
              <Text style={styles.postUsername}>Melih</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postThreeDotStyle}>
              <Image source={require('../../assets/images/threebutton.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.postPhotoStyle}>
            <Video
              source={background}
              ref={videoRef}
              style={styles.backgroundVideo}
              onLayout={handleLayout}
            />
          </View>
          <View style={styles.postButtonStyle}>
            <HeartIcon2 />
          </View>
          <View style={styles.postDescriptionStyle}>
            <Text
              style={styles.postDescriptionTextStyle}
              onPress={() => navigation.navigate('Profile')}>
              Melih
            </Text>
            <Text>Ayı videosu.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  storyStyle: {
    width: 390,
    height: 86,
  },
  storyItem: {
    margin: 5,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyText: {
    marginLeft: 10,
  },
  postStyle: {
    height: 'auto',
    borderTopColor: 'grey',
    borderTopWidth: 2,
    width: SCREEN_WIDTH * 1,
  },
  postHeaderStyle: {
    height: 60,
    width: SCREEN_WIDTH * 1,
    flexDirection: 'row',
  },
  postImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginTop: 5,
    marginLeft: 5,
  },
  postThreeDotStyle: {
    height: 24,
    width: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 'auto',
    padding: 20,
    marginTop: 23,
  },
  postUsername: {
    fontSize: 15,
    padding: 20,
  },
  postPhotoStyle: {
    height: 222,
  },
  postButtonStyle: {
    height: 50,
  },
  postDescriptionStyle: {
    marginTop: 25,
    height: 50,
    marginLeft: 20,
    flexDirection: 'row',
  },
  postDescriptionTextStyle: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 15,
  },
  backgroundVideo: {
    height: 225,
    width: SCREEN_WIDTH * 1,
  },
});

export default Home;
