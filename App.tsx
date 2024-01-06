import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Button from "./components/Button";
import MiniButton from "./components/MiniButton";

const { height } = Dimensions.get('window')
const { width } = Dimensions.get('window')

const App = () => {
  return (
    <View style = {styles.root}>
      <View style = {styles.main}>
        <View style = {styles.display}>

        </View>
        <View style = {styles.buttonGroup}>
          <View style = {styles.top}>
            <MiniButton text = "√" />
            <MiniButton text = "π" />
            <MiniButton text= "^" />
            <MiniButton text = "!" />
          </View>
          <View style = {styles.bottom}>
            <View style = {styles.buttonRow}>
              <Button text = "AC" color = "#e30425" />
              <Button text = "( )" />
              <Button text = "%" />
              <Button text = "/" />
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
      backgroundColor: "#4e0d3a"
    },

    main: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "space-between",
    },

    display: {
      flex: 1,
      backgroundColor: "#5d1049",
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

    signButton: {

    },

    bottom: {
      flex: 5,
      flexDirection: "column",
      justifyContent: "space-between",
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