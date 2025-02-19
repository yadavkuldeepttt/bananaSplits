import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Title, Paragraph, Appbar, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const theme = useTheme();
  
  // Custom theme based on the banana split/melon theme
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#ffbe00', // yellow from logo
      accent: '#ff3d00',  // orange-red from buttons
      background: '#fffce1', // light yellow background
      text: '#1e1e2c',    // dark text
    },
  };

  return (
    <View style={styles.container}>
      App Bar
      <Appbar.Header style={{ backgroundColor: customTheme.colors.primary }}>
        <Appbar.Content title="Banana Split" color={customTheme.colors.text} />
        <Appbar.Action icon="bell" color={customTheme.colors.text} onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" color={customTheme.colors.text} onPress={() => {}} />
      </Appbar.Header>
      
      <ScrollView style={styles.scrollView}>
        {/* Logo and Header */}
        <View style={styles.header}>
          {/* <Image 
            source={require('./assets/banana_split_logo.png')} 
            style={styles.logo} 
            resizeMode="contain"
          /> */}
          <Text style={styles.tagline}>Get paid on time, every time. Hassle-free.</Text>
        </View>
        
        {/* Main CTA */}
        <Card style={styles.mainCard}>
          <Card.Content>
            <Title style={styles.mainTitle}>Stop Chasing Payments</Title>
            <Paragraph style={styles.subtitle}>
              Automatic payouts for everyone involved
            </Paragraph>
            <Button 
              mode="contained"
              style={styles.ctaButton}
              labelStyle={styles.buttonLabel}
              onPress={() => {}}
            >
              Get Started
              <Icon name="arrow-right" size={18} />
            </Button>
          </Card.Content>
        </Card>
        
        {/* Feature Cards */}
        <Title style={styles.sectionTitle}>Key Features</Title>
        
        <Card style={styles.featureCard}>
          <Card.Content>
            <View style={styles.featureContent}>
              <Icon name="cash-multiple" size={32} color={customTheme.colors.accent} />
              <View style={styles.featureTextContainer}>
                <Title style={styles.featureTitle}>Automatic Splitting</Title>
                <Paragraph>Split payments instantly based on your custom rules</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        
        <Card style={styles.featureCard}>
          <Card.Content>
            <View style={styles.featureContent}>
              <Icon name="timer-outline" size={32} color={customTheme.colors.accent} />
              <View style={styles.featureTextContainer}>
                <Title style={styles.featureTitle}>Instant Payouts</Title>
                <Paragraph>Get your money faster without chasing payments</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        
        <Card style={styles.featureCard}>
          <Card.Content>
            <View style={styles.featureContent}>
              <Icon name="chart-bar" size={32} color={customTheme.colors.accent} />
              <View style={styles.featureTextContainer}>
                <Title style={styles.featureTitle}>Payment Dashboard</Title>
                <Paragraph>Track all your splits and payments in one place</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        
        {/* Launch Dashboard Button */}
        <Button 
          mode="contained"
          style={styles.launchButton}
          color={customTheme.colors.accent}
          labelStyle={styles.buttonLabel}
          onPress={() => {}}
        >
          Launch Dashboard
        </Button>
        
        {/* Video Preview */}
        <Card style={styles.videoCard}>
          {/* <Card.Cover 
            source={require('./assets/video_thumbnail.png')}
            style={styles.videoThumbnail}
          /> */}
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={36} color="#fff" />
          </TouchableOpacity>
          <Card.Content>
            <Title style={styles.videoTitle}>Get Paid with Banana Split</Title>
            <Paragraph style={styles.videoSubtitle}>
              The secret tool used by multi-million dollar businesses
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color={customTheme.colors.primary} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bank-transfer" size={24} color="#888" />
          <Text style={[styles.navText, {color: '#888'}]}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="account-group" size={24} color="#888" />
          <Text style={[styles.navText, {color: '#888'}]}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="account" size={24} color="#888" />
          <Text style={[styles.navText, {color: '#888'}]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffce1',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  logo: {
    width: 150,
    height: 150,
  },
  tagline: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 8,
    color: '#1e1e2c',
    textAlign: 'center',
  },
  mainCard: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e1e2c',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444',
  },
  ctaButton: {
    backgroundColor: '#ff3d00',
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  buttonLabel: {
    fontSize: 16,
    textTransform: 'none',
    paddingHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
    color: '#1e1e2c',
  },
  featureCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e2c',
  },
  launchButton: {
    margin: 16,
    paddingVertical: 8,
  },
  videoCard: {
    margin: 16,
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  videoThumbnail: {
    height: 200,
  },
  playButton: {
    position: 'absolute',
    top: '25%',
    left: '45%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    padding: 12,
  },
  videoTitle: {
    fontSize: 18,
    marginTop: 8,
    color: '#1e1e2c',
  },
  videoSubtitle: {
    color: '#444',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: '#ffbe00',
  },
});

export default HomeScreen;