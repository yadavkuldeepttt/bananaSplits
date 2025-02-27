import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, Text, Surface } from 'react-native-paper';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const options = [
    {
      id: 1,
      title: "I'm an agency who wants to get paid by my clients",
    },
    {
      id: 2,
      title: "I'm a creator who wants my agency to use Melon",
    },
    {
      id: 3,
      title: "I want to become a Melon affiliate",
    },
    {
      id: 4,
      title: "something else",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      {/* <Surface style={styles.headerSection} elevation={0}>
        <Text style={styles.logoText}>melon</Text>
        <Text style={styles.logoEmoji}>🍉</Text>
      </Surface> */}

      {/* Welcome Text */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome To Banana Split</Text>
        <Text style={styles.welcomeSubtitle}>Lets Get You Started</Text>
        <Text style={styles.optionsText}>Would you rather...</Text>
      </View>

      {/* Options Grid */}
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Card
            key={option.id}
            style={styles.card}
            onPress={() => navigation.navigate('WelcomeBook')}
          >
            <Card.Content>
              <Text style={styles.cardText}>{option.title}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerSection: {
    backgroundColor: '#FFFFE0',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  logoEmoji: {
    fontSize: 20,
    marginLeft: 4,
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: "center"
  },
  welcomeSubtitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  optionsText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  card: {
    width: '45%',
    backgroundColor: '#ffffac',
    borderRadius: 8,
    minHeight: 120,
  },
  cardText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
});

export default WelcomeScreen;