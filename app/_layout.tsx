import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const InitialRoute = () => {
  const { isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  
  useEffect(() => {
    if (isSignedIn === null){return;}

    const inAuthGroup = segments[0] === '(auth)';
    const inBachesGroup = segments[0] === '(baches)';
    if (!isSignedIn && !inAuthGroup) {
      router.replace('/home');
    } else if (!isSignedIn && !inAuthGroup) {
      router.replace('/login');
    } else if (isSignedIn && !inBachesGroup) {
      return;
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
