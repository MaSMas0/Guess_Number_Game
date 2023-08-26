import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { FC, useState } from "react";
import Header from "../components/Header";
import { Link, Stack, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import EnterNumberBox from "../components/EnterNumberBox";
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertProps,
  DropdownAlertType,
} from "react-native-dropdownalert";
import Screen from "./Screen";
const GuessNumberScreen: FC = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  let alert = (_data: DropdownAlertData) =>
    new Promise<DropdownAlertData>((res) => res);
  const alertProps: DropdownAlertProps = {
    alertPosition: "bottom",
    warnColor: "orange",
  };
  type alertDataType = {
    Info: string;
    Warn: string;
    Error: string;
    Success: string;
  };
  const alertData = async (
    type: keyof alertDataType,
    title: string,
    message: string
  ) =>
    await alert({
      type: DropdownAlertType[type],
      title: title,
      message: message,
    });
  const onNumberChange = (text: string) => {
    setEnteredNumber(text);
  };
  const onNumberReset = () => {
    setEnteredNumber("");
  };
  const onConfirm = () =>
    !enteredNumber
      ? alertData("Warn", "Sorry", "You Must Enter a Number")
      : +enteredNumber > 99 || +enteredNumber < 1
      ? alertData("Info", "Sorry", "Number must be Between 1 and 99")
      : isNaN(+enteredNumber)
      ? alertData("Error", "Sorry", "You Must Enter Only a Number")
      : router.push("/src/screens/ComputerGuessScreen");
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
        <Header title="Guess my Number" />
        <EnterNumberBox
          enteredNumber={enteredNumber}
          onNumberChange={onNumberChange}
          onNumberReset={onNumberReset}
          onConfirm={onConfirm}
          isThereInput={true}
          boxTitle="Enter a Number"
          firstButtonText="Reset"
          secondButtonText="Confirm"
        />
      </View>
      <DropdownAlert alert={(func) => (alert = func)} {...alertProps} />
    </Screen>
  );
};

export default GuessNumberScreen;

const styles = StyleSheet.create({});
