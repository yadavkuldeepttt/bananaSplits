// DashboardBananaSplit.tsx
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Linking, Alert } from 'react-native';
import { Button, Text, Surface, useTheme } from 'react-native-paper';
import { create, open, dismissLink, LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_BASE_URL = "http://192.168.0.196:8080/api";

export default function DashboardBananaSplit() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const createLinkToken = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/create_link_token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error('Failed to create link token');
      
      const data = await response.json();
      console.log(data)
      setLinkToken(data.link_token);
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  }, []);

  const checkConnectionStatus = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/is_account_connected`);
      const { status } = await response.json();
      setIsConnected(status);
    } catch (err) {
      console.error('Connection check failed:', err);
    }
  }, []);

  useEffect(() => {
    checkConnectionStatus();
    if (!isConnected) createLinkToken();
  }, [isConnected]);

  const handleOpenLink = () => {
    if (!linkToken) return;

    open({
      token: linkToken,
      onSuccess: async (success: LinkSuccess) => {
        try {
          await fetch(`${API_BASE_URL}/exchange_public_token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ public_token: success.publicToken }),
          });
          setIsConnected(true);
          // navigation.navigate('CreateSplit');
        } catch (err) {
          Alert.alert('Error', 'Failed to link account');
        }
      },
      onExit: (linkExit: LinkExit) => {
        dismissLink();
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.card}>
        <Text variant="headlineMedium" style={styles.title}>
          Bank Account Setup
        </Text>

        {isConnected ? (
          <>
            <Text style={styles.connectedText}>✅ Account Connected</Text>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('CreateSplit')}
              style={styles.button}
            >
              Create New Split
            </Button>
          </>
        ) : (
          <Button 
            mode="contained" 
            onPress={handleOpenLink}
            style={styles.button}
            loading={!linkToken}
          >
            Link Bank Account
          </Button>
        )}
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 24,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
  },
  connectedText: {
    textAlign: 'center',
    marginVertical: 16,
    color: 'green',
  },
});