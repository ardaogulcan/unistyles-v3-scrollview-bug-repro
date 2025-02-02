import {StyleSheet} from 'react-native-unistyles';

const lightTheme = {
  colors: {
    background: 'white',
    text: 'black',
  },
};

const darkTheme = {
  colors: {
    background: 'black',
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
