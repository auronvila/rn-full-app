import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
      <StatusBar barStyle={'default'}/>
    </NavigationContainer>
  );
}


