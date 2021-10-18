import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC from "../screens/ScreenC";
import ScreenD from "../screens/ScreenD";

const Stack = createNativeStackNavigator();

function AppNavigation(){
  return <Stack.Navigator>
    <Stack.Screen name="ScreenC" component={ScreenC} />
    <Stack.Screen name="ScreenD" component={ScreenD} />
  </Stack.Navigator>
}

export default AppNavigation;
