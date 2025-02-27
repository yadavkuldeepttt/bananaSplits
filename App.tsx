import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import BottomTabNavigator from './src/navigator/bottom-tab-navigator';
import { StripeProvider } from '@stripe/stripe-react-native';
import { AuthProvider } from './src/context/Authcontext';


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

  return (
    <PaperProvider theme={theme}>
      {/* <AuthProvider> */}
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      {/* </AuthProvider> */}
    </PaperProvider>
  );
};

export default App;


// import React, { useEffect } from 'react';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
// import { Button } from 'react-native';

// const App = () => {
//   useEffect(() => {

//     GoogleSignin.configure({
//       webClientId: '610446404679-ehqsev31sj8gfkopjakmm39qcj8jda8v.apps.googleusercontent.com', // ✅ Get this from Firebase Console
//     });

//     // const subscriber = auth().onAuthStateChanged(user => {
//     //   if (user) {
//     //     console.log('User signed in:', user);
//     //   } else {
//     //     console.log('User signed out');
//     //   }
//     // });

//     // return subscriber; 
//   }, []);
//   async function onGoogleButtonPress() {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const signInResult = await GoogleSignin.signIn();
//   console.log(signInResult)
//     // Try the new style of google-sign in result, from v13+ of that module
//     idToken = signInResult.data?.idToken;

//     if (!idToken) {
//       // if you are using older versions of google-signin, try old style result
//       idToken = signInResult.idToken;
//     }
//     if (!idToken) {
//       throw new Error('No ID token found');
//     }
//   \
//     const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }

//   return (
//     <Button
//       title="Google Sign-In"
//       onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//     />
//   );
// };

// export default App;


// <PaperProvider theme={theme}>
//   <StripeProvider publishableKey={publishableKey} merchantIdentifier="merchant.identifier" // required for Apple Pay
//   urlScheme="your-url-scheme">
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>

//       <Stack.Screen name="BottomTab" component={BottomTabNavigator} />


//     </Stack.Navigator>
//   </NavigationContainer>
//   </StripeProvider>
// </PaperProvider>


// const [publishableKey, setPublishableKey] = useState('pk_test_51QwSASRpwoorPlG4ONgOlLQXGWN5NVgOxNIiGtevrgLOnLFrcFUVujfWv6vuQQQqIe3eWgtf6L5puKlNkEYOYDN7004VED0vrX');

// const fetchPublishableKey = async () => {
//   const key = await fetchKey(); // fetch key from your server here
//   setPublishableKey(key);
// };

// useEffect(() => {
//   fetchPublishableKey();
// }, []);





// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, PermissionsAndroid } from 'react-native';
// import GoogleFit, { Scopes } from 'react-native-google-fit';

// export default function App() {
//   const [steps, setSteps] = useState(0);
//   const [heartRates, setHeartRates] = useState([]);
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     requestPermissions();
//   }, []);

//   const requestPermissions = async () => {
//     const granted = await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
//       PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
//     ]);

//     if (Object.values(granted).every(status => status === 'granted')) {
//       authorizeGoogleFit();
//     }
//   };

//   const authorizeGoogleFit = async () => {
//     try {
//       const options = {
//         scopes: [
//           Scopes.FITNESS_ACTIVITY_READ,
//           Scopes.FITNESS_BODY_READ,
//           Scopes.FITNESS_HEART_RATE_READ,
//         ],
//       };

