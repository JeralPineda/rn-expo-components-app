import { useState } from "react";
import { useColorScheme } from "nativewind";

import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedSwitch } from "@/presentation/shared/ThemedSwitch";
import { ThemedView } from "@/presentation/shared/ThemedView";

const ThemesScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSetting, setDarkModeSetting] = useState({
    darkMode: colorScheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");

    setDarkModeSetting({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
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
