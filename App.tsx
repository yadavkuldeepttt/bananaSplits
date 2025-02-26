// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
// import { auth } from './src/screens/config';
// import HomeScreen from './src/screens/home-screen';
// import SignupScreen from './src/screens/signup-screen';
// import LoginScreen from './src/screens/login-screen';
// import BottomTabNavigator from './src/navigator/bottom-tab-navigator';
// import { StripeProvider } from '@stripe/stripe-react-native';


// const Stack = createStackNavigator();

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

// const App = () => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   const subscriber = auth().onAuthStateChanged((user) => {
//   //     setUser(user);
//   //     if (initializing) setInitializing(false);
//   //   });

//   //   return subscriber;
//   // }, [initializing]);

//   // if (initializing) return null;
//   const [publishableKey, setPublishableKey] = useState('pk_test_51QwSASRpwoorPlG4ONgOlLQXGWN5NVgOxNIiGtevrgLOnLFrcFUVujfWv6vuQQQqIe3eWgtf6L5puKlNkEYOYDN7004VED0vrX');

//   const fetchPublishableKey = async () => {
//     const key = await fetchKey(); // fetch key from your server here
//     setPublishableKey(key);
//   };

//   useEffect(() => {
//     fetchPublishableKey();
//   }, []);
//   return (
//     <PaperProvider theme={theme}>
//       {/* <StripeProvider publishableKey={publishableKey} merchantIdentifier="merchant.identifier" // required for Apple Pay
//         urlScheme="your-url-scheme"> */}
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
//             {/* {!user ? (
//             <> */}
//             <Stack.Screen name="BottomTab" component={BottomTabNavigator} />

//             {/* </>
//           ) : (
//             null
//           )} */}

//           </Stack.Navigator>
//         </NavigationContainer>
//       {/* </StripeProvider> */}
//     </PaperProvider>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native';

const App = () => {
  useEffect(() => {

    GoogleSignin.configure({
      webClientId: '886750717442-h9lb3fpgj7gd2d6voeit2vnmubhghngv.apps.googleusercontent.com', // ✅ Get this from Firebase Console
    });

    // const subscriber = auth().onAuthStateChanged(user => {
    //   if (user) {
    //     console.log('User signed in:', user);
    //   } else {
    //     console.log('User signed out');
    //   }
    // });

    // return subscriber; 
  }, []);
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
  
    // Try the new style of google-sign in result, from v13+ of that module
    idToken = signInResult.data?.idToken;

    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
};

export default App;