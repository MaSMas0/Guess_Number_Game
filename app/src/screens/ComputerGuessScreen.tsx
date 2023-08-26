import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Screen from "./Screen";
import Header from "../components/Header";
import EnterNumberBox from "../components/EnterNumberBox";
const computerGuessScreen = () => {
  return (
    <Screen>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <Header title="Opponent's Guess" />
        <EnterNumberBox
          boxTitle="Lower or Higher"
          firstButtonText="—"
          secondButtonText="+"
        />
      </View>
    </Screen>
  );
};

export default computerGuessScreen;

const styles = StyleSheet.create({});
