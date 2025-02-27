// PaymentScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Text, ProgressBar, useTheme, TextInput } from 'react-native-paper';
import { useStripe } from '@stripe/stripe-react-native';
import { useNavigation } from '@react-navigation/native';

const API_BASE_URL = "http://192.168.0.196:8080/api";

export default function PaymentScreen({ route }) {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const navigation = useNavigation();
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const { splits } = route.params;

    const handlePayment = async (amount: number) => {
        setLoading(true);
        try {
            // 1. Create Payment Intent
            const response = await fetch(`${API_BASE_URL}/create-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: amount * 100,
                    //   currency: 'usd',
                    splits: splits.map(split => ({
                        percentage: split.percentage,
                        email: split.email
                    }))
                }),
            });
            console.log(response, "this is the response")
            const { clientSecret } = await response.json();

            // 2. Initialize Payment Sheet
            const { error } = await initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName: 'Melon',
            });

            if (error) throw error;

            // 3. Present Payment Sheet
            const { error: paymentError } = await presentPaymentSheet();

            if (paymentError) throw paymentError;

            // 4. Handle successful payment
            navigation.navigate('Success');
        } catch (err) {
            Alert.alert('Payment Failed', err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineSmall" style={styles.title}>
                Enter Payment Amount
            </Text>
            {/* 
      <TextInput
        label="Amount"
        keyboardType="numeric"
        style={styles.input}
        left={<TextInput.Affix text="$" />}
        onChangeText={setAmount}
      /> */}

            {loading ? (
                <ProgressBar indeterminate />
            ) : (
                <Button
                    mode="contained"
                    onPress={() => handlePayment("4000")}
                    style={styles.button}
                >
                    Process Payment
                </Button>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        marginBottom: 24,
    },
    button: {
        marginTop: 16,
    },
});