import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedViewProps extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

export function ThemedView({
  style,
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
}: ThemedViewProps) {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
}
