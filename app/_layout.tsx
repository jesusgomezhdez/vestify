import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';

import "../global.css";

SplashScreen.preventAutoHideAsync();  

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Outfit-Black': require('../assets/fonts/Outfit-Black.ttf'),
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Light': require('../assets/fonts/Outfit-Light.ttf'),
    'Outfit-Medium': require('../assets/fonts/Outfit-Medium.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return <Slot />;
}
