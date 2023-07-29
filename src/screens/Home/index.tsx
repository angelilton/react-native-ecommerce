import Onboarding from '@screens/Authentication/Onboarding';
import {  createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Drawer';
import { RoundIcon } from '@components/RoundIcon';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Feather';
import OutfitIdeas from './OutfitIdeas';
import FavoriteOutfits from './FavoriteOutfits';
import TransactionHistory from './TransactionHistory';
import EditProfile from './EditProfile';
import Cart from './Cart/Cart';

const { Navigator, Screen } = createDrawerNavigator();


type HeaderButtonProps = {
  iconName: keyof typeof Icon.glyphMap;
  background?: boolean;
  onPress: () => void;
};


const HeaderButton = ({ iconName, onPress, background }: HeaderButtonProps) => (
  <BorderlessButton onPress={onPress}>
    <RoundIcon
      name={iconName}
      bkColor={background ? 'background' : 'darkGrey50'}
      dank
    />
  </BorderlessButton>
);

export function HomeRouters() {
  return (
    <Navigator
      initialRouteName={'Cart'}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        // headerShown: false,
        drawerStyle: {
          width: '80%',
        },

        headerTitleContainerStyle: {
          width: '70%',
          alignItems: 'center',
        },
        headerLeftContainerStyle: {
          paddingLeft: 8,
        },
        headerRightContainerStyle: {
          paddingRight: 8,
        },

        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily: 'SFProText-Semibold',
          fontSize: 14,
        },
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#BFEAF5',
      }}
    >
      <Screen
        name='OutfitIdeas'
        component={OutfitIdeas}
        options={({ navigation }) => ({
          title: 'Outfit Ideas',
          drawerIcon: () => <RoundIcon name='zap' bkColor='primary' />,
          headerRight: () => (
            <HeaderButton
              iconName='shopping-bag'
              onPress={() => navigation.navigate('Cart')}
            />
          ),
        })}
      />
      <Screen
        name='FavoriteOutfits'
        component={FavoriteOutfits}
        options={({ navigation }) => ({
          title: 'Favorite Outfits',
          drawerIcon: () => <RoundIcon name='heart' bkColor='drawer1' />,
          headerRight: () => (
            <HeaderButton
              iconName='shopping-bag'
              onPress={() => navigation.navigate('Cart')}
            />
          ),
        })}
      />

      <Screen
        name='TransactionHistory'
        component={TransactionHistory}
        options={({ navigation }) => ({
          title: 'Transaction History',
          drawerIcon: () => <RoundIcon name='clock' bkColor='drawer3' />,
          headerLeft: () => (
            <HeaderButton
              background
              iconName='arrow-left'
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => (
            <HeaderButton
              iconName='share'
              onPress={() => console.log('Settings')}
            />
          ),
        })}
      />
      <Screen
        name='EditProfile'
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          drawerIcon: () => <RoundIcon name='user' bkColor='drawer2' />,
        }}
      />
      <Screen
        name='NotificationSettings'
        component={Onboarding}
        options={({ navigation }) => ({
          title: 'Notification Settings',
          drawerIcon: () => <RoundIcon name='settings' bkColor='drawer4' />,
          headerLeft: () => (
            <HeaderButton
              background
              iconName='arrow-left'
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Screen
        name='Cart'
        component={Cart}
        options={({ navigation }) => ({
          title: 'Cart',
          drawerItemStyle: { display: 'none' },
          headerLeft: () => (
            <HeaderButton
              background
              iconName='arrow-left'
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Navigator>
  );
}
