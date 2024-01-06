import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSquare,
  faCheckSquare,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Swipeable } from "react-native-gesture-handler";

import { styles } from "../styles/ItemList";

export default function ItemList(prop: { itemList: string }) {
  const [pressed, setPressed] = useState(false);

  function handleOnPress() {
    setPressed(!pressed);
  }

  function LeftSwipeAction() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFCD29",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 10,
        }}
      >
        <FontAwesomeIcon icon={faPenToSquare} size={20} />
      </View>
    );
  }

  function RightSwipeAction() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F24822",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 10,
        }}
      >
        <FontAwesomeIcon icon={faTrashCan} size={20} />
      </View>
    );
  }

  function swipeOpen() {
    console.log("swipe open");
  }

  function swipeClose() {
    console.log("swipe close");
  }

  return (
    <Swipeable
      renderLeftActions={LeftSwipeAction}
      renderRightActions={RightSwipeAction}
      onSwipeableOpen={swipeOpen}
      onSwipeableClose={swipeClose}
    >
      <TouchableOpacity
        style={styles.itemListDefault}
        onPress={handleOnPress}
        activeOpacity={0.5}
      >
        <FontAwesomeIcon
          icon={pressed ? faCheckSquare : faSquare}
          style={pressed ? styles.iconListPressed : styles.iconList}
          size={25}
        />
        <Text style={pressed ? styles.itemListPressed : {}}>
          {prop.itemList}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  );
}
