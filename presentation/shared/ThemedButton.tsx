import { Pressable, PressableProps, Text } from "react-native";

interface ThemedButtonProps extends PressableProps {
  className?: string;
  children: string;
}

export function ThemedButton({
  className,
  children,
  ...rest
}: ThemedButtonProps) {
  return (
    <Pressable
      {...rest}
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-lg px-6 py-4 active:opcaity-80 ${className}`}
    >
      <Text className="text-white text-lg">{children}</Text>
    </Pressable>
  );
}
