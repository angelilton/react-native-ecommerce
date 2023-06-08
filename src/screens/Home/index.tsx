import Onboarding from '@screens/Authentication/Onboarding';
import { createDrawerNavigator } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

export function HomeRouters() {
  return (
    <Navigator>
      <Screen name='Feed' component={Onboarding} />
    </Navigator>
  );
}
