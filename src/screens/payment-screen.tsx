import { useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import { Button, Alert } from "react-native";

const PaymentScreen = ({ accountId }) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [clientSecret, setClientSecret] = useState("");

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch("https://your-server.com/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5000, accountId }), // $50
      });
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) return;

    const { error } = await presentPaymentSheet({ clientSecret });
    if (error) {
      Alert.alert("Payment failed", error.message);
    } else {
      Alert.alert("Success", "Payment complete!");
    }
  };

  return (
    <>
      <Button title="Fetch Payment Intent" onPress={fetchPaymentIntent} />
      <Button title="Pay Now" onPress={openPaymentSheet} />
    </>
  );
};

export default PaymentScreen;
