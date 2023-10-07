import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notifications, Settings, Wallet} from '../screens';
import {COLORS, ROUTES} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsNavigator from './SettingsNavigator';
import {StyleSheet} from 'react-native';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props}/>}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel:false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }
          // icon
          return <Icon name={iconName} size={size} color={color}/>
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{tabBarButton: props => <CustomTabBarButton route={'home'} {...props}/>}}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{tabBarButton: props => <CustomTabBarButton {...props}/>}}
      />
      <Tab.Screen
        name={ROUTES.WALLET}
        component={Wallet}
        options={{tabBarButton: props => <CustomTabBarButton {...props}/>}}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{tabBarLabel: 'Settings', tabBarButton: props => <CustomTabBarButton route={'settings'} {...props}/>
        }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 32,
    right: 10,
    left: 10,
    height: 90,
  }
})