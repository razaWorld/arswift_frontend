// navigation/AppStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { ScreenNames } from '../routes';
import { AnalyticsReportsScreen, DashboardScreen, FleetManagementScreen, SettingScreen, SwitichControlPanalScreen } from '../screens/app';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.textInverse,
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
        headerShown:false
      }}
    >
      <Stack.Screen 
        name={ScreenNames.DASHBOARD} 
        component={DashboardScreen} 
      />
      <Stack.Screen 
        name={ScreenNames.FLEETMANAGEMENT} 
        component={FleetManagementScreen} 
      />
        <Stack.Screen 
        name={ScreenNames.SWITICHCONTROLPANAL} 
        component={SwitichControlPanalScreen} 
      />
      <Stack.Screen 
        name={ScreenNames.ANALYTICSREPORTS} 
        component={AnalyticsReportsScreen} 
      />
            <Stack.Screen 
        name={ScreenNames.SETTING} 
        component={SettingScreen} 
      />
    </Stack.Navigator>
  );
};

export default AppStack;
