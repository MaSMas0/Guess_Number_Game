import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Props } from "./HeaderType";
import { SafeAreaView } from "react-native-safe-area-context";

const Header: FC<Props> = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={{ fontSize: 30, color: "#fff" }}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    borderColor: "#fff",
    borderWidth: 2,
    padding: 10,
  },
});
