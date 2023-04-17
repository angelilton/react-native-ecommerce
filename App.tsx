import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Onboarding from '@Authentication/Onboarding'
import LoadAssets from '@components/LoadAssets';
import theme from './src/theme';


const { Navigator, Screen } = createStackNavigator();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};


const AuthenticationScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
            >
            <Screen name='Onboarding' component={Onboarding} />
          </Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationScreen />
    </NavigationContainer>
  );
}
