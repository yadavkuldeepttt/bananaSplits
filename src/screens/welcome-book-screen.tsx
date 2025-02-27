import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import {
  Provider as PaperProvider,
  Surface,
  Text,
  IconButton,
  TouchableRipple,
  useTheme,
  MD3LightTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Custom theme extending Paper's default theme
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#000000',
    secondary: '#FFF8DC',
    background: '#000000',
    surface: '#ffffac',
    text: '#FFFFFF',
    textDark: '#000000',
  },
  // Custom responsive breakpoints
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  fonts: {
    ...MD3LightTheme.fonts,
    superLarge: {
      fontSize: 40,
      lineHeight: 48,
      fontWeight: 'bold',
    },
    large: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 'bold',
    },
    medium: {
      fontSize: 24,
      lineHeight: 32,
    },
    small: {
      fontSize: 16,
      lineHeight: 24,
    },
  },
};

const WelcomeBookScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <Text variant="displaySmall" style={styles.welcomeText}>
          Welcome To Banana Split
        </Text>
        {/* <Text style={styles.watermelonEmoji}>🍉</Text> */}
        <Text variant="headlineMedium" style={styles.startedText}>
          Lets Get You Started
        </Text>
        <Text variant="titleLarge" style={styles.questionText}>
          Would you rather...
        </Text>

        {/* Option Cards */}
        <View style={styles.cardContainer}>
          <TouchableRipple onPress={() => {}} style={styles.cardWrapper}>
            <Surface style={styles.card} elevation={1}>
              <Text variant="titleLarge" style={styles.cardTitle}>
                Book a Call
              </Text>
              <Text variant="bodyLarge" style={styles.cardSubtitle}>
                get an accurate quote, pricing & onboarding
              </Text>
            </Surface>
          </TouchableRipple>

          <TouchableRipple onPress={() => navigation.navigate('DashboarBananaSplit')} style={styles.cardWrapper}>
            <Surface style={styles.card} elevation={1}>
              <Text variant="titleLarge" style={styles.cardTitle}>
                Do It Myself
              </Text>
              <Text variant="bodyLarge" style={styles.cardSubtitle}>
                default pricing & guided onboarding
              </Text>
            </Surface>
          </TouchableRipple>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeBookScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    flex: 1,
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  welcomeText: {
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
    fontSize:30
  },
  watermelonEmoji: {
    fontSize: 48,
    marginVertical: theme.spacing.lg,
  },
  startedText: {
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    ...theme.fonts.large,
  },
  questionText: {
    color: theme.colors.text,
    marginBottom: theme.spacing.xl,
    ...theme.fonts.medium,
  },
  cardContainer: {
    width: '100%',
    gap: theme.spacing.md,
  },
  cardWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
  },
  cardTitle: {
    color: theme.colors.textDark,
    marginBottom: theme.spacing.xs,
    ...theme.fonts.medium,
  },
  cardSubtitle: {
    color: theme.colors.textDark,
    opacity: 0.8,
    ...theme.fonts.small,
  },
});