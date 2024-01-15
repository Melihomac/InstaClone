import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';
import Logo from '../../components/LogoComponent/FontLogo';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../../FirebaseConfig';

const Signup = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = phone => {
    const phoneRegex =
      /^(\+?90(\s?|\-?)?)?(\()?([0-9]{3})(?:\))?(\s?|\-?)?([0-9]{3})(\s?|\-?)?([0-9]{2})(\s?|\-?)?([0-9]{2})$/;
    return phoneRegex.test(phone);
  };
  const signUp = async () => {
    if (!validateEmail(email) || !validatePhone(phone) || username === '') {
      setError('Invalid e-mail address or phone number');
      setLoading(false);
      return;
    } else {
      setError(null);
    }
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      ).then(data => {
        console.log('User ID : ', data.user.uid);
        const newPostRef = database().ref('users').push();
        newPostRef
          .set({
            username: username,
          })
          .then(() => console.log('Data set.'));
      });
      console.log(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.loginForm}>
        <View style={styles.textInputWrapper}>
          <TextInput
            autoCapitalize="none"
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder="Username"
            style={styles.input}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            style={styles.input}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            autoCapitalize="none"
            onChangeText={text => setPhone(text)}
            value={username}
            placeholder="Phone number"
            style={styles.input}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
            value={username}
            placeholder="Password"
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={signUp} style={styles.btnLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.stick} />
        <View style={styles.accountSignup}>
          <Text>Already have an account ? </Text>
          <Text style={styles.signUp} onPress={navigation.goBack}>
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
  },
  logo: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 2,
    marginVertical: 7.5,
    marginLeft: 25,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  btnLogin: {
    marginTop: 7.5,
    width: '100%',
    height: 44,
    borderRadius: 5,
    backgroundColor: '#318bfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  stick: {
    position: 'absolute',
    width: '130%',
    backgroundColor: '#C5C5C5',
    height: 1,
    bottom: -200,
  },
  accountSignup: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -235,
    right: 50,
  },
  signUp: {color: '#318bfb'},
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    bottom: -200,
  },
});

export default Signup;
