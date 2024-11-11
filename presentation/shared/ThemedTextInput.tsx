import { TextInput, TextInputProps } from "react-native";

interface ThemedTextInputProps extends TextInputProps {
  className?: string;
}

export function ThemedTextInput({ className, ...rest }: ThemedTextInputProps) {
  return (
    <TextInput
      {...rest}
      className={`p-3 border border-slate-200 dark:border-slate-700 text-black dark:text-white focus:border-slate-400/50 focus:dark:border-slate-400/50 rounded-md ${className}`}
      placeholderTextColor="gray"
    />
  );
}
