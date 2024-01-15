import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import Search from './src/screens/Search/Search';
import HomeLogo from './src/components/LogoComponent/HomeLogo';
import Profile from './src/screens/Profile/Profile';
import HeartIcon from './src/components/HeartIcon/HeartIcon';

const Tab = createBottomTabNavigator();

const App = ({navigation}: any) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            padding: 10,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={({route}) => ({
            headerLeft: () => <HomeLogo />,
            headerRight: () => <HeartIcon />,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused, color, size}) => {
              let iconSource;
              if (route.name === 'Home') {
                iconSource = focused;
                require('./src/assets/images/homeicon.png');
              }
              return (
                <Image
                  source={require('./src/assets/images/homeicon2.png')}
                  style={{width: size, height: size, tintColor: color}}
                />
              );
            },
            title: '',
          })}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={({route}) => ({
            headerShown: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Search') {
                focused;
                require('./src/assets/images/searchicon.png');
              }
              return (
                <Image
                  source={require('./src/assets/images/searchicon2.png')}
                  style={{width: size, height: size, tintColor: color}}
                />
              );
            },
            title: '',
          })}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={({route}) => ({
            headerLeft: () => <HomeLogo />,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <Image source={require('./src/assets/images/profilephoto.png')} />
            ),
            title: '',
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
