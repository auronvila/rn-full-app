import {createStackNavigator} from '@react-navigation/stack';
import {ForgotPassword, Login, Register,} from '../screens';
import {COLORS, ROUTES} from '../constants';
import Drawernavigator from './DrawerNavigator';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();
// Navigator, Screen, Group

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      animationEnabled: true,
      headerTintColor: COLORS.white,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: COLORS.primary,
      },

    }} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen options={{
        headerShown: false,
      }} name={ROUTES.LOGIN} component={Login}/>
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} options={({route}) => ({
        title: route.params.userId,
      })}/>
      <Stack.Screen name={ROUTES.REGISTER} component={Register}/>
      <Stack.Screen name={ROUTES.HOME} component={Drawernavigator} options={{
        gestureEnabled: false,
        headerShown: false
      }}/>
    </Stack.Navigator>
  );
}