//       const authResult = await GoogleFit.authorize(options);
//       if (authResult.success) {
//         setAuth(true);
//         fetchHealthData();
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchHealthData = async () => {
//     // Get Steps
//     const opt = {
//       startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
//       endDate: new Date().toISOString(),
//       bucketUnit: 'DAY',
//       bucketInterval: 1,
//     };

//     const stepsRes = await GoogleFit.getDailyStepCountSamples(opt);
//     if (stepsRes.length > 0) {
//       setSteps(stepsRes[0].steps[0].value);
//     }

//     // Get Heart Rate
//     const heartRateOpt = {
//       startDate: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
//       endDate: new Date().toISOString(),
//       dataType: 'heart_rate_bpm',
//     };

//     const heartRateRes = await GoogleFit.getHeartRateSamples(heartRateOpt);
//     setHeartRates(heartRateRes);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Health Data</Text>

//       {auth ? (
//         <>
//           <View style={styles.card}>
//             <Text style={styles.label}>Today's Steps</Text>
//             <Text style={styles.value}>{steps}</Text>
//           </View>

//           <View style={styles.card}>
//             <Text style={styles.label}>Heart Rate History</Text>
//             {heartRates.map((item, index) => (
//               <Text key={index} style={styles.heartRateText}>
//                 {new Date(item.startDate).toLocaleTimeString()}: {Math.round(item.value)} BPM
//               </Text>
//             ))}
//           </View>
//         </>
//       ) : (
//         <Text>Please grant permissions and authorize Google Fit</Text>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 15,
//     elevation: 3,
//   },
//   label: {
//     fontSize: 18,
//     color: '#666',
//     marginBottom: 10,
//   },
//   value: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#2196F3',
//   },
//   heartRateText: {
//     fontSize: 16,
//     color: '#333',
//     marginVertical: 5,
//   },
// });

// // 610446404679-ocf596ro2v772imk75ri5aqslinknl2q.apps.googleusercontent.com



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   PermissionsAndroid,
//   Animated,
//   Dimensions,
//   TouchableOpacity,
//   StatusBar,
//   ActivityIndicator
// } from 'react-native';
// import GoogleFit, { Scopes } from 'react-native-google-fit';
// import { LineChart } from 'react-native-chart-kit';

// export default function App() {
//   const [steps, setSteps] = useState(0);
//   const [heartRates, setHeartRates] = useState([]);
//   const [auth, setAuth] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('steps');

//   // Animation values
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(30)).current;
//   const progressAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     requestPermissions();
    
//     // Start fade-in animation
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       })
//     ]).start();
//   }, []);

//   useEffect(() => {
//     if (steps > 0) {
//       // Animate progress bar based on steps (assuming 10000 steps is 100%)
//       Animated.timing(progressAnim, {
//         toValue: Math.min(steps / 10000, 1),
//         duration: 1500,
//         useNativeDriver: false,
//       }).start();
//     }
//   }, [steps]);

//   const requestPermissions = async () => {
//     const granted = await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
//       PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
//     ]);

//     if (Object.values(granted).every(status => status === 'granted')) {
//       authorizeGoogleFit();
//     } else {
//       setLoading(false);
//     }
//   };

//   const authorizeGoogleFit = async () => {
//     try {
//       const options = {
//         scopes: [
//           Scopes.FITNESS_ACTIVITY_READ,
//           Scopes.FITNESS_BODY_READ,
//           Scopes.FITNESS_HEART_RATE_READ,
//         ],
//       };

