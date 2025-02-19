// import React, { useEffect, useRef, useState } from 'react';
// import ErrorBoundary from 'react-native-error-boundary';
// import ErrorFallbackComponent from './src/components/error-fallback.component';
// import { PaperProvider, Text } from 'react-native-paper';
// import { customTheme } from './src/components/theme';
// import { View } from 'react-native';
// const App = () => {

//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
//       <PaperProvider theme={customTheme}>
//     <View><Text>dfdfsdfdf</Text></View>
//       </PaperProvider>

//     </ErrorBoundary>
//   );
// }



// App.js with minimal navigation setup
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { auth } from './src/screens/config';
import HomeScreen from './src/screens/home-screen';
import SignupScreen from './src/screens/signup-screen';
import LoginScreen from './src/screens/login-screen';


const Stack = createStackNavigator();

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

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //     if (initializing) setInitializing(false);
  //   });
    
  //   return subscriber;
  // }, [initializing]);

  // if (initializing) return null;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!user ? (
            <> 
              <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />

             </>
          ) : (
            null
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;


