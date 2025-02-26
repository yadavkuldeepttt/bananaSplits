import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Modal, Portal, Text, Card, Button, IconButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


type SplitType = 'creator' | 'referral';

interface CreateSplitModalProps {
  visible: boolean;
  onDismiss: () => void;
  onContinue: (type: SplitType) => void;
}

export default function CreateSplitModal({ visible=true, onDismiss, onContinue }: CreateSplitModalProps) {
  const [selectedType, setSelectedType] = React.useState<SplitType>('creator');
  const theme = useTheme();

  const styles = StyleSheet.create({
    modal: {
      backgroundColor: 'white',
      margin: 20,
      borderRadius: 16,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      color: '#75B654',
      fontSize: 20,
      fontWeight: '600',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    cardsContainer: {
      gap: 16,
      marginBottom: 24,
    },
    card: {
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    selectedCard: {
      borderColor: '#75B654',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
    },
    cardDescription: {
      color: '#666',
      fontSize: 16,
    },
    continueButton: {
      backgroundColor: 'rgb(214, 255, 156);',
      padding: 16,
      borderRadius: 12,
    },
    continueText: {
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create Split</Text>
          <IconButton
            icon="close"
            size={24}
            onPress={onDismiss}
          />
        </View>

        <Text style={styles.title}>What kind of split do you want to create?</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity onPress={() => setSelectedType('creator')}>
            <Card
              style={[
                styles.card,
                selectedType === 'creator' && styles.selectedCard,
              ]}
            >
              <Card.Content>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.cardTitle}>Creator Split</Text>
                  {selectedType === 'creator' && (
                    <Icon name="check-circle" size={24} color="#75B654" />
                  )}
                </View>
                <Text style={styles.cardDescription}>
                  I want to receive money from a creator on my roster
                </Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedType('referral')}>
            <Card
              style={[
                styles.card,
                selectedType === 'referral' && styles.selectedCard,
              ]}
            >
              <Card.Content>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.cardTitle}>Referral Split</Text>
                  {selectedType === 'referral' && (
                    <Icon name="check-circle" size={24} color="#75B654" />
                  )}
                </View>
                <Text style={styles.cardDescription}>
                  I want to send money from a split to a third-party
                </Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => onContinue(selectedType)}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
}