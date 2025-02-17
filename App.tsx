import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {StyleSheet, ScopedTheme} from 'react-native-unistyles';

type SectionProps = {
  style?: StyleProp<ViewStyle>;
};

function Section({style}: SectionProps): React.JSX.Element {
  return <View style={[sectionStyles.sectionContainer, style]} />;
}

const sectionStyles = StyleSheet.create(theme => ({
  sectionContainer: {
    backgroundColor: theme.colors.background,
    height: 100,
  },
}));

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Section />
      <ScopedTheme name="dark">
        <Section style={styles.sectionExtraStyles} />
      </ScopedTheme>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(theme => ({
  sectionExtraStyles: {
    backgroundColor: theme.colors.background2,
  },
}));

export default App;
