import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Button from "./components/Button";
import MiniButton from "./components/MiniButton";

const { height } = Dimensions.get('window')
const { width } = Dimensions.get('window')

const App = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if(firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  }

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber); 
    setFirstNumber("");
  }

  const AllClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  }

  const Clear = () => {
    setFirstNumber("");
  }

  const getResult = () => {
    switch(operation) {
      case "+":
        AllClear();
        setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
      case "-":
        AllClear();
        setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
      case "x":
        AllClear();
        setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
      case "/":
        AllClear();
        setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
      default:
        AllClear();
        setResult(0);
        break;
    }
  }

  return (
    <View style = {styles.root}>
      <View style = {styles.main}>
        <View style = {styles.display}>

        </View>
        <View style = {styles.buttonGroup}>
          <View style = {styles.bottom}>
            <View style = {styles.buttonRow}>
              <Button text = "AC" color = "#ffdade" />
              <Button text = "C" color = "#ffdade" />
              <Button text = "%" />
              <Button text = "÷" />
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "7" /> 
              <Button text = "8" />
              <Button text = "9" />
              <Button text = "x" />
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "4" />
              <Button text = "5" />
              <Button text = "6" />
              <Button text = "-" />
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "1" />
              <Button text = "2" />
              <Button text = "3" />
              <Button text = "+" />
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "0" />
              <Button text = "." />
              <Button text = "⌫" />
              <Button text = "=" color = "#ffdade" />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create((
  {
    root: {
      height: height,
      width: width,
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#ffffff"
    },

    main: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "space-between",
    },

    display: {
      flex: 1,
      backgroundColor: "#a098a4",
      borderBottomRightRadius: Math.min(width/5, height/7)/2,
      borderBottomLeftRadius: Math.min(width/5, height/7)/2,
    },

    buttonGroup: {
      flex: 2,
      justifyContent: "center",
    },

    top: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    },

    downArrow: {
      fontFamily: 'Roboto-Light',
      fontSize: Math.min(width/15, height/20),
      color: "white",
    },

    bottom: {
      paddingTop: height/20,
      flex: 5,
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "space-between",
    },

    buttonRow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "space-around",
    },
  }
));

export default App;