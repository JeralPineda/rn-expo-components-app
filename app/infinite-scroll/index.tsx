import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { FadeInImage } from "@/presentation/images/FadeInImage";
import { ThemedView } from "@/presentation/shared/ThemedView";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    // (5 + 1) 6,7, 8, 9, 10
    const newArray = Array.from({ length: 5 }, (_, i) => i + numbers.length);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        //Cuando llega al final de la lista, se ejecuta el metodo loadMore
        // y se agregan mas elementos a la lista
        onEndReached={loadMore}
        onEndReachedThreshold={0.6} // Cuando llega al 60% de la pantalla se ejecuta el método loadMore
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
    // <Image
    //   //
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     width: "100%",
    //     height: 400,
    //   }}
    // />
  );
};
