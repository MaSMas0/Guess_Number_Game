import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Props } from "./EnterNumberBoxType";
import CustomButton from "../Button";

const EnterNumberBox: FC<Props> = ({
  enteredNumber,
  onNumberChange,
  onNumberReset,
  onConfirm,
  boxTitle,
  isThereInput,
  firstButtonText,
  secondButtonText,
}) => {
  return (
    <SafeAreaView style={styles.boxContainer}>
      <Text style={styles.titleOfBox}>{boxTitle}</Text>
      {isThereInput && (
        <TextInput
          style={styles.enteredNumber}
          cursorColor={"#fff"}
          onChangeText={onNumberChange}
          value={enteredNumber}
        />
      )}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton
          onPressHandler={onNumberReset}
          buttonName={firstButtonText}
        />
        <CustomButton
          onPressHandler={onConfirm}
          buttonName={secondButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default EnterNumberBox;

const styles = StyleSheet.create({
  boxContainer: {
    // flex: 1,
    borderWidth: 2,
    // justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderColor: "#311432",
    borderRadius: 25,
    backgroundColor: "#311432",
    opacity: 1,
    height: 200,
    justifyContent: "space-around",
  },
  titleOfBox: {
    color: "yellow",
    fontSize: 20,
  },
  enteredNumber: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    color: "yellow",
    width: 25,
    fontSize: 20,
  },
});