//       const authResult = await GoogleFit.authorize(options);
//       if (authResult.success) {
//         setAuth(true);
//         fetchHealthData();
//       } else {
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   const fetchHealthData = async () => {
//     try {
//       // Get Steps
//       const opt = {
//         startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
//         endDate: new Date().toISOString(),
//         bucketUnit: 'DAY',
//         bucketInterval: 1,
//       };

//       const stepsRes = await GoogleFit.getDailyStepCountSamples(opt);
//       if (stepsRes.length > 0 && stepsRes[0].steps && stepsRes[0].steps.length > 0) {
//         setSteps(stepsRes[0].steps[0].value);
//       }

//       // Get Heart Rate
//       const heartRateOpt = {
//         startDate: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
//         endDate: new Date().toISOString(),
//         dataType: 'heart_rate_bpm',
//       };

//       const heartRateRes = await GoogleFit.getHeartRateSamples(heartRateOpt);
//       setHeartRates(heartRateRes);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getHeartRateChartData = () => {
//     // If we have less than 2 data points, create some dummy data
//     if (heartRates.length < 2) {
//       return {
//         labels: ["00:00", "06:00", "12:00", "18:00"],
//         datasets: [
//           {
//             data: [70, 75, 80, 72],
//             color: (opacity = 1) => `rgba(255, 92, 92, ${opacity})`,
//             strokeWidth: 2
//           }
//         ]
//       };
//     }

//     // Use actual heart rate data
//     const sortedData = [...heartRates].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
//     const labels = sortedData.slice(0, 6).map(item => 
//       new Date(item.startDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
//     );
//     const data = sortedData.slice(0, 6).map(item => Math.round(item.value));

//     return {
//       labels,
//       datasets: [
//         {
//           data,
//           color: (opacity = 1) => `rgba(255, 92, 92, ${opacity})`,
//           strokeWidth: 2
//         }
//       ]
//     };
//   };

//   const renderTabContent = () => {
//     if (activeTab === 'steps') {
//       return (
//         <Animated.View 
//           style={[styles.tabContent, {
//             opacity: fadeAnim,
//             transform: [{ translateY: slideAnim }]
//           }]}
//         >
//           <View style={styles.stepsCard}>
//             <Text style={styles.stepsValue}>{steps.toLocaleString()}</Text>
//             <Text style={styles.stepsLabel}>steps today</Text>
            
//             <View style={styles.progressContainer}>
//               <Animated.View 
//                 style={[
//                   styles.progressBar, 
//                   { width: progressAnim.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: ['0%', '100%']
//                   })}
//                 ]} 
//               />
//             </View>
            
//             <Text style={styles.goalText}>
//               {steps < 10000 
//                 ? `${(10000 - steps).toLocaleString()} steps to reach your daily goal` 
//                 : 'Daily goal reached! 🎉'}
//             </Text>
//           </View>
          
//           <View style={styles.statsContainer}>
//             <View style={styles.statCard}>
//               <Text style={styles.statValue}>{Math.round(steps * 0.0008 * 100) / 100}</Text>
//               <Text style={styles.statLabel}>km</Text>
//             </View>
//             <View style={styles.statCard}>
//               <Text style={styles.statValue}>{Math.round(steps * 0.04)}</Text>
//               <Text style={styles.statLabel}>calories</Text>
//             </View>
//             <View style={styles.statCard}>
//               <Text style={styles.statValue}>{Math.round(steps * 0.0005 * 100) / 100}</Text>
//               <Text style={styles.statLabel}>hours</Text>
//             </View>
//           </View>
//         </Animated.View>
//       );
//     } else {
//       return (
//         <Animated.View 
//           style={[styles.tabContent, {
//             opacity: fadeAnim,
//             transform: [{ translateY: slideAnim }]
//           }]}
//         >
//           <View style={styles.heartRateCard}>
//             <Text style={styles.heartRateTitle}>Heart Rate</Text>
//             <Text style={styles.heartRateSubtitle}>Last 24 Hours</Text>
            
//             {heartRates.length > 0 ? (
//               <View style={styles.currentHRContainer}>
//                 <Text style={styles.currentHRValue}>
//                   {Math.round(heartRates[heartRates.length - 1]?.value || 0)}
//                 </Text>
//                 <Text style={styles.currentHRLabel}>BPM</Text>
//               </View>
//             ) : (
//               <Text style={styles.noDataText}>No recent heart rate data</Text>
//             )}
            
//             {/* <LineChart
//               data={getHeartRateChartData()}
//               width={Dimensions.get('window').width - 60}
//               height={180}
//               chartConfig={{
//                 backgroundColor: '#ffffff',
//                 backgroundGradientFrom: '#ffffff',
//                 backgroundGradientTo: '#ffffff',
//                 decimalPlaces: 0,
//                 color: (opacity = 1) => `rgba(255, 92, 92, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
//                 style: {
//                   borderRadius: 16,
//                 },
//                 propsForDots: {
//                   r: '5',
//                   strokeWidth: '2',
//                   stroke: '#ff5c5c'
//                 }
//               }}
//               bezier
//               style={styles.chart}
//             /> */}
            
//             <View style={styles.hrZonesContainer}>
//               <Text style={styles.hrZonesTitle}>Heart Rate Zones</Text>
//               <View style={styles.hrZones}>
//                 <View style={[styles.hrZone, { backgroundColor: '#91e6b3' }]}>
//                   <Text style={styles.hrZoneText}>Resting</Text>
//                   <Text style={styles.hrZoneRange}>60-70</Text>
//                 </View>
//                 <View style={[styles.hrZone, { backgroundColor: '#8fd3f4' }]}>
//                   <Text style={styles.hrZoneText}>Moderate</Text>
//                   <Text style={styles.hrZoneRange}>71-100</Text>
//                 </View>
//                 <View style={[styles.hrZone, { backgroundColor: '#ffd966' }]}>
//                   <Text style={styles.hrZoneText}>Active</Text>
//                   <Text style={styles.hrZoneRange}>101-140</Text>
//                 </View>
//                 <View style={[styles.hrZone, { backgroundColor: '#ff9f92' }]}>
//                   <Text style={styles.hrZoneText}>Peak</Text>
//                   <Text style={styles.hrZoneRange}>141+</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </Animated.View>
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
//         <ActivityIndicator size="large" color="#5e72e4" />
//         <Text style={styles.loadingText}>Loading your health data...</Text>
//       </View>
//     );
//   }

//   if (!auth) {
//     return (
//       <Animated.View 
//         style={[styles.container, {
//           opacity: fadeAnim,
//           transform: [{ translateY: slideAnim }]
//         }]}
//       >
//         <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
//         <View style={styles.authCard}>
//           <Text style={styles.authTitle}>Health Tracker</Text>
//           <Text style={styles.authDescription}>
//             Please grant permissions and authorize Google Fit to track your health data
//           </Text>
//           <TouchableOpacity 
//             style={styles.authButton}
//             onPress={requestPermissions}
//           >
//             <Text style={styles.authButtonText}>Authorize Now</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
//       <Animated.View 
//         style={[styles.header, {
//           opacity: fadeAnim,
//           transform: [{ translateY: slideAnim }]
//         }]}
//       >
//         <Text style={styles.headerTitle}>Health Tracker</Text>
//         <Text style={styles.headerDate}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</Text>
//       </Animated.View>

//       <View style={styles.tabBar}>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'steps' && styles.activeTab]}
//           onPress={() => setActiveTab('steps')}
//         >
//           <Text style={[styles.tabText, activeTab === 'steps' && styles.activeTabText]}>Steps</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'heart' && styles.activeTab]}
//           onPress={() => setActiveTab('heart')}
//         >
//           <Text style={[styles.tabText, activeTab === 'heart' && styles.activeTabText]}>Heart Rate</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {renderTabContent()}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//   },
//   loadingText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#5e72e4',
//   },
//   header: {
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#32325d',
//   },
//   headerDate: {
//     fontSize: 16,
//     color: '#8898aa',
//     marginTop: 4,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginRight: 10,
//     borderRadius: 20,
//   },
//   activeTab: {
//     backgroundColor: '#5e72e4',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#8898aa',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: 'white',
//   },
//   scrollContent: {
//     paddingHorizontal: 20,
//     paddingBottom: 30,
//   },
//   tabContent: {
//     marginTop: 10,
//   },
//   stepsCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 20,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     alignItems: 'center',
//   },
//   stepsValue: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: '#5e72e4',
//     marginBottom: 5,
//   },
//   stepsLabel: {
//     fontSize: 18,
//     color: '#8898aa',
//     marginBottom: 20,
//   },
//   progressContainer: {
//     width: '100%',
//     height: 10,
//     backgroundColor: '#f6f9fc',
//     borderRadius: 5,
//     marginBottom: 10,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     backgroundColor: '#5e72e4',
//     borderRadius: 5,
//   },
//   goalText: {
//     fontSize: 14,
//     color: '#8898aa',
//     marginTop: 5,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 15,
//     marginHorizontal: 5,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#5e72e4',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#8898aa',
//     marginTop: 5,
//   },
//   heartRateCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 20,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   heartRateTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#32325d',
//   },
//   heartRateSubtitle: {
//     fontSize: 14,
//     color: '#8898aa',
//     marginBottom: 15,
//   },
//   currentHRContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   currentHRValue: {
//     fontSize: 42,
//     fontWeight: 'bold',
//     color: '#ff5c5c',
//   },
//   currentHRLabel: {
//     fontSize: 18,
//     color: '#8898aa',
//     marginBottom: 8,
//     marginLeft: 5,
//   },
//   noDataText: {
//     fontSize: 16,
//     color: '#8898aa',
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   chart: {
//     marginVertical: 10,
//     borderRadius: 16,
//   },
//   hrZonesContainer: {
//     marginTop: 10,
//   },
//   hrZonesTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#32325d',
//     marginBottom: 10,
//   },
//   hrZones: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   hrZone: {
//     flex: 1,
//     padding: 10,
//     marginHorizontal: 2,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   hrZoneText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#32325d',
//   },
//   hrZoneRange: {
//     fontSize: 10,
//     color: '#525f7f',
//   },
//   authCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 30,
//     margin: 20,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     alignItems: 'center',
//   },
//   authTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#32325d',
//     marginBottom: 20,
//   },
//   authDescription: {
//     fontSize: 16,
//     color: '#8898aa',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   authButton: {
//     backgroundColor: '#5e72e4',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//     elevation: 2,
//   },
//   authButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });