import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { auth } from './src/screens/config';
import HomeScreen from './src/screens/home-screen';
import SignupScreen from './src/screens/signup-screen';
import LoginScreen from './src/screens/login-screen';
import BottomTabNavigator from './src/navigator/bottom-tab-navigator';



const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
          {/* {!user ? (
            <> */}
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} />

          {/* </>
          ) : (
            null
          )} */}

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;


