import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';
import Video, {VideoRef} from 'react-native-video';

const SearchScreen = () => {
  const videoRef = useRef<VideoRef>(null);
  const background = require('../../assets/videos/video2.mp4');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = text => {
    const filteredResults = searchData.filter(item =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchTerm(text);
    setSearchResults(filteredResults);
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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
                placeholder="🔍 Search"
                placeholderTextColor="black"
                autoFocus={false}
                autoComplete="off"
              />
            </View>
          </View>
          <View style={styles.postArea}>
            <TouchableOpacity>
              <View style={styles.videoArea}>
                <Video
                  source={background}
                  ref={videoRef}
                  style={styles.backgroundVideo}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.videoArea}>
                <Video
                  source={background}
                  ref={videoRef}
                  style={styles.backgroundVideo}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.videoArea}>
                <Video
                  source={background}
                  ref={videoRef}
                  style={styles.backgroundVideo}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  searchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 15,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  postArea: {
    height: 400,
    flexDirection: 'row',
    width: SCREEN_WIDTH * 1,
  },
  videoArea: {
    borderWidth: 1,
    borderColor: 'black',
  },
  backgroundVideo: {
    height: SCREEN_HEIGHT * 0.27,
    width: SCREEN_WIDTH * 0.33,
  },
});

export default SearchScreen;
