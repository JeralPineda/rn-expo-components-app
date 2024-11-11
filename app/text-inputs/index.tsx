import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedTextInput } from "@/presentation/shared/ThemedTextInput";
import { ThemedView } from "@/presentation/shared/ThemedView";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView margin>
          <ThemedCard className="my-5">
            <ThemedTextInput
              className="mb-4"
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              className="mb-4"
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

          <ThemedCard className="my-3">
            <Text className="text-black dark:text-white p-3">
              {JSON.stringify(form, null, 2)}
            </Text>
          </ThemedCard>

          <ThemedCard className="my-3">
            <Text className="text-black dark:text-white p-3">
              {JSON.stringify(form, null, 2)}
            </Text>
          </ThemedCard>

          <ThemedCard className="my-3">
            <Text className="text-black dark:text-white p-3">
              {JSON.stringify(form, null, 2)}
            </Text>
          </ThemedCard>

          <ThemedCard className="my-3">
            <Text className="text-black dark:text-white p-3">
              {JSON.stringify(form, null, 2)}
            </Text>
          </ThemedCard>

          <ThemedCard className="my-3">
            <Text className="text-black dark:text-white p-3">
              {JSON.stringify(form, null, 2)}
            </Text>
          </ThemedCard>

          <ThemedCard

          // style={{ marginBottom: isIOS ? 100 : 10 }}
          >
            <ThemedTextInput
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>

        {isIOS && <View style={{ height: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
