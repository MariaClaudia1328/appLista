import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerButton: {
    width: "80%",
    height: 45,
    position: "absolute",
    bottom: 35,

    borderRadius: 10,
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
