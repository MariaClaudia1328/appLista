import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemListDefault: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#BDDBFF",
    padding: 15,
    width: 350,
    height: 50,
    gap: 10,
    flexDirection: "row",
  },
  itemListPressed: {
    fontStyle: "italic",
    textDecorationLine: "line-through",
    color: "#919191",
  },
  iconList: {
    width: "30%",
    color: "#414141",
  },
  iconListPressed: {
    width: "30%",
    color: "#919191",
  },
});

// fontColor light: #919191
// font Color dark: #414141

// lightest blue:#BDDBFF
// light blue: #A2B5F9
// blue:#7471FF
// dark blue: #2F2C99
