import {createStackNavigator} from '@react-navigation/stack';
import {Settings, SettingsDetail} from '../screens';
import {COLORS, ROUTES} from '../constants';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();
// Navigator, Screen, Group

export default function SettingsNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SETTINGS}>
      <Stack.Screen options={{
        headerShown: false,
      }} name={ROUTES.SETTINGS} component={Settings}/>
      <Stack.Screen options={{headerShown: false}} name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail}/>
    </Stack.Navigator>
  );
}

