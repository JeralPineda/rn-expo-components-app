import { Animated, Easing } from "react-native";

import { useAnimation } from "@/hooks/useAnimation";
import { ThemedButton } from "@/presentation/shared/ThemedButton";
import { ThemedView } from "@/presentation/shared/ThemedView";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />

      <ThemedButton
        className="my-4"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({ easing: Easing.bounce });
        }}
      >
        FadeIn
      </ThemedButton>

      <ThemedButton className="" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
