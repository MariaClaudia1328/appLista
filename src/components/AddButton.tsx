import { TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/AddButton";

export default function AddButton() {
  function handleOnPress() {
    console.log("add button");
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.containerButton}
      activeOpacity={0.5}
    >
      <Text style={styles.textButton}>Adicionar item</Text>
    </TouchableOpacity>
  );
}
