// import React from 'react';
// import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { Text, Button, Card, Title, Paragraph, Appbar, useTheme } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const HomeScreen = () => {
//   const theme = useTheme();

//   // Custom theme based on the banana split/melon theme
//   const customTheme = {
//     ...theme,
//     colors: {
//       ...theme.colors,
//       primary: '#ffbe00', // yellow from logo
//       accent: '#ff3d00',  // orange-red from buttons
//       background: '#fffce1', // light yellow background
//       text: '#1e1e2c',    // dark text
//     },
//   };

//   return (
//     <View style={styles.container}>
//       App Bar
//       <Appbar.Header style={{ backgroundColor: customTheme.colors.primary }}>
//         <Appbar.Content title="Banana Split" color={customTheme.colors.text} />
//         <Appbar.Action icon="bell" color={customTheme.colors.text} onPress={() => {}} />
//         <Appbar.Action icon="dots-vertical" color={customTheme.colors.text} onPress={() => {}} />
//       </Appbar.Header>

//       <ScrollView style={styles.scrollView}>
//         {/* Logo and Header */}
//         <View style={styles.header}>
//           {/* <Image 
//             source={require('./assets/banana_split_logo.png')} 
//             style={styles.logo} 
//             resizeMode="contain"
//           /> */}
//           <Text style={styles.tagline}>Get paid on time, every time. Hassle-free.</Text>
//         </View>

//         {/* Main CTA */}
//         <Card style={styles.mainCard}>
//           <Card.Content>
//             <Title style={styles.mainTitle}>Stop Chasing Payments</Title>
//             <Paragraph style={styles.subtitle}>
//               Automatic payouts for everyone involved
//             </Paragraph>
//             <Button 
//               mode="contained"
//               style={styles.ctaButton}
//               labelStyle={styles.buttonLabel}
//               onPress={() => {}}
//             >
//               Get Started
//               <Icon name="arrow-right" size={18} />
//             </Button>
//           </Card.Content>
//         </Card>

//         {/* Feature Cards */}
//         <Title style={styles.sectionTitle}>Key Features</Title>

//         <Card style={styles.featureCard}>
//           <Card.Content>
//             <View style={styles.featureContent}>
//               <Icon name="cash-multiple" size={32} color={customTheme.colors.accent} />
//               <View style={styles.featureTextContainer}>
//                 <Title style={styles.featureTitle}>Automatic Splitting</Title>
//                 <Paragraph>Split payments instantly based on your custom rules</Paragraph>
//               </View>
//             </View>
//           </Card.Content>
//         </Card>

//         <Card style={styles.featureCard}>
//           <Card.Content>
//             <View style={styles.featureContent}>
//               <Icon name="timer-outline" size={32} color={customTheme.colors.accent} />
//               <View style={styles.featureTextContainer}>
//                 <Title style={styles.featureTitle}>Instant Payouts</Title>
//                 <Paragraph>Get your money faster without chasing payments</Paragraph>
//               </View>
//             </View>
//           </Card.Content>
//         </Card>

//         <Card style={styles.featureCard}>
//           <Card.Content>
//             <View style={styles.featureContent}>
//               <Icon name="chart-bar" size={32} color={customTheme.colors.accent} />
//               <View style={styles.featureTextContainer}>
//                 <Title style={styles.featureTitle}>Payment Dashboard</Title>
//                 <Paragraph>Track all your splits and payments in one place</Paragraph>
//               </View>
//             </View>
//           </Card.Content>
//         </Card>

//         {/* Launch Dashboard Button */}
//         <Button 
//           mode="contained"
//           style={styles.launchButton}
//           color={customTheme.colors.accent}
//           labelStyle={styles.buttonLabel}
//           onPress={() => {}}
//         >
//           Launch Dashboard
//         </Button>

