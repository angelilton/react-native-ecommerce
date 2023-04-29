import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './Onboarding';
import Welcome from './Welcome';
import Login from './Login';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Onboarding' component={Onboarding} />
      <Screen name='Welcome' component={Welcome} />
      <Screen name='Login' component={Login} />
    </Navigator>
  );
};
