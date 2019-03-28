import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#f5f4f6",
    height: 28,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: { fontSize: 16, fontWeight: "600" } //600 -> bold
});

/**
 * This Header is used in the alphabetical ordered lists. The index is the alphabet letter.
 * @param {*} param0
 */
const Header = ({ index }) => (
  <View style={styles.headerWrapper}>
    <Text style={styles.headerText}>{index}</Text>
  </View>
);

export default Header;
