// CreateSplitForm.tsx
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { TextInput, Text, IconButton, Button, Modal, List } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

interface SplitEntry {
  id: string;
  name: string;
  percentage: number;
  email: string;
}

export default function CreateSplitForm() {
  const navigation = useNavigation();
  const [splitName, setSplitName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [entries, setEntries] = useState<SplitEntry[]>([{
    id: '1',
    name: 'Agency',
    percentage: 30,
    email: 'agency@example.com',
  }]);

  const totalPercentage = entries.reduce((sum, entry) => sum + entry.percentage, 0);

  const addEntry = () => {
    setEntries([...entries, {
      id: Date.now().toString(),
      name: '',
      percentage: 0,
      email: '',
    }]);
  };

  const updateEntry = (id: string, field: keyof SplitEntry, value: string | number) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const validateSplit = () => {
    if (totalPercentage !== 100) {
      Alert.alert('Error', 'Total percentage must equal 100%');
      return false;
    }
    if (!splitName) {
      Alert.alert('Error', 'Please enter a split name');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    // if (validateSubmit()) {
      navigation.navigate('Payment', { splits: entries });
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Split Name"
        value={splitName}
        onChangeText={setSplitName}
        style={styles.input}
      />

      <Button 
        mode="outlined" 
        onPress={() => setShowDatePicker(true)}
        style={styles.dateButton}
      >
        {startDate.toLocaleDateString()}
      </Button>

      <Text variant="titleMedium" style={styles.sectionTitle}>
        Split Participants
      </Text>

      {entries.map((entry, index) => (
        <View key={entry.id} style={styles.entry}>
          <TextInput
            label="Email"
            value={entry.email}
            onChangeText={v => updateEntry(entry.id, 'email', v)}
            style={styles.emailInput}
          />
          <TextInput
            label="Percentage"
            value={entry.percentage.toString()}
            onChangeText={v => updateEntry(entry.id, 'percentage', Number(v))}
            keyboardType="numeric"
            right={<TextInput.Affix text="%" />}
            style={styles.percentageInput}
          />
          {index > 0 && (
            <IconButton
              icon="delete"
              onPress={() => setEntries(entries.filter(e => e.id !== entry.id))}
            />
          )}
        </View>
      ))}

      <Button mode="text" onPress={addEntry} style={styles.addButton}>
        Add Participant
      </Button>

      <Button 
        mode="contained" 
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        Continue to Payment
      </Button>

      {showDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          onChange={(_, date) => {
            setShowDatePicker(false);
            date && setStartDate(date);
          }}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  dateButton: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  entry: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  emailInput: {
    flex: 2,
  },
  percentageInput: {
    flex: 1,
  },
  addButton: {
    marginTop: 8,
  },
  submitButton: {
    marginTop: 24,
  },
});