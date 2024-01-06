import { TouchableOpacity, Text } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { styles } from "../styles/DeleteAllButton";

export default function DeleteAllButton() {
  function handleOnPress() {
    console.log("delete all button");
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.containerButton}
      activeOpacity={0.5}
    >
      <FontAwesomeIcon icon={faTrashCan} style={styles.textButton} />
    </TouchableOpacity>
  );
}
