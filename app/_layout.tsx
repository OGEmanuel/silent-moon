import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    helveticaLight: require("../assets/fonts/helvetica-neue-master/HelveticaNeue-Light.otf"),
    helveticaRegular: require("../assets/fonts/helvetica-neue-master/HelveticaNeue-Regular.otf"),
    helveticaItalic: require("../assets/fonts/helvetica-neue-master/HelveticaNeue-RegularItalic.otf"),
    helveticaMedium: require("../assets/fonts/helvetica-neue-master/HelveticaNeue-Medium.otf"),
    helveticaBold: require("../assets/fonts/helvetica-neue-master/HelveticaNeue-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
