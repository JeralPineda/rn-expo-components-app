import { Platform, Pressable, Switch, View } from "react-native";

import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedSwitchProps {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

export function ThemedSwitch({
  text,
  value,
  className,
  onValueChange,
}: ThemedSwitchProps) {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex flex-row items-center justify-between mx-2 active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}

      <Switch
        value={value}
        onValueChange={onValueChange}
        // ios_backgroundColor={value ? "green" : "red"}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
}
