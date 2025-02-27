import React, { useEffect, useState } from 'react';
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
import SuccessScreen from '../demoscreens/SuccessScreen';
import PaymentScreen from '../demoscreens/PaymentScreen';
// import CreateSplitForm from '../demoscreens/createSplitform';
import CreateSplitModal from '../screens/create-split-modal';
import CreateSplitForm from '../screens/create-splits';
// import DashboardBananaSplit from '../demoscreens/DashboradBanansplit';
// import SuccessScreen from '../components/success-screen';
// import CreateSplitModal from '../screens/create-split-modal';
// import CreateSplitForm from '../screens/create-splits';
// import PaymentScreen from '../screens/payment-screen';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const LoginStack = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      // setUser(userState);
      console.log(userState)
      if (initializing) setInitializing(false);
    });

    return subscriber;
  }, []);
  return (
    <Stack.Navigator>

      {user ? (
        <>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: true, title: "Banana Split", headerStyle: {
                backgroundColor: '#ffffac',
              },
            }}
          />
          <Stack.Screen
            name="WelcomeBook"
            component={WelcomeBookScreen}
            options={{
              headerShown: true, title: "Banana Split", headerStyle: {
                backgroundColor: '#ffffac',
              },
            }}
          />
          <Stack.Screen
            name="DashboarBananaSplit"
            component={DashboardBananaSplit}
            options={{
              headerShown: true, title: "Banana Split", headerStyle: {
                backgroundColor: '#ffffac',
              },
            }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{
              headerShown: true, title: "Banana Split", headerStyle: {
                backgroundColor: '#ffffac',
              },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </>
      )}


    </Stack.Navigator>
  );
}

const DashStack = createStackNavigator();

const DashBoardStack = () => {
  return (
    <DashStack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
      <DashStack.Screen name="Dashboard" component={DashboardBananaSplit} />
      <DashStack.Screen name="CreateSplit" component={CreateSplitForm} />
      <DashStack.Screen name="Payment" component={PaymentScreen} />
      <DashStack.Screen name="Success" component={SuccessScreen} />
    </DashStack.Navigator>
  );
}

const BottomTabNavigator = () => {
  const theme = useTheme();
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#ffbe00', // yellow from logo
      accent: '#ff3d00',  // orange-red from buttons
      background: '#ffffab',
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
        component={DashBoardStack}
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
          headerShown: true,
          title: "Banana Split", headerStyle: {
            backgroundColor: '#ffffac',
          },

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
    </Tab.Navigator>
  );
};

const PaymentsScreen = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.screenContainer}>
      {/* <CreateSplitModal
      visible={visible}
      onDismiss={() => setVisible(false)}
      onContinue={(type) => {
        console.log('Selected type:', type);
        setVisible(false);
      }}
    /> */}
      {/* <CreateSplitForm/> */}
      <PaymentScreen />
    </View>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabNavigator;
