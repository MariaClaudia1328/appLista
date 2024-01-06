import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "../styles/HomeStyles";
import ItemList from "components/ItemList";
import AddButton from "components/AddButton";
import DeleteAllButton from "components/DeleteAllButton";

const mockedData = [
  {
    data: "01/01/2024",
    list: ["item01", "item02", "item03"],
    id: "01",
  },
];

export default function Home() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    mockedData.map((item) => {
      setTitle(item.data);
      setItems(item.list);
    });
  });
  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleHome}>{title}</Text>
      <DeleteAllButton />

      <FlatList
        data={items}
        renderItem={({ item }) => <ItemList itemList={item} />}
        keyExtractor={(item) => item}
        style={{
          flexGrow: 0,
        }}
      />
      <AddButton />
    </View>
  );
}
