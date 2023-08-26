import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Props } from "./ButtonType";

const index: FC<Props> = ({ onPressHandler, buttonName }) => {
  return (
    <View
      style={{
        backgroundColor: "#B5338A",
        borderRadius: 20,
      }}
    >
      <Pressable
        onPress={onPressHandler}
        style={{ padding: 15, paddingHorizontal: 40 }}
        android_ripple={{ color: "purple", foreground: false }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>{buttonName}</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
