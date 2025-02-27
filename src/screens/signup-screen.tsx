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


// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Alert } from 'react-native';
// import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme, Snackbar, SegmentedButtons } from 'react-native-paper';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { useNavigation } from '@react-navigation/native';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#F9C74F',
//     accent: '#277DA1',
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

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: "610446404679-ehqsev31sj8gfkopjakmm39qcj8jda8v.apps.googleusercontent.com",
//     });
//   }, []);

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
//   const handleGoogleSignIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { idToken, user: googleUser } = await GoogleSignin.signIn();

//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       const userCredential = await auth().signInWithCredential(googleCredential);
//       const firebaseUser = userCredential.user;

//       const userRef = firestore().collection('users').doc(firebaseUser.uid);
//       const doc = await userRef.get();

//       if (!doc.exists) {
//         await userRef.set({
//           email: googleUser.email,
//           name: googleUser.name,
//           photoUrl: googleUser.photo,
//           role: role, // From state (creator/management)
//           provider: 'google',
//           createdAt: firestore.Timestamp.now(),
//           lastLogin: firestore.Timestamp.now(),
//         });
//       }

//       navigation.navigate('Home');
//     } catch (error) {
//       console.log('Google Sign-Up Error:', error);
//       let errorMessage = 'Google Sign-Up Failed';

//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         errorMessage = 'Sign up cancelled';
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         errorMessage = 'Sign up already in progress';
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         errorMessage = 'Play services not available';
//       }

//       setError(errorMessage);
//       setVisible(true);
//     }
//   };

//   async function onGoogleButtonPress() {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const signInResult = await GoogleSignin.signIn();
//     console.log(signInResult)
//     // Try the new style of google-sign in result, from v13+ of that module
//     idToken = signInResult.data?.idToken;

//     if (!idToken) {
//       // if you are using older versions of google-signin, try old style result
//       idToken = signInResult.idToken;
//     }
//     if (!idToken) {
//       throw new Error('No ID token found');
//     }

//     const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);
//     navigation.navigate('Home');
//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }

//   return (

//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Text style={styles.title}>Join Banana Split</Text>
//         <Text style={styles.subtitle}>Create your account</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <TextInput
//           label="Email"
//           value={email}
//           onChangeText={setEmail}
//           mode="outlined"
//           autoCapitalize="none"
//           style={styles.input}
//         />
//         <TextInput
//           label="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           mode="outlined"
//           style={styles.input}
//         />
//         <TextInput
//           label="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           secureTextEntry
//           mode="outlined"
//           style={styles.input}
//         />

//         <Text style={styles.roleLabel}>Select your role:</Text>
//         <SegmentedButtons
//           value={role}
//           onValueChange={setRole}
//           buttons={[
//             {
//               value: 'creator',
//               label: 'Creator',
//               style: role === 'creator' ? styles.activeSegment : styles.segment,
//             },
//             {
//               value: 'management',
//               label: 'Management',
//               style: role === 'management' ? styles.activeSegment : styles.segment,
//             },
//           ]}
//           style={styles.segmentContainer}
//         />

//         <Button
//           mode="contained"
//           onPress={handleSignup}
//           loading={loading}
//           style={styles.button}
//           labelStyle={styles.buttonLabel}
//         >
//           Create Account
//         </Button>

//         <Button
//           mode="contained"
//           icon="google"
//           onPress={onGoogleButtonPress}
//           style={[styles.button, { backgroundColor: '#DB4437' }]}
//           labelStyle={styles.buttonLabel}
//         >
//           Sign Up with Google
//         </Button>

//         <Button
//           mode="text"
//           onPress={() => navigation.navigate('Login')}
//           style={styles.loginLink}
//         >
//           Already have an account? Log In
//         </Button>
//       </View>

//       <Snackbar
//         visible={visible}
//         onDismiss={() => setVisible(false)}
//         duration={3000}
//         action={{
//           label: 'Dismiss',
//           onPress: () => setVisible(false),
//         }}
//       >
//         {error}
//       </Snackbar>
//     </View>
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
//     color: '#FFF',
//   },
//   loginLink: {
//     alignSelf: 'center',
//     marginTop: 5,
//   },
// });

// export default SignupScreen;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "610446404679-ehqsev31sj8gfkopjakmm39qcj8jda8v.apps.googleusercontent.com", // Ensure this is the correct Client ID
    });
  }, []);

  // This function will handle the Google Sign-In
  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Get the user's ID token
      const signInResult = await GoogleSignin.signIn();
      console.log(signInResult);  // Log sign-in result to check the structure

      // Try the new style of google-sign-in result, from v13+ of that module
      let idToken = signInResult?.data?.idToken;

      if (!idToken) {
        // if you are using older versions of google-signin, try old style result
        idToken = signInResult.idToken;
      }

      if (!idToken) {
        throw new Error('No ID token found');
      }

      // Use the ID token to get a Google credential
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(googleCredential);
      const firebaseUser = userCredential.user;

      // Save the user token in AsyncStorage
      await AsyncStorage.setItem('userToken', firebaseUser.uid);

      // Navigate to the Users or Home screen after successful sign-in
      navigation.navigate('Users'); // You can change 'Users' to 'Home' if needed
    } catch (error) {
      console.log('Google Sign-In Error:', error);
      let errorMessage = 'Google Sign-In Failed';

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = 'Sign-In cancelled';
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = 'Sign-In already in progress';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = 'Play services not available';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      setVisible(true);
    }
  };

  // Check if the user is already logged in when the app starts
  useEffect(() => {
    const checkUserSession = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.navigate('Users');
      }
    };
    checkUserSession();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        icon="google"
        onPress={onGoogleButtonPress}
        style={[styles.button, { backgroundColor: '#DB4437' }]}
        labelStyle={styles.buttonLabel}
      >
        Login with Google
      </Button>

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
  button: {
    marginVertical: 10,
    paddingVertical: 6,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SignupScreen;
