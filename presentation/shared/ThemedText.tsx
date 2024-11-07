import { Text, TextProps } from "react-native";

type TypeText = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface ThemedTextProps extends TextProps {
  className?: string;
  type?: TypeText;
}

export function ThemedText({ className, type, ...rest }: ThemedTextProps) {
  return (
    <Text
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "text-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "text-normal underline" : undefined,
        className,
      ].join(" ")}
      {...rest}
    />
  );
}
