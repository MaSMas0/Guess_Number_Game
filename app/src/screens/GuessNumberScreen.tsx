import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { FC } from "react";
import Header from "../components/Header";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import EnterNumberBox from "../components/EnterNumberBox";

const GuessNumberScreen: FC = (): JSX.Element => {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <ImageBackground
      source={require("../../../assets/background.png")}
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
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <Header title="Guess my Number" />
        <EnterNumberBox />
      </View>
    </ImageBackground>
    // </View>
  );
};

export default GuessNumberScreen;

const styles = StyleSheet.create({});
