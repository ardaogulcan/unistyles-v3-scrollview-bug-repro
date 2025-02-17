import {StyleSheet} from 'react-native-unistyles';

const lightTheme = {
  colors: {
    background: '#f0f0f0',
    background2: 'cyan',
    text: 'black',
  },
};

const darkTheme = {
  colors: {
    background: '#111111',
    background2: 'red',
    text: 'white',
  },
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: appThemes,
});
