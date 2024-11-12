import { Platform } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ThemedButton } from "@/presentation/shared/ThemedButton";
import { ThemedText } from "@/presentation/shared/ThemedText";
import { ThemedView } from "@/presentation/shared/ThemedView";

export default function ModalTwo() {
  return (
    <ThemedView
      className="flex-1 items-center justify-center"
      bgColor="#A52182"
    >
      <ThemedText className="text-white text-2xl"> Otro Modal</ThemedText>

      <ThemedButton onPress={() => router.dismiss()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
}
