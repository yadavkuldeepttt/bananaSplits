// https://github.com/jsamr/react-native-font-demo#ios
// See above demo to add fonts for IOS

import {MD3LightTheme as DefaultTheme, MD3Theme} from 'react-native-paper';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';

export type TCustomColorKey = keyof TCustomTheme['colors'];

export type TCustomElevation = {
  shadowColor: string;
  shadowOffset: {width: number; height: number};
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type TCustomTheme = MD3Theme & {
  colors: MD3Colors & {
    transparent: string;
    magnolia:string;
    lightMangolia:string;
    blueSurface: string;
    onBlueSurface: string;
    handleGray: string;
    green: string;
    blue: string;
    orange: string;
    yellow: string;
    lightpastelOrange: string;
    pastelOrange: string;
    pastelGreen: string;
    lightpastelGreen: string;
    pastelBlue: string;
    textDark: string;
    textMedium: string;
    textLight: string;

    textInverseDark: string;
    textInverseMedium: string;
    textInverseLight: string;

    neutralLight: string;
    neutralDark: string;
    lightGrey: string;
    linkingColor:string;
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
      fontSize: 16,
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
    surface: 'rgb(248, 251, 254)',

    transparent: 'rgba(0,0,0,0)',
    magnolia:"rgba(247, 233, 255, 1)",
    lightMangolia:'rgba(247, 233, 255, 0.3)',
    blueSurface: 'rgb(64, 72, 128)',
    onBlueSurface: 'rgb(255, 255, 255)',

    handleGray: 'rgb(135, 137, 137)',

    green: 'rgb(57, 210, 126)',
    blue: 'rgb(55, 159, 206)',
    orange: 'rgb(241, 178, 62)',
    yellow:'rgba(255, 183, 51, 1)',

    pastelBlue: 'rgb(226, 246, 255)',
    pastelGreen: 'rgb(227, 247, 236)',
    lightpastelOrange: ' rgba(255, 243, 221, 0.4)',
    pastelOrange: 'rgb(255, 243, 221)',
    lightpastelGreen:'rgba(227, 247, 236, 0.4)',
    textDark: 'rgb(28, 27, 31)',
    textMedium: 'rgb(66, 66, 66)',
    textLight: 'rgb(99, 99, 99)',

    textInverseDark: 'rgb(255, 255, 255)',
    textInverseMedium: 'rgb(255, 255, 255)',
    textInverseLight: 'rgb(255, 255, 255)',

    neutralDark: 'rgb(0, 0, 0)',
    neutralLight: 'rgb(255, 255, 255)',
    lightGrey:"rgba(36, 36, 36, 0.2)",
    linkingColor:'rgba(0, 14, 109, 1)',
  },
  spacing: val => val * 8,
  elevation: {
    none: null,
    low: {
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 2,
    },
    high: {
      shadowColor: 'rgba(0, 0, 0, 0.75)',
      shadowOffset: {width: -2, height: 4},
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
