import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import {
  TextInput,
  Text,
  IconButton,
  Button,
  Portal,
  Modal,
  List,
  useTheme,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

interface SplitEntry {
  id: string;
  name: string;
  percentage: number;
  email?: string;
}

export default function CreateSplitForm({ }) {
  const theme = useTheme();
  const [splitName, setSplitName] = useState('');
  const [platformType, setPlatformType] = useState('OnlyFans');
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPlatformPicker, setShowPlatformPicker] = useState(false);
  const [entries, setEntries] = useState<SplitEntry[]>([
    {
      id: '1',
      name: 'OnlyFans Model Management',
      percentage: 50,
    },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerTitle: {
      paddingLeft: "3.5%",
      paddingTop: "2%",
      fontSize: 20,
      color: '#75B654',
      fontWeight: '600',
    },
    form: {
      padding: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: '500',
    },
    required: {
      color: 'red',
      marginLeft: 4,
    },
    input: {
      marginBottom: 14,
      backgroundColor: 'white',
    },
    helperText: {
      color: "green",
      fontSize: 14,
      marginTop: -16,
      marginBottom: 24,
    },
    splitHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    splitTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    splitTotal: {
      fontSize: 18,
      fontWeight: '600',
    },
    entry: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    entryInitial: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    entryInitialText: {
      fontSize: 16,
      fontWeight: '500',
    },
    entryContent: {
      flex: 1,
      marginRight: 12,
    },
    percentageInput: {
      width: 80,
      textAlign: 'right',
      marginLeft: 10,
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    continueButton: {
      margin: 16,
      paddingVertical: 8,
    },
    platformButton: {
      borderWidth: 1,
      borderColor: theme.colors.backdrop,
      borderRadius: 4,
      padding: 16,
      marginBottom: 24,
    },
  });

  const addEntry = () => {
    setEntries([
      ...entries,
      {
        id: Date.now().toString(),
        name: '',
        percentage: 0,
        email: '',
      },
    ]);
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const updateEntry = (id: string, field: keyof SplitEntry, value: string | number) => {
    setEntries(
      entries.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const totalPercentage = entries.reduce((sum, entry) => sum + entry.percentage, 0);

  // In your CreateSplitForm component
const handleSubmit = async () => {
  try {
    const response = await fetch('http://192.168.0.196:8080/api/splits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: splitName,
        platformType,
        startDate,
        entries: [
          { percentage: entries[0].percentage },
          ...entries.slice(1).map(e => ({ email: e.email, percentage: e.percentage }))
        ]
      })
    });

    if (response.ok) {
      // Handle success
    }
  } catch (error) {
    console.error('Failed to create split:', error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Create Split</Text>

      <ScrollView style={styles.form}>
        <Text style={styles.label}>
          Split Name<Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          mode="outlined"
          value={splitName}
          onChangeText={setSplitName}
          style={styles.input}
          placeholder="Split Name"
        />

        <Text style={styles.label}>
          Platform Type<Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.platformButton}
          onPress={() => setShowPlatformPicker(true)}
        >
          <Text>{platformType}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>
          Split Start Date<Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.platformButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{startDate.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>
        <Text style={styles.helperText}>
          You can set the Split Start Date retroactively for up to 45 days.
        </Text>

        <View style={styles.splitHeader}>
          <Text style={styles.splitTitle}>Split Percentages</Text>
          <Text style={[styles.splitTotal, totalPercentage > 100 ? { color: 'red' } : {}]}>
            {totalPercentage}%
          </Text>
        </View>

        {totalPercentage > 100 && (
          <Text style={{ color: 'red', fontSize: 14, marginBottom: 16 }}>
            Total split percentage cannot exceed 100%.
          </Text>
        )}


        {entries.map((entry, index) => (
          <View key={entry.id} style={styles.entry}>
            <View style={styles.entryInitial}>
              <Text style={styles.entryInitialText}>
                {entry.name ? entry.name[0] : '+'}
              </Text>
            </View>
            <View style={styles.entryContent}>
              {index === 0 ? (
                <Text>{entry.name}</Text>
              ) : (
                <TextInput
                  mode="outlined"
                  value={entry.email}
                  onChangeText={(value) => updateEntry(entry.id, 'email', value)}
                  placeholder="Creator email address"
                  style={styles.input}
                />
              )}
            </View>

            {index !== 0 && (
              <IconButton
                icon="trash-can-outline"
                size={20}
                onPress={() => removeEntry(entry.id)}
              />
            )}
            <TextInput
              mode="outlined"
              value={entry.percentage.toString()}
              onChangeText={(value) => updateEntry(entry.id, 'percentage', Number(value) || 0)}
              placeholder="0"
              keyboardType="numeric"
              style={[styles.percentageInput, styles.input]}
              right={<TextInput.Affix text="%" />}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addEntry}>
          <IconButton icon="plus" size={20} />
          <Text>Add Creator</Text>
        </TouchableOpacity>
      </ScrollView>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.continueButton}
        disabled={!splitName || totalPercentage !== 100}
      >
        Continue
      </Button>


      {showDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setStartDate(selectedDate);
            }
          }}
        />
      )}

      <Portal>
        <Modal
          visible={showPlatformPicker}
          onDismiss={() => setShowPlatformPicker(false)}
          contentContainerStyle={{
            backgroundColor: 'white',
            padding: 20,
            margin: 20,
            borderRadius: 8,
          }}
        >
          {['Chaturbate', 'MyFreeCams', 'OnlyFans', 'Playboy Centerfold'].map((platform) => (
            <List.Item
              key={platform}
              title={platform}
              onPress={() => {
                setPlatformType(platform);
                setShowPlatformPicker(false);
              }}
            />
          ))}
        </Modal>
      </Portal>
    </View>
  );
}
