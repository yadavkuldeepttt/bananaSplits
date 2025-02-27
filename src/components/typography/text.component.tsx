import React, {PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native-paper';
import {TCustomColorKey} from '../theme';
import {useAppThemeColor} from '../../hooks/theme.hooks';
import {TextStyle} from 'react-native';

type TTextProps<T> = PropsWithChildren & {
  variant?: TextProps<T>['variant'];
  color?: TCustomColorKey;
  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
  numberOfLines?: number;
  textDecorationLine?: TextStyle['textDecorationLine'];
};

export const TextCmp = (props: TTextProps<string>) => {
  const fontColor = useAppThemeColor(props?.color ?? 'neutralDark');

  return (
    <Text
      variant={props.variant}
      allowFontScaling={false}
      numberOfLines={ props.numberOfLines}
      style={{
        color: fontColor,
        fontWeight: props.fontWeight,
        textAlign: props.textAlign,
        textDecorationLine: props.textDecorationLine
      }}>
      {props.children}
    </Text>
  );
};
