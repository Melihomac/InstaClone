import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';

const data = {
  username: 'Melih',
  followers: 1000,
  following: 200,
  posts: [
    {id: '1', image: 'https://placekitten.com/200/300'},
    {id: '2', image: 'https://placekitten.com/201/301'},
    {id: '3', image: 'https://placekitten.com/202/302'},
  ],
};

const Profile = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity>
      <Image style={styles.postImage} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://placekitten.com/150/150'}}
        />
        <View style={styles.userDetails}>
          <Text style={styles.username}>{data.username}</Text>
          <View style={styles.followContainer}>
            <Text style={styles.followText}>{data.followers} followers</Text>
            <Text style={styles.followText}>{data.following} following</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={data.posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.postContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userDetails: {
    marginLeft: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  followContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followText: {
    marginRight: 10,
  },
  postContainer: {
    marginTop: 20,
  },
  postImage: {
    width: SCREEN_WIDTH * 0.33,
    height: SCREEN_HEIGHT * 0.2,
    margin: 2,
  },
});

export default Profile;
