import { useState } from "react";

import { useThemeChangerContext } from "@/presentation/context/theme-changer-context";
import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedSwitch } from "@/presentation/shared/ThemedSwitch";
import { ThemedView } from "@/presentation/shared/ThemedView";

const ThemesScreen = () => {
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext();

  const [darkModeSetting, setDarkModeSetting] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();

    setDarkModeSetting({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSetting({
      darkMode: darkModeSetting.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSetting.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          text="System Mode"
          className="mb-5"
          value={darkModeSetting.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
