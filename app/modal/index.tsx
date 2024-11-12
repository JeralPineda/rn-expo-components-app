import { Text } from "react-native";
import { Link, router } from "expo-router";

import { ThemedButton } from "@/presentation/shared/ThemedButton";
import { ThemedView } from "@/presentation/shared/ThemedView";

const ModalScreen = () => {
  return (
    <ThemedView className="px-4">
      <Link asChild href="/modal/modal-window">
        <Text className="text-light-text dark:text-dark-text my-2 text-2xl">
          Open Modal
        </Text>
      </Link>

      <ThemedButton onPress={() => router.push("/modal/modal-window")}>
        Abrir modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
