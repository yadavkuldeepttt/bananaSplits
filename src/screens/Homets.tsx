import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  Provider as PaperProvider,
  Text,
  Surface,
  Button,
  useTheme,
  MD3LightTheme,
  IconButton,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#000000',
    secondary: 'rgb(214, 255, 156);',
    background: '#000000',
    surface: '#E8FFB0',
    accent: '#FF4D4D',
    text: '#FFFFFF',
    textDark: '#000000',
    innerCard: '#ffffab',
    naturalBlack: '#000000',
  },
};

const StatCard = ({ number, label }) => (
  <Surface style={styles.statCard}>
    <Text variant="displaySmall" style={styles.statNumber}>
      {number}
    </Text>
    <Text variant="titleMedium" style={styles.statLabel}>
      {label}
    </Text>
  </Surface>
);

const StepCard = ({ step, title, description, icon }) => (
  <Surface style={styles.stepCard}>
    <View style={styles.stepHeader}>
      <Icon name={icon} size={24} color={theme.colors.primary} />
      <Text variant="titleMedium" style={styles.stepTitle}>
        Step {step}: {title}
      </Text>
    </View>
    <Text variant="bodyMedium" style={styles.stepDescription}>
      {description}
    </Text>
  </Surface>
);

const FeatureCard = ({ icon, title, description }) => (
  <Surface style={styles.featureCard}>
    <Icon name={icon} size={24} color={theme.colors.primary} />
    <Text variant="titleMedium" style={styles.featureTitle}>
      {title}
    </Text>
    <Text variant="bodyMedium" style={styles.featureDescription}>
      {description}
    </Text>
  </Surface>
);

const MelonLanding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text variant="displayMedium" style={styles.tagline}>Get paid on time, every time. Hassle-free.</Text>
        </View>
        <View style={styles.header}>
          <Text variant="displayMedium" style={styles.headerTitle}>
            Stop <Text style={styles.highlighted}>Chasing</Text> Payments
          </Text>
          <Text variant="titleMedium" style={styles.headerSubtitle}>
            Introducing Melon: Automatic payouts for agencies
          </Text>
          <Button
            mode="contained"
            style={styles.getStartedButton}
            contentStyle={styles.buttonContent}
            onPress={() => { }}
          >
            Get Started →
          </Button>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <StatCard number="900+" label="creators" />
          <StatCard number="125+" label="agencies" />
          <StatCard number="$25 mil+" label="revenue shared" />
        </View>
        <Button
          mode="contained"
          style={styles.dashBoardButton}
          contentStyle={styles.buttonContent}
          onPress={() => { }}
        >
          Launch Dashboard
        </Button>


        <Surface style={styles.howItWorksSection}>
          <Text variant="headlineMedium" style={styles.sectionTitle}>
            How it works
          </Text>
          <FastImage
            style={styles.fastImage}
            source={{
              uri: 'https://cdn.prod.website-files.com/654d2fd645b814b257a49547/65bbec99687f64acaff648e2_9738b326-4fd4-4be9-b07d-923238beb401.gif', // Link to the GIF
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <StepCard
            step={1}
            title="The Creator withdraws their balance"
            description="As soon as a creator's platform earnings hit their bank account, Melon kicks off the revenue share."
            icon="bank-transfer"
          />
          <StepCard
            step={2}
            title="The Split is triggered"
            description="Including holding splits funds, revenue share and accurate payouts."
            icon="cash-multiple"
          />
          <StepCard
            step={3}
            title="Your Splits are paid in full each week"
            description="Get paid out each Friday from every split on your roster - it's your weekly agency payday!"
            icon="check-circle"
          />
        </Surface>

        {/* TLDR Section */}
        {/* <View style={styles.tldrSection}>
          <Text variant="headlineMedium" style={styles.tdlrSectionTitle}>
            TL;DR
          </Text>
          <Text variant="bodyLarge" style={styles.tldrText}>
            Melon is the simplest way to split revenue between creators and their teams.
          </Text>
        </View> */}

        {/* Why Melon */}
        {/* <View style={styles.whyMelonSection}>
          <Text variant="headlineMedium" style={styles.tdlrSectionTitle}>
            Why Melon?
          </Text>
          <FeatureCard
            icon="flash"
            title="Seamless Payouts"
            description="Get paid faster, on-time, and without any delays."
          />
          <FeatureCard
            icon="chart-line"
            title="Transparent Results"
            description="Clear split weekly reports to track your earnings."
          />
          <FeatureCard
            icon="account-group"
            title="Split Monitoring"
            description="Monitor your revenue splits with ease."
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
// #d6ff9c
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  tagline: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 8,
    color: theme.colors.secondary,
    textAlign: 'center',
  },
  headerTitle: {
    color: theme.colors.text,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  highlighted: {
    backgroundColor: theme.colors.innerCard,
    color: theme.colors.naturalBlack,
    padding: 4,
  },
  headerSubtitle: {
    color: theme.colors.text,
    marginBottom: 24,
  },
  getStartedButton: {
    backgroundColor: theme.colors.accent,
    borderRadius: 24,
  },
  dashBoardButton: {
    backgroundColor: theme.colors.accent,
    borderRadius: 24,
    width: "88%",
    alignSelf: "center"
  },
  buttonContent: {
    height: 48,
  },
  fastImage: {
    width: "100%",
    height: 120,
    alignSelf: "center",
    marginBottom: 30
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 24,
    flexWrap: 'wrap',
    gap: 16,
  },
  statCard: {
    backgroundColor: theme.colors.secondary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
  },
  statNumber: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  statLabel: {
    color: theme.colors.primary,
  },
  howItWorksSection: {
    backgroundColor: theme.colors.secondary,
    padding: 24,
    margin: 16,
    borderRadius: 16,
  },
  sectionTitle: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  tdlrSectionTitle: {
    color: theme.colors.text,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  stepCard: {
    backgroundColor: theme.colors.innerCard,
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepTitle: {
    marginLeft: 8,
    color: theme.colors.primary,
    fontWeight: 'bold',
    width: "90%"
  },
  stepDescription: {
    color: theme.colors.primary,
  },
  tldrSection: {
    padding: 24,
  },
  tldrText: {
    color: theme.colors.text,
  },
  whyMelonSection: {
    padding: 24,
  },
  featureCard: {
    backgroundColor: theme.colors.secondary,
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
  },
  featureTitle: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  featureDescription: {
    color: theme.colors.primary,
  },
});

export default MelonLanding