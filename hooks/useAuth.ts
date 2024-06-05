import { useState, useEffect } from 'react';
import { login } from '../api/login';
import { getToken, removeToken } from '../api/login';

export const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      setIsSignedIn(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await login(email, password);
    setIsSignedIn(true);
  };

  const signOut = async () => {
    await removeToken();
    setIsSignedIn(false);
  };

  return { isSignedIn, loading, signIn, signOut };
};
