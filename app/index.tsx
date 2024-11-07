import { Link } from "expo-router";

import { ThemedText } from "@/presentation/shared/ThemedText";
import { ThemedView } from "@/presentation/shared/ThemedView";

export default function ComponentsApp() {
  return (
    <ThemedView margin>
      <ThemedText>ComponentsApp</ThemedText>
      <Link className="dark:text-white " href="/animation-101">
        Hola mundo
      </Link>
    </ThemedView>
  );
}
