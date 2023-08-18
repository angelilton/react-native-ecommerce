import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthRoutes } from '@screens/Authentication'
import { HomeRouters } from '@screens/Home';
import LoadAssets from '@components/LoadAssets';
import theme from './src/theme';

const { Navigator, Screen } = createStackNavigator();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' translucent backgroundColor='transparent' />
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <Navigator
            initialRouteName={'Home'}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Screen name='Authentication' component={AuthRoutes} />
            <Screen name='Home' component={HomeRouters} />
          </Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
