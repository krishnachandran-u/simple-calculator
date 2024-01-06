import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height } = Dimensions.get('window')
const { width } = Dimensions.get('window')

export default function App(){
  return (
    <View style = {styles.root}>
      <View style = {styles.main}>
        <View style = {styles.display}>
        
        </View>
        <View style = {styles.buttons}>

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
    buttons: {
      flex: 2,
      borderWidth: 2,
      borderColor: "black",
    }
  }
));
