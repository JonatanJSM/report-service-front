import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" 
import { useEffect, useState } from "react";
import { getToken } from "./api";

const InitialRoute = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      console.log('token', token);
      
      setIsSignedIn(!!token);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isSignedIn === null){
      console.log('isSignedIn------', isSignedIn);
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';
    console.log('segments', isSignedIn);
    
    console.log('inAuthGroup', inAuthGroup);
    
    if (isSignedIn && !inAuthGroup) {
      router.replace('/home');
    } else if (!isSignedIn && !inAuthGroup) {
      router.replace('/login');
    }
  }, [isSignedIn, segments]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <InitialRoute />
    </GluestackUIProvider>
  );
}

export default RootLayout;
