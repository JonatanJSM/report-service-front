import { Slot, useRouter, useSegments } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const InitialRoute = () => {
  const { isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  
  useEffect(() => {
    if (isSignedIn === null){return;}

    const inAuthGroup = segments[0] === '(auth)';
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
