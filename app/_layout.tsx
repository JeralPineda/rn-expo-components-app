import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View } from "react-native";

import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import "../global.css";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "@/presentation/shared/ThemedView";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: backgroundColor }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <Stack> */}
        <ThemedView margin>
          <Text className="p-5 text-3xl text-light-primary dark:text-dark-primary">
            Hello
          </Text>
        </ThemedView>
        {/* </Stack> */}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
