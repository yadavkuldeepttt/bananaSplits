import { StyleSheet } from 'react-native';
import { TCustomTheme } from '../components/theme';
import { MD3LightTheme } from 'react-native-paper';

export const homeStyles = (theme: TCustomTheme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.neutralDark,
        },
        header: {
            padding: 24,
            backgroundColor: theme.colors.neutralDark,
        },
        tagline: {
            fontSize: 18,
            fontStyle: 'italic',
            marginTop: 8,
            color: theme.colors.secondary,
            textAlign: 'center',
        },
        headerTitle: {
            color: theme.colors.neutralDark,
            fontWeight: 'bold',
            marginBottom: 16,
        },
        highlighted: {
            backgroundColor: theme.colors.cardSurface,
            color: theme.colors.neutralDark,
            padding: 4,
        },
        headerSubtitle: {
            color: theme.colors.neutralDark,
            marginBottom: 24,
        },
        getStartedButton: {
            backgroundColor: theme.colors.accentRed,
            borderRadius: 24,
        },
        dashBoardButton: {
            backgroundColor: theme.colors.accentRed,
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
            color: theme.colors.neutralDark,
            fontWeight: 'bold',
            marginBottom: 24,
        },
        stepCard: {
            backgroundColor: theme.colors.cardSurface,
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
    });
};
