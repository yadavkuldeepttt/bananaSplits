import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Linking, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Provider as PaperProvider, Text, Surface, Button, DefaultTheme } from 'react-native-paper';
import { create, open, dismissLink, LinkSuccess, LinkExit, LinkIOSPresentationStyle, LinkLogLevel } from 'react-native-plaid-link-sdk';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#98FB98', // Light green color for button
    warning: '#FFF3CD', // Light yellow for warning box
    warningText: '#856404',
    accent: '#FF4D4D',
  },
};

const WarningBox = ({ children }) => (
  <Surface style={[styles.warningBox, { backgroundColor: theme.colors.warning }]}>
    <Text style={[styles.warningText, { color: theme.colors.warningText }]}>{children}</Text>
  </Surface>
);

const API_BASE_URL = Platform.select({
  android: 'http://192.168.0.196:8080/api', // For Android emulator
  ios: 'http://10.0.2.2:8080/api', // For Android emulator
  default: 'http://localhost:8080/api', // Fallback
});

const DashboardBananaSplit = ({ navigation }: any) => {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [isBankLinked, setIsBankLinked] = useState<boolean>(false); // To track if bank is linked
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createLinkToken = useCallback(async () => {
    try {
      const url = `${API_BASE_URL}/create_link_token`;
      console.log('Attempting to fetch from:', url);

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response status:', response);

      if (!response.ok) {
        const text = await response.text();
        console.error('Server response:', text);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setLinkToken(data.link_token);
    } catch (err) {
      console.error('Network error:', err.message);
      console.error('Full error object:', err);
    }
  }, []);

  useEffect(() => {
    const checkBankLinkStatus = async () => {
      try {
        const linkedStatus = await AsyncStorage.getItem('isBankLinked');
        if (linkedStatus === 'true') {
          setIsBankLinked(true); 
        }
      } catch (err) {
        console.error('Error checking bank link status:', err);
      }
    };

    checkBankLinkStatus();

    if (!linkToken && !isBankLinked) {
      createLinkToken();
    } else {
      // create({ token: linkToken });
    }
  }, [linkToken, isBankLinked]);

  const handleOpenLink = () => {
    open({
      onSuccess: async (success: LinkSuccess) => {
        try {
          const response = await fetch(`${API_BASE_URL}/exchange_public_token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ public_token: success.publicToken }),
          });
          console.log('response', response);
          
          // Store that the user has linked a bank account
          await AsyncStorage.setItem('isBankLinked', 'true');
          setIsBankLinked(true); // Update the state
          
          // navigation.navigate('Success', success); // Uncomment to navigate after success
        } catch (err) {
          console.error('Error exchanging token:', err);
        }
      },
      onExit: (linkExit: LinkExit) => {
        console.log('Exit:', linkExit);
        dismissLink();
      },
      iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
      logLevel: LinkLogLevel.ERROR,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <WarningBox>
            Currently, we will not be able pay you out.{'\n\n'}
            But don't worry, Your money will be held in your melon account until you complete necessary KYC information in the{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('#')}>
              Verification
            </Text>{' '}
            section of your Settings.
          </WarningBox>

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Welcome,{'\n'}
              Jkakak! Link a{'\n'}
              bank account to{'\n'}
              get started.
            </Text>
          </View>

          <Button
            mode="contained"
            style={styles.getStartedButton}
            contentStyle={styles.buttonContent}
            onPress={handleOpenLink}
            disabled={isBankLinked} // Disable if bank account is already linked
          >
            Link bank account
          </Button>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('CreateSplit')}
            style={styles.getStartedButton}
            contentStyle={styles.buttonContent}
            disabled={!isBankLinked} // Disable if bank account isn't linked
          >
            Create New Split
          </Button>

          <WarningBox>
            Please note that we have removed Navy Federal from the list of supported Banks.{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('#')}>
              Read More
            </Text>
          </WarningBox>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 24,
  },
  warningBox: {
    padding: 16,
    borderRadius: 8,
  },
  warningText: {
    fontSize: 14,
    lineHeight: 20,
  },
  welcomeContainer: {
    marginVertical: 24,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  linkButton: {
    borderRadius: 8,
    paddingVertical: 8,
  },
  linkButtonLabel: {
    fontSize: 16,
    paddingVertical: 4,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  getStartedButton: {
    backgroundColor: theme.colors.accent,
    borderRadius: 24,
  },
  dashBoardButton: {
    backgroundColor: theme.colors.accent,
    borderRadius: 24,
    width: '88%',
    alignSelf: 'center',
  },
  buttonContent: {
    height: 48,
  },
});

export default DashboardBananaSplit;
