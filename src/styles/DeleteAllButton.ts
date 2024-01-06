import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerButton: {
    width: "auto",
    height: 45,
    position: "absolute",
    top: 60,
    right: 15,

    borderRadius: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#2F2C99",
  },

  textButton: {
    color: "#BDDBFF",
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
