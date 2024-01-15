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

const Login = ({navigation}: any) => {
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
            placeholder="Username, email or phone number"
            style={styles.input}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            style={styles.input}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
        <TouchableOpacity onPress={signUp} style={styles.btnLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.stick} />
        <View style={styles.accountSignup}>
          <Text>Don't you have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUp}>Sign up</Text>
          </TouchableOpacity>
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
    bottom: -300,
  },
  accountSignup: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -335,
    right: 50,
  },
  signUp: {color: '#318bfb'},
});

export default Login;
