import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { 
  Surface, 
  Text, 
  List, 
  Card, 
  Button, 
  useTheme,
  IconButton,
  Badge,
  Divider 
} from 'react-native-paper';

const PaymentDashboard = () => {
  const theme = useTheme();

  const transactions = [
    { date: 'May 28, 2023', invoice: '45116903', amount: '$7,818.00', status: 'Payout has' },
    { date: 'May 22, 2023', invoice: '48800481', amount: '$7,447.00', status: 'Payout has' },
    { date: 'May 14, 2023', invoice: '44485406', amount: '$8,033.00', status: 'Payout has' },
    { date: 'May 7, 2023', invoice: '44173941', amount: '$7,731.00', status: 'Payout has' },
    { date: 'Apr 30, 2023', invoice: '43254810', amount: '$7,687.00', status: 'Payout has' },
    { date: 'Apr 23, 2023', invoice: '41957861', amount: '$8,148.00', status: 'Payout has' },
    { date: 'Apr 16, 2023', invoice: '409875591', amount: '$7,764.00', status: 'Payout has' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text variant="headlineLarge" style={styles.headerText}>Full Transparency</Text>
        <Text variant="titleLarge" style={styles.subHeaderText}>Create & Edit New</Text>
      </View>

      <Card style={styles.mainCard}>
        <Card.Content>
          {/* Back Button */}
          <View style={styles.navigationRow}>
            <IconButton
              icon="arrow-left"
              size={20}
              onPress={() => {}}
            />
            <Text variant="titleMedium">STATEMENTS</Text>
          </View>

          {/* Top Creator Badge */}
          <View style={styles.badgeContainer}>
            <IconButton
              icon="star"
              size={20}
              iconColor={theme.colors.primary}
            />
            <Text>YOU ARE IN THE TOP 0.6% OF ALL CREATORS!</Text>
          </View>

          {/* Balance Section */}
          <View style={styles.balanceSection}>
            <Text variant="titleMedium">CURRENT BALANCE</Text>
            <Text variant="headlineMedium" style={styles.balanceAmount}>$1,710.89</Text>
            <Text variant="titleSmall" style={styles.pendingBalance}>PENDING BALANCE: $4,325.23</Text>
          </View>

          {/* Menu Items */}
          <List.Section>
            <List.Item
              title="Weekly payouts"
              left={props => <List.Icon {...props} icon="calendar" />}
              right={props => <IconButton {...props} icon="chevron-right" />}
            />
            <List.Item
              title="EARNINGS"
              left={props => <List.Icon {...props} icon="bank" />}
              right={props => <IconButton {...props} icon="chevron-right" />}
            />
            <List.Item
              title="PAYOUT REQUESTS"
              left={props => <List.Icon {...props} icon="cash" />}
              right={props => <IconButton {...props} icon="chevron-right" />}
            />
          </List.Section>

          {/* Transactions List */}
          <Text variant="titleMedium" style={styles.transactionsHeader}>PAYOUT REQUESTS</Text>
          <ScrollView style={styles.transactionsList}>
            {transactions.map((transaction, index) => (
              <View key={index}>
                <List.Item
                  title={transaction.date}
                  description={`Invoice: ${transaction.invoice}`}
                  right={() => (
                    <View style={styles.transactionRight}>
                      <Text>{transaction.amount}</Text>
                      <Text style={styles.statusText}>{transaction.status}</Text>
                    </View>
                  )}
                />
                <Divider />
              </View>
            ))}
          </ScrollView>
        </Card.Content>
      </Card>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text variant="headlineMedium" style={styles.bottomHeader}>Full Transparency</Text>
        <Text variant="titleMedium" style={styles.bottomText}>
          See a full history of each platform cash-out and agency payout so everyone's on the same page
        </Text>
        <Button 
          mode="contained" 
          style={styles.getStartedButton}
          contentStyle={styles.buttonContent}
          icon="arrow-right"
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffE4E6',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#666',
  },
  mainCard: {
    borderRadius: 12,
    marginBottom: 20,
  },
  navigationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  balanceSection: {
    marginBottom: 24,
  },
  balanceAmount: {
    fontWeight: 'bold',
    marginVertical: 8,
  },
  pendingBalance: {
    color: '#666',
  },
  transactionsHeader: {
    marginBottom: 12,
  },
  transactionsList: {
    maxHeight: 300,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  statusText: {
    color: '#666',
    fontSize: 12,
  },
  bottomSection: {
    alignItems: 'center',
    padding: 16,
  },
  bottomHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  bottomText: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  getStartedButton: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#f43f5e',
  },
  buttonContent: {
    height: 56,
  },
});

export default PaymentDashboard;