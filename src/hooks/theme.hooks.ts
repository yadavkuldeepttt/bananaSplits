import {useTheme} from 'react-native-paper';
import {TCustomColorKey, TCustomTheme} from '../components/theme';
import {Dimensions, StyleSheet} from 'react-native';

export const useAppTheme = (): TCustomTheme => {
  const theme = useTheme<TCustomTheme>();
  return theme;
};

export const useAppThemeStyles = <T>(
  styles: (theme: TCustomTheme) => StyleSheet.NamedStyles<T>,
) => {
  const theme = useAppTheme();
  return styles(theme);
};

export const useAppThemeColor = (key: TCustomColorKey): string => {
  const theme = useAppTheme();

  const _color = theme.colors[key];
  if (typeof _color === 'string') {
    return _color;
  } else {
    return _color.level0;
  }
};

export const useAppBottomNavDimensions = () => {
  const viewBoxWidth = 599;
  const viewBoxHeight = 140;
  const renderWidth = Dimensions.get('screen').width;
  const renderHeight = (viewBoxHeight / viewBoxWidth) * renderWidth + 4;
  const bottomBarHeight = renderHeight * 0.77;
  const shiftSvgToTopBy = renderHeight - bottomBarHeight;

  return {
    viewBoxWidth,
    viewBoxHeight,
    renderHeight,
    renderWidth,
    bottomBarHeight,
    shiftSvgToTopBy,
  };
};
