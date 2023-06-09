import Onboarding from '@screens/Authentication/Onboarding';
import {  createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Drawer';
import { RoundIcon } from '@components/RoundIcon';

const {Navigator, Screen} = createDrawerNavigator();

export function HomeRouters() {
  return (
    <Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: '80%',
        },
        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily: 'SFProText-Semibold',
          fontSize: 16
        },
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor:'#BFEAF5'
      }}
    >
      <Screen
        name='Outfit Ideas'
        component={Onboarding}
        options={{
          drawerIcon: () => <RoundIcon name='zap' bkColor='primary' />,
        }}
      />
      <Screen
        name='Favorite Outfits'
        component={Onboarding}
        options={{
          drawerIcon: () => <RoundIcon name='heart' bkColor='drawer1' />,
        }}
      />
      <Screen
        name='Edit Profile'
        component={Onboarding}
        options={{
          drawerIcon: () => <RoundIcon name='user' bkColor='drawer2' />,
        }}
      />
      <Screen
        name='Transaction History'
        component={Onboarding}
        options={{
          drawerIcon: () => <RoundIcon name='clock' bkColor='drawer3' />,
        }}
      />
      <Screen
        name='Notification Settings'
        component={Onboarding}
        options={{
          drawerIcon: () => <RoundIcon name='settings' bkColor='drawer4' />,
        }}
      />
    </Navigator>
  );
}
