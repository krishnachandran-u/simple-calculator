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
        setResult(parseInt(firstNumber) + parseInt(secondNumber));
        break;
      case "-":
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        setResult(parseInt(firstNumber) * parseInt(secondNumber));
        break;
      case "/":
        setResult(parseFloat((parseInt(firstNumber) / parseInt(secondNumber)).toFixed(6)));
        break;
      default:
        setResult(0);
        break;
    }
  }

  const displayFirstNumber = () => {
    //if result is not null, display result
    if(result !== null) { 
      return (
        <Text style = {styles.result}>
          {result.toString()}
        </Text>
      )  
    }
    //if firstNumber is not null, display firstNumber
    else if((firstNumber !== "")) {
      return (
        <Text style = {styles.firstNumber}>
          {firstNumber.toString()}
        </Text>
      )
    }
    //else there is no firstNumber, hence display 0
    else { 
      return (
        <Text style = {styles.firstNumber}>
          {"0"}
        </Text>
      )
    }
  }

  return (
    <View style = {styles.root}>
      <View style = {styles.main}>
        <View style = {styles.display}>
          <View style = {styles.topDisplay}>
            <Text style = {styles.secondNumber}>{secondNumber}</Text>
            <Text style = {styles.operation}>{operation}</Text>
          </View>
          <View style = {styles.bottomDisplay}>
            {displayFirstNumber()}
          </View>
        </View>
        <View style = {styles.buttonGroup}>
          <View style = {styles.bottom}>
            <View style = {styles.buttonRow}>
              <Button text = "AC" color = "#ffdade" onPress = {() => AllClear()}/>
              <Button text = "C" color = "#ffdade" onPress = {() => Clear()}/>
              <Button text = "%" />
              <Button text = "÷" onPress = {() => handleOperationPress("/")}/>
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "7" onPress = {() => handleNumberPress("7")}/> 
              <Button text = "8" onPress = {() => handleNumberPress("8")}/>
              <Button text = "9" onPress = {() => handleNumberPress("9")}/>
              <Button text = "*" onPress = {() => handleOperationPress("*")}/>
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "4" onPress = {() => handleNumberPress("4")}/>
              <Button text = "5" onPress = {() => handleNumberPress("5")}/>
              <Button text = "6" onPress = {() => handleNumberPress("6")}/>
              <Button text = "-" onPress = {() => handleOperationPress("-")}/>
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "1" onPress = {() => handleNumberPress("1")}/>
              <Button text = "2" onPress = {() => handleNumberPress("2")}/>
              <Button text = "3" onPress = {() => handleNumberPress("3")}/>
              <Button text = "+" onPress = {() => handleOperationPress("+")}/>
            </View>
            <View style = {styles.buttonRow}>
              <Button text = "0" onPress = {() => handleNumberPress("0")}/>
              <Button text = "." onPress = {() => handleNumberPress(".")}/>
              <Button text = "⌫" onPress = {() => setFirstNumber(firstNumber.slice(0, -1))}/>
              <Button text = "=" color = "#ffdade" onPress = {() => getResult()}/>
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
      flexDirection: "column",
      backgroundColor: "#a098a4",
      borderBottomRightRadius: Math.min(width/5, height/7)/2,
      borderBottomLeftRadius: Math.min(width/5, height/7)/2,
      justifyContent: "space-around",
      alignContent: "space-around",
    },

    topDisplay: {
      flex: 1,
      color: "black",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignContent: "flex-end",
      padding: width/20,
    },

    secondNumber: {
      fontFamily: 'Roboto-Light',
      fontSize: Math.min(width / 14, height / 17),
    },

    operation: {
      fontFamily: 'Roboto-Light',
      fontSize: Math.min(width / 14, height / 17),
    },

    result: {
      fontFamily: 'Roboto-Light',
      fontSize: Math.min(width / 10, height / 13),
      marginRight: width/20,
    },

    bottomDisplay: {
      flex: 1,
      color: "black",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignContent: "flex-end",
    },

    firstNumber: {
      color: "black",
      fontFamily: "Roboto-Light",
      fontSize: Math.min(width / 12, height / 15),
      marginRight: width/20,
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