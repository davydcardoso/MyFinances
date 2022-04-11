import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function PageExample() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Page</Text>
    </View>
  );
}

export const UserRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={PageExample} />
    </Stack.Navigator>
  );
};
