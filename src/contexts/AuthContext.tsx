import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Buffer } from 'buffer';
import { api } from '../services/api';

export type UserAuthProps = {
  name: string;
  email: string;
};

interface AuthState {
  token: string;
  user: object;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export type UserProps = {
  id: string;
  isAdmin: boolean;
  name: string;
  email: string;
};

interface AuthContextProps {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = await AsyncStorage.getItem('@MyFinances:token');
      const user = await AsyncStorage.getItem('@MyFinances:user');

      if (token && user) {
        setData({ token: token, user: JSON.parse(user) });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    const credentials = Buffer.from(`${email}:${password}`).toString('base64');

    const response = await api.post('/users/singin', null, {
      headers: { Authorization: `Basic ${credentials}` },
    });

    const { token, user } = response.data;

    await AsyncStorage.setItem('@MyFinances:token', token);
    await AsyncStorage.setItem('@MyFinances:user', JSON.stringify(user));

    setData({ token: token, user: user });
  };

  const signOut = async () => {
    await AsyncStorage.clear();

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}
