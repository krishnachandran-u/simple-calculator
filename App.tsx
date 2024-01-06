import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Button from "./components/Button";

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
            <Button text = "AC" />
          </View>
          <View style = {styles.bottom}>
            <View style = {styles.buttonRow}>

            </View>
            <View style = {styles.buttonRow}>
            
            </View>
            <View style = {styles.buttonRow}>

            </View>
            <View style = {styles.buttonRow}>

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
      width: width
    },

    main: {
      flex: 1,
      flexDirection: "column",
    },

    display: {
      flex: 1,
      borderWidth: 2,
      borderColor: "black",
    },

    buttonGroup: {
      flex: 2,
      borderWidth: 2,
      borderColor: "black",
    },

    top: {

    },

    signButton: {

    },

    bottom: {

    },

    buttonRow: {
      flex: 1,
    },

    button: {

    }
  }
));

export default App;