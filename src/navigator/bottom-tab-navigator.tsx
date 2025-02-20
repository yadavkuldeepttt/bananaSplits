import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // import Stack Navigator
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import SignupScreen from '../screens/signup-screen';
import WelcomeScreen from '../screens/welcome-screen';
import WelcomeBookScreen from '../screens/welcome-book-screen';
import { TextCmp } from '../components/typography/text.component';
import DashboardBananaSplit from '../screens/dashboard-banana-split';
import SuccessScreen from '../components/success-screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create a Stack navigator

// Separate Stack for Login Screens
const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="WelcomeBook"
      component={WelcomeBookScreen}
      options={{
        headerShown: true, title: "Banana splits", headerStyle: {
          backgroundColor: '#ffffac',
        },
      }}
    />
    <Stack.Screen
      name="DashboarBananaSplit"
      component={DashboardBananaSplit}
      options={{
        headerShown: true, title: "Banana splits", headerStyle: {
          backgroundColor: '#ffffac',
        },
      }}
    />
     <Stack.Screen
      name="Success"
      component={SuccessScreen}
      options={{
        headerShown: true, title: "Banana splits", headerStyle: {
          backgroundColor: '#ffffac',
        },
      }}
    />
  </Stack.Navigator>
);

const BottomTabNavigator = () => {
  const theme = useTheme();
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#ffbe00', // yellow from logo
      accent: '#ff3d00',  // orange-red from buttons
      background: '#ffffab', // light yellow background
      text: '#1e1e2c',
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: customTheme.colors.background,
          borderTopWidth: 1,
          borderColor: '#eee',
          paddingVertical: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: customTheme.colors.primary,
          marginBottom: 10
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" size={24} color={focused ? customTheme.colors.primary : color} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? customTheme.colors.primary : color,
                fontSize: 12,
                marginBottom: 10,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="bank-transfer" size={24} color={focused ? customTheme.colors.primary : color} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? customTheme.colors.primary : color,
                fontSize: 12,
                marginBottom: 10,
              }}
            >
              Dashboard
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="account-group" size={24} color={focused ? customTheme.colors.primary : color} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? customTheme.colors.primary : color,
                fontSize: 12,
                marginBottom: 10,
              }}
            >
              Split
            </Text>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="account" size={24} color={focused ? customTheme.colors.primary : color} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? customTheme.colors.primary : color,
                fontSize: 12,
                marginBottom: 10,
              }}
            >
              Profile
            </Text>
          ),
        }}
      /> */}

    </Tab.Navigator>
  );
};

const PaymentsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Payments Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Profile Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabNavigator;
