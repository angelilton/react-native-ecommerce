import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding';
import LoadAssets from './src/components/LoadAssets';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { Navigator, Screen } = createStackNavigator();

// const assets = [...authAssets, ...homeAssets];

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};


const AuthenticationScreen = () => {
  return (
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationScreen />
    </NavigationContainer>
  );
}
