import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { LinearGradient } from "expo-linear-gradient";

const Screen: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        colors={["red", "yellow"]}
        start={{ x: 0, y: 0.1 }}
      ></LinearGradient>
      {children}
    </ImageBackground>
  );
};

export default Screen;

const styles = StyleSheet.create({});
