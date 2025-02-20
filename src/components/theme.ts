// https://github.com/jsamr/react-native-font-demo#ios
// See above demo to add fonts for IOS

import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

export type TCustomColorKey = keyof TCustomTheme['colors'];

export type TCustomElevation = {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type TCustomTheme = MD3Theme & {
  colors: MD3Colors & {
    primary: string;
    secondary: string;
    neutralDark: string;
    surface: string;
    accentRed: string;
    natralWhite: string;
    cardSurface: string;


    transparent: string;
    primaryBlue: string;
    placeholderGrey: string;
    lightGrey: string;
    lightGreen: string;
    textGreen: string;
    textBlack: string;
    blueSurface: string;
    onBlueSurface: string;
    handleGray: string;
    green: string;
    blue: string;
    orange: string;
    yellow: string;
    pastelOrange: string;
    pastelGreen: string;
    pastelBlue: string;
    redText: string;
    textMedium: string;
    textLight: string;
    textInverseDark: string;
    textInverseMedium: string;
    textInverseLight: string;


  };
  spacing: (val: number) => number;
  elevation: {
    none: null;
    low: TCustomElevation;
    // medium: TCustomShadow;
    high: TCustomElevation;
  };
  radius: {
    md: number;
    sm: number;
  };
};

export const customTheme: TCustomTheme = {
  ...DefaultTheme,
  fonts: {
    default: {
      fontFamily: 'Poppins',
      fontWeight: '400',
      letterSpacing: 0,
    },
    displayLarge: {
      fontFamily: 'Poppins',
      fontSize: 8,
      letterSpacing: 0.1,
      lineHeight: 16,
      fontWeight: '400',
    },
    displayMedium: {
      fontFamily: 'Poppins',
      fontSize: 45,
      letterSpacing: 0,
      lineHeight: 52,
      fontWeight: '400',
    },
    displaySmall: {
      fontFamily: 'Poppins',
      fontSize: 36,
      letterSpacing: 0,
      lineHeight: 44,
      fontWeight: '400',
    },
    headlineLarge: {
      fontFamily: 'Poppins',
      fontSize: 32,
      letterSpacing: 0,
      lineHeight: 40,
      fontWeight: '400',
    },
    headlineMedium: {
      fontFamily: 'Poppins',
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 36,
      fontWeight: '400',
    },
    headlineSmall: {
      fontFamily: 'Poppins',
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 32,
      fontWeight: '400',
    },
    titleLarge: {
      fontFamily: 'Poppins',
      fontSize: 22,
      letterSpacing: 0,
      lineHeight: 28,
      fontWeight: '400',
    },
    titleMedium: {
      fontFamily: 'Poppins',
      fontSize: 20,
      letterSpacing: 0.15,
      lineHeight: 24,
      fontWeight: '400',
    },
    titleSmall: {
      fontFamily: 'Poppins',
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      fontWeight: '400',
    },
    labelLarge: {
      fontFamily: 'Poppins',
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      fontWeight: '400',
    },
    labelMedium: {
      fontFamily: 'Poppins',
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 16,
      fontWeight: '400',
    },
    labelSmall: {
      fontFamily: 'Poppins',
      fontSize: 11,
      letterSpacing: 0.5,
      lineHeight: 16,
      fontWeight: '400',
    },
    bodyLarge: {
      fontFamily: 'Poppins',
      fontSize: 16,
      letterSpacing: 0.5,
      lineHeight: 24,
      fontWeight: '400',
    },
    bodyMedium: {
      fontFamily: 'Poppins',
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: 20,
      fontWeight: '400',
    },
    bodySmall: {
      fontFamily: 'Poppins',
      fontSize: 12,
      letterSpacing: 0.4,
      lineHeight: 16,
      fontWeight: '400',
    },
  },
  colors: {
    ...DefaultTheme.colors,
    primary: "rgba(232, 255, 176, 1)",
    secondary: 'rgba(214, 255, 156, 1)',
    neutralDark: 'rgba(0, 0, 0, 1)',
    surface: 'rgb(248, 251, 254)',
    accentRed: "rgba(255, 77, 77, 1)",
    natralWhite: 'rgba(255, 255, 255, 1)',
    cardSurface: "rgba(255, 255, 171, 1)",


    primaryBlue: 'rgba(29, 113, 184, 1)',
    placeholderGrey: 'rgba(110, 110, 110, 100)',
    lightGrey: 'rgba(105, 105, 105, 100)',
    lightGreen: 'rgba(24, 166, 97, 100)',
    textGreen: 'rgba(0, 149, 56, 100)',
    textBlack: 'rgba(36, 42, 55, 100)',
    transparent: 'rgba(0,0,0,0)',
    blueSurface: 'rgb(64, 72, 128)',
    onBlueSurface: 'rgb(255, 255, 255)',
    handleGray: 'rgba(188, 188, 188, 1)',
    green: 'rgb(57, 210, 126)',
    blue: 'rgb(55, 159, 206)',
    orange: 'rgb(241, 178, 62)',
    yellow: 'rgba(255, 183, 51, 1)',
    pastelBlue: 'rgb(226, 246, 255)',
    pastelGreen: 'rgb(227, 247, 236)',
    pastelOrange: 'rgb(255, 243, 221)',
    textMedium: 'rgb(66, 66, 66)',
    textLight: 'rgb(99, 99, 99)',
    textInverseDark: 'rgb(255, 255, 255)',
    textInverseMedium: 'rgb(255, 255, 255)',
    textInverseLight: 'rgb(255, 255, 255)',
    redText: 'rgba(255, 24, 24, 1)',
  },
  spacing: val => val * 8,
  elevation: {
    none: null,
    low: {
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 2,
    },
    high: {
      shadowColor: 'rgba(0, 0, 0, 0.75)',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
  },
  radius: {
    md: 12,
    sm: 6,
  },
};
