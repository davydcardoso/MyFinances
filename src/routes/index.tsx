import React from 'react';
import { View } from 'react-native';
import { LoadingScreen } from '../screens/LoadingScreen';
import { useAuth } from '../contexts/AuthContext';
import { AuthRoutes } from './auth.routes';
import { UserRoutes } from './user.routes';
import { SplashScreen } from '../screens/SplashScreen';

export const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return user ? <UserRoutes /> : <AuthRoutes />;
};
