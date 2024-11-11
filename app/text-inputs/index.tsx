import { useState } from "react";
import { Text } from "react-native";

import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedTextInput } from "@/presentation/shared/ThemedTextInput";
import { ThemedView } from "@/presentation/shared/ThemedView";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <ThemedView margin>
      <ThemedCard className="my-5">
        <ThemedTextInput
          placeholder="Nombre completo"
          autoCapitalize={"words"}
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <ThemedTextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        <ThemedTextInput
          placeholder="Phone"
          keyboardType="phone-pad"
          onChangeText={(text) => setForm({ ...form, phone: text })}
        />
      </ThemedCard>

      <ThemedCard>
        <Text className="text-black dark:text-white p-3">
          {JSON.stringify(form, null, 2)}
        </Text>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
