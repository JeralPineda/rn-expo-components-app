import { Pressable, Switch } from "react-native";
import { ThemedText } from "./ThemedText";

interface ThemedSwitchProps {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}

export function ThemedSwitch({
  text,
  value,
  className,
  onValueChange,
}: ThemedSwitchProps) {
  return (
    <Pressable
      className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
    >
      {text && <ThemedText type="h2">{text}</ThemedText>}

      <Switch value={value} onValueChange={onValueChange} />
    </Pressable>
  );
}
