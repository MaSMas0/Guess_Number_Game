import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const EnterNumberBox = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  return (
    <SafeAreaView style={styles.boxContainer}>
      <Text style={styles.titleOfBox}>Enter a Number</Text>
      <TextInput
        style={styles.enteredNumber}
        cursorColor={"#fff"}
        onChangeText={setEnteredNumber}
        value={enteredNumber}
      />
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            backgroundColor: "#B5338A",
            borderRadius: 20,
          }}
        >
          <Pressable
            onPress={() => {
              console.log(enteredNumber);
            }}
            style={{ padding: 15, paddingHorizontal: 40 }}
            android_ripple={{ color: "purple", foreground: false }}
          >
            <Text style={{ color: "#fff" }}>Reset</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "#B5338A",
            borderRadius: 20,
          }}
        >
          <Pressable
            onPress={() => {
              console.log(enteredNumber);
            }}
            style={{ padding: 15, paddingHorizontal: 40 }}
            android_ripple={{ color: "purple", foreground: false }}
          >
            <Text style={{ color: "#fff" }}>Confirm</Text>
          </Pressable>
        </View>
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
