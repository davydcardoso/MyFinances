import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '../components/Header';

import { DashboardScreen } from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export const UserRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
};
