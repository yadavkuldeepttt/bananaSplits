import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Linking, TouchableOpacity, Platform, Button } from 'react-native';
import { Provider as PaperProvider, Text, Portal, Surface, useTheme, DefaultTheme } from 'react-native-paper';
import { create, open, dismissLink, LinkSuccess, LinkExit, LinkIOSPresentationStyle, LinkLogLevel } from 'react-native-plaid-link-sdk';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#98FB98', // Light green color for button
        warning: '#FFF3CD', // Light yellow for warning box
        warningText: '#856404',
    },
};

const WarningBox = ({ children }) => {
    const theme = useTheme();
    return (
        <Surface style={[styles.warningBox, { backgroundColor: theme.colors.warning }]}>
            <Text style={[styles.warningText, { color: theme.colors.warningText }]}>{children}</Text>
        </Surface>
    );
};


const DashboardBananaSplit = () => {
    const [linkToken, setLinkToken] = useState(null);
    const address = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
    const navigation = useNavigation();
    // const onPlaidSuccess = useCallback((success: LinkSuccess) => {
    //     console.log('Plaid Link Success:', success);
    //     // Handle successful bank linking here
    // }, []);

    // const onPlaidExit = useCallback(() => {
    //     console.log('Plaid Link Exit');
    //     // Handle exit
    // }, []);

    // <PlaidLink
    //     tokenConfig={{
    //         token: '#GENERATED_LINK_TOKEN#',
    //     }}
    //     onSuccess={(success: LinkSuccess) => {
    //         console.log(success);
    //     }}
    //     onExit={(exit: LinkExit) => {
    //         console.log(exit);
    //     }}
    // >
    //     <Text>Add Account</Text>
    // </PlaidLink>
    const createLinkToken = useCallback(async () => {
        await fetch(`http://localhost:3011/create-link-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({ public_token: 'localhost'})
        })
            .then((response) => response.json())
            .then((data) => {
                setLinkToken(data.link_token);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
            });
    }, [setLinkToken]);

    useEffect(() => {
        if (linkToken == null) {
            createLinkToken();
        } else {
            const tokenConfiguration = createLinkTokenConfiguration(linkToken);
            create(tokenConfiguration);
        }
    }, [linkToken]);

    const createLinkTokenConfiguration = (token: string, noLoadingState: boolean = false) => {
        return {
            token: token,
            noLoadingState: noLoadingState,
        };
    };
    const createLinkOpenProps = () => {
        return {
            onSuccess: async (success: LinkSuccess) => {
                await fetch(`http://localhost:3011/exchange-public-token`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ public_token: success.publicToken }),
                })
                    .catch((err) => {
                        console.log(err);
                    });
                navigation.navigate('Success', success);
            },
            onExit: (linkExit: LinkExit) => {
                console.log('Exit: ', linkExit);
                dismissLink();
            },
            iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
            logLevel: LinkLogLevel.ERROR,
        };
    };
    const handleOpenLink = () => {
        const openProps = createLinkOpenProps();
        open(openProps);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <WarningBox>
                    Currently, we will not be able pay you out.{'\n\n'}
                    But don't worry, Your money will be held in your melon account until you complete necessary KYC information in the{' '}
                    <Text
                        style={styles.link}
                        onPress={() => Linking.openURL('#')}
                    >
                        Verification
                    </Text>{' '}
                    section of your Settings.
                </WarningBox>

                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>
                        Welcome,{'\n'}
                        Jkakak! Link a{'\n'}
                        bank account to{'\n'}
                        get started.
                    </Text>
                </View>

                {/* <PlaidLink
                    tokenConfig={{
                        token: 'YOUR_LINK_TOKEN', // Replace with your Plaid link token
                    }}
                    onSuccess={onPlaidSuccess}
                    onExit={onPlaidExit}
                >
                    <Button
                        mode="contained"
                        icon="plus"
                        style={styles.linkButton}
                        labelStyle={styles.linkButtonLabel}
                    >
                        Link bank account
                    </Button>
                </PlaidLink> */}
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        create({ token: '' });
                        setDisabled(false);
                    }
                    }>
                    <Text style={styles.button}>Link bank account</Text>
                </TouchableOpacity> */}
                <Button
                    title="Open Link"
                    onPress={handleOpenLink}
                />
                <WarningBox>
                    Please note that we have removed Navy Federal from the list of supported Banks.{' '}
                    <Text
                        style={styles.link}
                        onPress={() => Linking.openURL('#')}
                    >
                        Read More
                    </Text>
                </WarningBox>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 16,
        gap: 24,
    },
    warningBox: {
        padding: 16,
        borderRadius: 8,
    },
    warningText: {
        fontSize: 14,
        lineHeight: 20,
    },
    welcomeContainer: {
        marginVertical: 24,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 40,
    },
    linkButton: {
        borderRadius: 8,
        paddingVertical: 8,
    },
    linkButtonLabel: {
        fontSize: 16,
        paddingVertical: 4,
    },
    link: {
        color: '#007AFF',
        textDecorationLine: 'underline',
    },
});

export default DashboardBananaSplit;