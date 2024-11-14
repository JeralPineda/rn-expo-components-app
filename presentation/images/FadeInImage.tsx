import { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";

import { useAnimation } from "@/hooks/useAnimation";

interface FadeInImageProps {
  uri: string;
  style: StyleProp<ImageStyle>;
}

export function FadeInImage({ uri, style }: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View className="items-center justify-center">
      {isLoaded && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoaded(false);
        }}
      />
    </View>
  );
}
