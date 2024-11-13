import { useState } from "react";
import { FlatList, Image } from "react-native";

import { ThemedView } from "@/presentation/shared/ThemedView";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

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
    <Image
      //
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{
        width: "100%",
        height: 400,
      }}
    />
  );
};
