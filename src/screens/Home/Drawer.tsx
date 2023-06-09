import { DrawerLayout, RoundIcon } from '@components/index';
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

export const DrawerContent = (props:DrawerContentComponentProps) => {
  return (
    <DrawerLayout>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Logout'
          icon={() => <RoundIcon name='log-out' bkColor='primary' />}
          onPress={() => props.navigation.navigate('Authentication')}
          labelStyle={{
            marginLeft: -15,
            fontFamily: 'SFProText-Semibold',
            fontSize: 16,
          }}
        />
      </DrawerContentScrollView>
    </DrawerLayout>
  );
};
