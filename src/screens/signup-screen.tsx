// // src/screens/SignupScreen.js
// import React, { useState } from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme, Snackbar, SegmentedButtons } from 'react-native-paper';
// import { auth, firestore } from '../screens/config';
// import { useNavigation } from '@react-navigation/native';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#F9C74F', // Banana yellow
//     accent: '#277DA1', // Teal accent
//     background: '#F9F7F7',
//     text: '#1D1E2C',
//     surface: '#FFFFFF',
//   },
// };

// const SignupScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [role, setRole] = useState('creator');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [visible, setVisible] = useState(false);
//   const navigation = useNavigation();

//   const handleSignup = async () => {
//     if (email === '' || password === '' || confirmPassword === '') {
//       setError('All fields are required');
//       setVisible(true);
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       setVisible(true);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await auth().createUserWithEmailAndPassword(email, password);
//       if (response.user) {
//         await firestore().collection('users').doc(response.user.uid).set({
//           email: email,
//           role: role,
//           createdAt: firestore.Timestamp.now(),
//         });
//       }
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setVisible(true);
//       setLoading(false);
//     }
//   };

//   return (
//     <PaperProvider theme={theme}>
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>
//           {/* <Image
//             source={require('../assets/banana-split-logo.png')}
//             style={styles.logo}
//             resizeMode="contain"
//           /> */}
//           <Text style={styles.title}>Join Banana Split</Text>
//           <Text style={styles.subtitle}>Create your account</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <TextInput
//             label="Email"
//             value={email}
//             onChangeText={setEmail}
//             mode="outlined"
//             autoCapitalize="none"
//             style={styles.input}
//           />
//           <TextInput
//             label="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             mode="outlined"
//             style={styles.input}
//           />
//           <TextInput
//             label="Confirm Password"
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             secureTextEntry
//             mode="outlined"
//             style={styles.input}
//           />

//           <Text style={styles.roleLabel}>Select your role:</Text>
//           <SegmentedButtons
//             value={role}
//             onValueChange={setRole}
//             buttons={[
//               {
//                 value: 'creator',
//                 label: 'Creator',
//                 style: role === 'creator' ? styles.activeSegment : styles.segment,
//               },
//               {
//                 value: 'management',
//                 label: 'Management',
//                 style: role === 'management' ? styles.activeSegment : styles.segment,
//               },
//             ]}
//             style={styles.segmentContainer}
//           />

//           <Button
//             mode="contained"
//             onPress={handleSignup}
//             loading={loading}
//             style={styles.button}
//             labelStyle={styles.buttonLabel}
//           >
//             Create Account
//           </Button>

//           <Button
//             mode="text"
//             onPress={() => navigation.navigate('Login')}
//             style={styles.loginLink}
//           >
//             Already have an account? Log In
//           </Button>
//         </View>

//         <Snackbar
//           visible={visible}
//           onDismiss={() => setVisible(false)}
//           duration={3000}
//           action={{
//             label: 'Dismiss',
//             onPress: () => setVisible(false),
//           }}
//         >
//           {error}
//         </Snackbar>
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F7F7',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#F9C74F',
//     marginTop: 10,
//   },
//   subtitle: {
//     color: '#1D1E2C',
//     opacity: 0.7,
//     marginTop: 5,
//   },
//   formContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   input: {
//     marginBottom: 15,
//     backgroundColor: '#FFFFFF',
//   },
//   roleLabel: {
//     fontSize: 16,
//     color: '#1D1E2C',
//     marginBottom: 10,
//   },
//   segmentContainer: {
//     marginBottom: 20,
//   },
//   segment: {
//     borderColor: '#F9C74F',
//   },
//   activeSegment: {
//     backgroundColor: '#F9C74F',
//   },
//   button: {
//     marginVertical: 10,
//     paddingVertical: 6,
//   },
//   buttonLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1D1E2C',
//   },
//   loginLink: {
//     alignSelf: 'center',
//     marginTop: 5,
//   },
// });

// export default SignupScreen;


import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme, Snackbar, SegmentedButtons } from 'react-native-paper';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F9C74F',
    accent: '#277DA1',
    background: '#F9F7F7',
    text: '#1D1E2C',
    surface: '#FFFFFF',
  },
};

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('creator');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "265115868322-q5nekpevht3bnbdl6fk8uv1u6fj3nt57.apps.googleusercontent.com", 
    });
  }, []);

  const handleSignup = async () => {
    if (email === '' || password === '' || confirmPassword === '') {
      setError('All fields are required');
      setVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setVisible(true);
      return;
    }

    setLoading(true);
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      if (response.user) {
        await firestore().collection('users').doc(response.user.uid).set({
          email: email,
          role: role,
          createdAt: firestore.Timestamp.now(),
        });
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setVisible(true);
      setLoading(false);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { idToken } = await GoogleSignin.signIn();
  //     console.log(idToken, "this is the tolkek")
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     const userCredential = await auth().signInWithCredential(googleCredential);

  //     const { user } = userCredential;

  //     // Check if user exists in Firestore
  //     const userRef =  firestore().collection('users').doc(user?.uid);
  //     const doc = await userRef.get();

  //     if (!doc.exists) {
  //       await userRef.set({
  //         email: user.email,
  //         role: role, // Default role
  //         createdAt: firestore.Timestamp.now(),
  //       });
  //     }

  //     console.log('Google Sign-In Success:', user);
  //     navigation.navigate('Home');

  //   } catch (error) {
  //     console.log(error)
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       setError('Google Sign-In Cancelled');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       setError('Google Sign-In in Progress');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       setError('Play Services Not Available');
  //     } else {
  //       setError('Google Sign-In Failed');
  //     }
  //     setVisible(true);
  //   }
  // };


  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices();
    // Get the users ID token
    const idToken = await GoogleSignin.signIn();
  
   console.log(idToken)
   Alert.alert("success login")
   
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info: ', userInfo);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Join Banana Split</Text>
          <Text style={styles.subtitle}>Create your account</Text>
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
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />

          <Text style={styles.roleLabel}>Select your role:</Text>
          <SegmentedButtons
            value={role}
            onValueChange={setRole}
            buttons={[
              {
                value: 'creator',
                label: 'Creator',
                style: role === 'creator' ? styles.activeSegment : styles.segment,
              },
              {
                value: 'management',
                label: 'Management',
                style: role === 'management' ? styles.activeSegment : styles.segment,
              },
            ]}
            style={styles.segmentContainer}
          />

          <Button
            mode="contained"
            onPress={handleSignup}
            loading={loading}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Create Account
          </Button>

          <Button
            mode="contained"
            icon="google"
            onPress={signIn}
            style={[styles.button, { backgroundColor: '#DB4437' }]}
            labelStyle={styles.buttonLabel}
          >
            Sign Up with Google
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.navigate('Login')}
            style={styles.loginLink}
          >
            Already have an account? Log In
          </Button>
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
    </PaperProvider>
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
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  roleLabel: {
    fontSize: 16,
    color: '#1D1E2C',
    marginBottom: 10,
  },
  segmentContainer: {
    marginBottom: 20,
  },
  segment: {
    borderColor: '#F9C74F',
  },
  activeSegment: {
    backgroundColor: '#F9C74F',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 6,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  loginLink: {
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default SignupScreen;