//         {/* Video Preview */}
//         <Card style={styles.videoCard}>
//           {/* <Card.Cover 
//             source={require('./assets/video_thumbnail.png')}
//             style={styles.videoThumbnail}
//           /> */}
//           <TouchableOpacity style={styles.playButton}>
//             <Icon name="play" size={36} color="#fff" />
//           </TouchableOpacity>
//           <Card.Content>
//             <Title style={styles.videoTitle}>Get Paid with Banana Split</Title>
//             <Paragraph style={styles.videoSubtitle}>
//               The secret tool used by multi-million dollar businesses
//             </Paragraph>
//           </Card.Content>
//         </Card>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="home" size={24} color={customTheme.colors.primary} />
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="bank-transfer" size={24} color="#888" />
//           <Text style={[styles.navText, {color: '#888'}]}>Payments</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="account-group" size={24} color="#888" />
//           <Text style={[styles.navText, {color: '#888'}]}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="account" size={24} color="#888" />
//           <Text style={[styles.navText, {color: '#888'}]}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffce1',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 24,
//     paddingHorizontal: 16,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//   },
//   tagline: {
//     fontSize: 18,
//     fontStyle: 'italic',
//     marginTop: 8,
//     color: '#1e1e2c',
//     textAlign: 'center',
//   },
//   mainCard: {
//     margin: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
//   mainTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1e1e2c',
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 16,
//     color: '#444',
//   },
//   ctaButton: {
//     backgroundColor: '#ff3d00',
//     paddingVertical: 8,
//     alignSelf: 'flex-start',
//     marginTop: 8,
//   },
//   buttonLabel: {
//     fontSize: 16,
//     textTransform: 'none',
//     paddingHorizontal: 8,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginHorizontal: 16,
//     marginTop: 24,
//     marginBottom: 16,
//     color: '#1e1e2c',
//   },
//   featureCard: {
//     marginHorizontal: 16,
//     marginBottom: 12,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
//   featureContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   featureTextContainer: {
//     marginLeft: 16,
//     flex: 1,
//   },
//   featureTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1e1e2c',
//   },
//   launchButton: {
//     margin: 16,
//     paddingVertical: 8,
//   },
//   videoCard: {
//     margin: 16,
//     marginTop: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   videoThumbnail: {
//     height: 200,
//   },
//   playButton: {
//     position: 'absolute',
//     top: '25%',
//     left: '45%',
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     borderRadius: 50,
//     padding: 12,
//   },
//   videoTitle: {
//     fontSize: 18,
//     marginTop: 8,
//     color: '#1e1e2c',
//   },
//   videoSubtitle: {
//     color: '#444',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderTopWidth: 1,
//     borderColor: '#eee',
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navText: {
//     marginTop: 4,
//     fontSize: 12,
//     color: '#ffbe00',
//   },
// });

// export default HomeScreen;










import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Surface, useTheme, Card, Appbar, Title, Paragraph, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MelonLanding from './Homets';

// ... Previous components remain the same ...

const TabButton = ({ label, isActive, onPress }) => (
  <TouchableOpacity
    style={[styles.tabButton, isActive && styles.activeTabButton]}
    onPress={onPress}
  >
    <Text style={[styles.tabText, isActive && styles.activeTabText]}>{label}</Text>
  </TouchableOpacity>
);

const FeatureItem = ({ icon, title, description }) => (
  <View style={styles.featureItem}>
    <Icon name={icon} size={24} color="#FF4B4B" style={styles.featureIcon} />
    <View style={styles.featureTextContainer}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);
// const StatsCard = ({ number, label }) => {
//   const theme = useTheme();
//   return (
//     <Surface style={styles.statsSurface}>
//       <Text style={styles.statsNumber}>{number}</Text>
//       <Text style={styles.statsLabel}>{label}</Text>
//     </Surface>
//   );
// };

// const FlowArrow = () => (
//   <Icon name="arrow-right" size={24} color="#000" style={styles.arrow} />
// );

// const StepCard = ({ step, title, description }) => (
//   <Card style={styles.stepCard}>
//     <Card.Content>
//       <Text style={styles.stepNumber}>Step {step}</Text>
//       <Text style={styles.stepTitle}>{title}</Text>
//       <Text style={styles.stepDescription}>{description}</Text>
//     </Card.Content>
//   </Card>
// );

const BenefitCard = ({ icon, title,iconColor }) => (
  <Card style={styles.benefitCard}>
    <Card.Content style={styles.benefitContent}>
      <Icon name={icon} size={32} color={iconColor} style={styles.benefitIcon} />
      <Text style={styles.benefitTitle}>{title}</Text>
    </Card.Content>
  </Card>
);




const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('agencies');
  const theme = useTheme();
  const navigation = useNavigation();

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
    <ScrollView style={styles.container}>
       <MelonLanding/>
             {/* <Appbar.Header style={{ backgroundColor: customTheme.colors.primary }}>
         <Appbar.Content title="Banana Split" color={customTheme.colors.text} />
         <Appbar.Action icon="bell" color={customTheme.colors.text} onPress={() => {}} />
         <Appbar.Action icon="dots-vertical" color={customTheme.colors.text} onPress={() => {}} />
       </Appbar.Header> */}

      
         {/* Logo and Header */}
         {/* <View style={styles.header}>
           <Text style={styles.tagline}>Get paid on time, every time. Hassle-free.</Text>
         </View> */}

         {/* Main CTA */}
         {/* <Card style={styles.mainCard}>
           <Card.Content>
             <Title style={styles.mainTitle}>Stop Chasing Payments</Title>
             <Paragraph style={styles.subtitle}>
               Automatic payouts for everyone involved
             </Paragraph>
            <Button
              mode="contained"
              style={styles.ctaButton}
              labelStyle={styles.buttonLabel}
              onPress={() => navigation.navigate('Login')}
            >
              Get Started
              <Icon name="arrow-right" size={18} />
            </Button>
          </Card.Content>
        </Card>

        <Button 
          mode="contained"
          style={styles.launchButton}
          color={customTheme.colors.accent}
          labelStyle={styles.buttonLabel}
          onPress={() => {}}
        >
          Launch Dashboard
        </Button> */}

        {/* 
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
        </Card> */}

        {/* <Card style={styles.featureCard}>
          <Card.Content>
            <View style={styles.featureContent}>
              <Icon name="timer-outline" size={32} color={customTheme.colors.accent} />
              <View style={styles.featureTextContainer}>
                <Title style={styles.featureTitle}>Instant Payouts</Title>
                <Paragraph>Get your money faster without chasing payments</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card> */}

        {/* <Card style={styles.featureCard}>
          <Card.Content>
            <View style={styles.featureContent}>
              <Icon name="chart-bar" size={32} color={customTheme.colors.accent} />
              <View style={styles.featureTextContainer}>
                <Title style={styles.featureTitle}>Payment Dashboard</Title>
                <Paragraph>Track all your splits and payments in one place</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card> */}

        {/* Launch Dashboard Button */}

        {/* Video Preview */}
        {/* <Card style={styles.videoCard}>
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
      <View style={styles.header}>
        <Text variant="headlineLarge" style={styles.title}>Welcome to Banana Split</Text>
      </View> */}

      {/* Stats Section */}
      {/* <Card style={styles.statsCard}>
        <Card.Content style={styles.statsContainer}>
          <StatsCard number="900+" label="Creators" />
          <FlowArrow />
          <StatsCard number="125+" label="Agencies" />
          <FlowArrow />
          <StatsCard number="$25mil+" label="Revenue shared" />
        </Card.Content>
      </Card> */}

      {/* How it works Section */}
      {/* <View style={styles.howItWorksSection}>
        <Text variant="headlineMedium" style={styles.sectionTitle}>
          How it works
        </Text>

        <Card style={styles.flowCard}>
          <Card.Content>
            <View style={styles.flowContainer}>

              <View style={styles.platformCircle}>
                <Text style={styles.platformText}>Payment Sources</Text>
              </View>


              <View style={styles.flowLine}>
                <Text style={styles.percentageText}>100%</Text>
              </View>


              <View style={styles.roleContainer}>
                <Icon name="account" size={40} color="#000" />
                <Text style={styles.roleText}>creator</Text>
              </View>


              <View style={styles.flowLine}>
                <Text style={styles.percentageText}>20%</Text>
              </View>


              <View style={styles.roleContainer}>
                <Icon name="office-building" size={40} color="#000" />
                <Text style={styles.roleText}>agency</Text>
              </View>


              <View style={styles.splitContainer}>
                <View style={styles.splitLine}>
                  <Text style={styles.percentageText}>7.5%</Text>
                  <View style={styles.roleContainer}>
                    <Icon name="account-group" size={40} color="#000" />
                    <Text style={styles.roleText}>chatter</Text>
                  </View>
                </View>

                <View style={styles.splitLine}>
                  <Text style={styles.percentageText}>5%</Text>
                  <View style={styles.roleContainer}>
                    <Icon name="account-multiple" size={40} color="#000" />
                    <Text style={styles.roleText}>referral</Text>
                  </View>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View> */}
      {/* <View style={styles.stepsContainer}>
        <StepCard
          step={1}
          title="The Creator withdraws their balance"
          description="As soon as the creator's platform earnings hit their bank account, Melon kicks off the revenue-share."
        />
        <StepCard
          step={2}
          title="The Split is triggered"
          description="Instantly initiate splits as funds land, ensuring swift and accurate payouts."
        />
        <StepCard
          step={3}
          title="Your Splits are paid in full each week"
          description="Get paid out each Friday from every split on your roster - it's your weekly agency payday!"
        />
      </View> */}

      <View style={styles.tldrSection}>
        <Text style={styles.tldrTitle}>TL;DR</Text>
        <Text style={styles.tldrDescription}>
          Melon is the easiest way to split revenue between creators and their teams.
        </Text>

        <View style={styles.benefitsGrid}>
          <BenefitCard
            icon="star-face"
            title="No more frustrating money conversations with your clients"
            iconColor="purple"
          />
          <BenefitCard
            icon="cash-fast"
            title="Save hours per week on invoicing and reconciliations"
            iconColor="lightgreen"
          />
          <BenefitCard
            icon="wallet"
            title="Get paid faster, on-time, and without the hassle"
            iconColor="red"
          />
          <BenefitCard
            icon="chart-line-variant"
            title="Stand out from your competitors by making the money transparent"
            iconColor="#1000fd"
          />
        </View>
      </View>
      <View style={styles.whyMelonSection}>
        <Text style={styles.whyMelonTitle}>Why Melon?</Text>
        <Text style={styles.whyMelonSubtitle}>
          Melon puts your agency payouts on autopilot so you never have to talk about money with clients again.
        </Text>

        <View style={styles.tabsContainer}>
          <TabButton
            label="for agencies"
            isActive={activeTab === 'agencies'}
            onPress={() => setActiveTab('agencies')}
          />
          <TabButton
            label="for creators"
            isActive={activeTab === 'creators'}
            onPress={() => setActiveTab('creators')}
          />
          <TabButton
            label="for third party services"
            isActive={activeTab === 'services'}
            onPress={() => setActiveTab('services')}
          />
        </View>

        <Card style={styles.featuresCard}>
          <Card.Content>
            <FeatureItem
              icon="cash-check"
              title="Seamless Payouts"
              description="Enjoy timely payments, every time. Melon ensures you get what you deserve without delays."
            />
            <FeatureItem
              icon="chart-bar"
              title="Transparent Insights"
              description="Our detailed weekly reports keep you informed about your earnings, highlighting every source and split. No more guess work - just clarity."
            />
            <FeatureItem
              icon="shield-check"
              title="Split Monitoring"
              description="Melon's dedicated team oversees all financial aspects, employing both technology and human checks to maintain a healthy payout system."
            />
            <FeatureItem
              icon="eye-check"
              title="Eyes in the sky"
              description="Melon's software and Split Support team proactively alert you if anything goes wrong with a split so you can relax knowing you're covered."
            />
            <FeatureItem
              icon="lifebuoy"
              title="Best-in-class support"
              description="Our extensive knowledge baseand support team are your go-to resources for extracting the maximum value from Melon. Unlock the full potential of your earnings with confidence."
            />
          </Card.Content>
        </Card>

        {/* Preview Image */}
        <Card style={styles.previewCard}>
          <Card.Content>
            <Text style={styles.previewTitle}>Hey Crafty Paperback!</Text>
            <Text style={styles.previewSubtitle}>Here's the latest.</Text>
            {/* Add more preview content here */}
          </Card.Content>
        </Card>
      </View>

      {/* Rest of the content ... */}
     
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffce1',
  },
  
  scrollView: {
    flex: 1,
    backgroundColor: '#fffce1',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
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


  

  title: {
    color: '#1D1E2C',
    fontWeight: 'bold',
  },
  statsCard: {
    margin: 16,
    backgroundColor: '#E5FFB3',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  statsSurface: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D1E2C',
  },
  statsLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  arrow: {
    marginHorizontal: 8,
  },
  howItWorksSection: {
    padding: 16,
  },

  flowCard: {
    backgroundColor: 'white',
    marginTop: 16,
  },
  flowContainer: {
    padding: 16,
  },
  platformCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  platformText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flowLine: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 24,
  },
  percentageText: {
    position: 'absolute',
    top: -12,
    right: 16,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  roleContainer: {
    alignItems: 'center',
    backgroundColor: '#E5FFB3',
    padding: 16,
    borderRadius: 8,
  },
  roleText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  splitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  splitLine: {
    flex: 1,
    marginHorizontal: 8,
  },
  stepsContainer: {
    marginTop: 24,
  },
  stepCard: {
    marginVertical: 8,
    backgroundColor: '#FFFBD4',
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D1E2C',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },

  tldrSection: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  tldrTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1D1E2C',
    marginBottom: 16,
    textAlign:"center"
  },
  tldrDescription: {
    fontSize: 20,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 32,
    textAlign:"center"
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  benefitCard: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  benefitContent: {
    padding: 16,
  },
  benefitIcon: {
    marginBottom: 12,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D1E2C',
    lineHeight: 24,
  },
  whyMelonSection: {
    padding: 24,
    backgroundColor: '#000000',
  },
  whyMelonTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  whyMelonSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 8,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFC0CB',
  },
  activeTabButton: {
    backgroundColor: '#98FB98',
  },
  tabText: {
    fontSize: 14,
    color: '#000000',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  featuresCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  featureIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  previewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  previewSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
});

export default HomeScreen;