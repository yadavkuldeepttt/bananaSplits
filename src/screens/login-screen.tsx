import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme, Snackbar } from 'react-native-paper';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F9C74F', // Banana yellow
    accent: '#277DA1', // Teal accent
    background: '#F9F7F7',
    text: '#1D1E2C',
    surface: '#FFFFFF',
  },
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "610446404679-ehqsev31sj8gfkopjakmm39qcj8jda8v.apps.googleusercontent.com",
    });
  }, []);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError('Email and password are required');
      setVisible(true);
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setVisible(true);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken, user: googleUser } = await GoogleSignin.signIn();
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      const firebaseUser = userCredential.user;
  
      const userRef = firestore().collection('users').doc(firebaseUser.uid);
      const doc = await userRef.get();
  
      if (!doc.exists) {
        await userRef.set({
          email: googleUser.email,
          name: googleUser.name,
          photoUrl: googleUser.photo,
          role: 'user', // Default role
          provider: 'google',
          createdAt: firestore.Timestamp.now(),
          lastLogin: firestore.Timestamp.now(),
        });
      } else {
        await userRef.update({
          lastLogin: firestore.Timestamp.now()
        });
      }
  
      navigation.navigate('Home');
    } catch (error) {
      console.log('Google Sign-In Error:', error);
      let errorMessage = 'Google Sign-In Failed';
      
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = 'Sign in cancelled';
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = 'Sign in already in progress';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = 'Play services not available';
      }
      
      setError(errorMessage);
      setVisible(true);
    }
  };

  return (
    
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Banana Split</Text>
          <Text style={styles.subtitle}>Split bills, not friendship</Text>
        </View>
        
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          
          <Button
            mode="contained"
            onPress={handleLogin}
            loading={loading}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Log In
          </Button>
          
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Signup')}
            style={[styles.button, styles.signupButton]}
            labelStyle={styles.signupButtonLabel}
          >
            Create an Account
          </Button>
        </View>
        
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <Button
              icon="google"
              mode="outlined"
              onPress={handleGoogleSignIn}
              style={styles.socialButton}
            >
              Google
            </Button>
            <Button
              icon="apple"
              mode="outlined"
              onPress={() => {}}
              style={styles.socialButton}
            >
              Apple
            </Button>
          </View>
        </View>

        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          duration={3000}
          action={{
            label: 'Dismiss',
            onPress: () => setVisible(false),
          }}
        >
          {error}
        </Snackbar>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F7',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F9C74F',
    marginTop: 10,
  },
  subtitle: {
    color: '#1D1E2C',
    opacity: 0.7,
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 6,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D1E2C',
  },
  signupButton: {
    borderColor: '#277DA1',
  },
  signupButtonLabel: {
    color: '#277DA1',
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  socialText: {
    color: '#1D1E2C',
    opacity: 0.7,
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 5,
  },
});

export default LoginScreen;