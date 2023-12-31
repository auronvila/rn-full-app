import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Home, Notifications, Wallet} from '../screens';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Drawernavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props}/>}
      screenOptions={{
      drawerActiveBackgroundColor: COLORS.primary,
      drawerActiveTintColor: COLORS.white,
      drawerLabelStyle: {marginLeft: -20},
      swipeEnabled:false,
      gestureEnabled: false,
    }}>
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color}/>
          ),
        }}
        name={ROUTES.HOME_TAB}
        component={HomeBottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          title: 'Wallet',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="wallet" size={18} color={color}/>
          ),
        }}
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color}/>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}